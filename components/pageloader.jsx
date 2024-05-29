import { useEffect, useRef } from "react";
import gsap, { SteppedEase } from "gsap";

const LoadingAnimation = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ paused: true });

    // Animación de letras
    tl.fromTo(
      textRef.current,
      2,
      {
        width: "0",
      },
      {
        width: "4em", // Igual que CSS .line-1 width
        ease: SteppedEase.config(17),
        repeat: -1,
      },
      0
    );

    // Animación del cursor de texto
    tl.fromTo(
      textRef.current,
      0.5,
      {
        "border-right-color": "rgba(255,255,255,0.75)",
      },
      {
        "border-right-color": "rgba(255,255,255,0)",
        repeat: -1,
        ease: SteppedEase.config(17),
      },
      0
    );

    tl.play();

    // Limpiar la línea de tiempo cuando el componente se desmonta
    return () => tl.kill();
  }, []);
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        color: "rgba(255,255,255,.75)",
        background: "rgba(0, 0, 0, 0.8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <h1 ref={textRef} className="anim-typewriter font-animation">
        Fitness
      </h1>
    </div>
  );
};

export default LoadingAnimation;
