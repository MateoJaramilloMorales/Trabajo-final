import styles from "../styles/Home.module.scss";
// Importa el componente Image de Next.js
import Image from "next/image";

// Componente funcional Main
const Main = () => {
  return (
    // Sección principal con clase hero
    <section className={` ${styles.hero}`}>
      <section className={styles.left}>
        <h1 className={` ${styles.heading}`}>
        Un paso hacia un estilo de vida saludable
        </h1>
        <p className={` ${styles.subheading}`}>
        Un cuerpo sano es el secreto de un estilo de vida saludable. Empieza el día con{" "}
          <b>Fitness</b>.
        </p>

        {}
        <div className={styles.CTAs}>
          <button className={` ${styles.CTA} ${styles.fill}`}>
          Mantente conectado
          </button>
          <button className={` ${styles.CTA} ${styles.outline}`}>
          Mantente fuerte
          </button>
        </div>
      </section>
      <section className={styles.right}>
        {}
        <div className={styles.image}>
          <Image
            height={528}
            width={800}
            alt="Dama en postura de estiramiento"
            src="/images/banner-img.png"
          />
        </div>
      </section>
    </section>
  );
};

// Exporta el componente Main como el valor por defecto del módulo
export default Main;
