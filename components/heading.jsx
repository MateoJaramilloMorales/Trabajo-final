// Importa los estilos del módulo Home
import styles from "../styles/Home.module.scss";

// Componente funcional Heading
const Heading = ({ name }) => {
  return (
    // Sección que contiene el encabezado
    <section className={styles.topWorkout}>
      <h2 className={styles.heading}>{name}</h2>
    </section>
  );
};

// Exporta el componente Heading como el valor por defecto del módulo
export default Heading;
