// Importa estilos del módulo Home
import styles from "../styles/Home.module.scss";
// Importa el componente Navbar
import Navbar from "../components/navbar";
// Importa el componente Main
import Main from "../components/main";
// Importa el componente Workouts
import Workouts from "../components/workouts/workouts.jsx";
// Importa el componente About
import About from "../components/about";
// Importa el componente Heading
import Heading from "../components/heading";
// Importa el componente Services
import Services from "../components/services/services";
// Importa el componente LoadingAnimation
import LoadingAnimation from "../components/pageloader";
// Importa useEffect y useState de React
import { useEffect, useState } from "react";

export default function App() {
  // Define el estado showLoader para controlar la visualización del loader
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // useEffect se utiliza para ejecutar efectos secundarios en componentes funcionales, como por ejemplo, cargar datos o realizar actualizaciones basadas en cambios de estado.
    const timer = setTimeout(() => {
      setShowLoader(false); // Desactiva el loader después de 3000 ms (3 segundos)
    }, 3000);// Espera 3000 ms (3 segundos)
    return () => clearTimeout(timer); // Limpia el temporizador para evitar fugas de memoria cuando el componente se desmonta
  }, []);// El efecto se ejecuta solo una vez, después de que el componente se monta

  return (
    <>
      {showLoader ? <LoadingAnimation /> : ""}
      <div className={styles.wrapper}>
        <div className={styles.wrapper_padding}>
          <Navbar />
          <Main />
          <Heading name={"Los mejores entrenamientos"} />
          <Workouts />
          <About />
          <Heading name={"Top Servicios"} />
        </div>
        <Services />
      </div>
    </>
  );
}

