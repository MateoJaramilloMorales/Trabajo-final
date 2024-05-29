import styles from "../styles/Home.module.scss";
import Image from "next/image";

// Componente funcional About
const About = () => {
  return (
    // Sección que contiene información sobre la empresa o la página web
    <section className={styles.about}>
      <div className={styles.image}>
        <Image
          width={600}
          height={640}
          src={"/images/about-img.png"}
          alt={"Quiénes somos"}
        />
      </div>
      <div className={styles.about_info}>
        <span className={styles.sub_title}>Quiénes somos</span>
        <h2>Estamos Listos Para Ponerte En Forma</h2>
        <div>
          <p>
          Encontrar la motivación para hacer ejercicio puede ser todo un reto. Hay muchas distracciones y alternativas menos exigentes físicamente que pasar una hora en el gimnasio o hacer ejercicio en casa.
          </p>
          <p>
          Tienes que entender que la fuerza no proviene de la capacidad física. Proviene de una voluntad indomable.
          </p>
        </div>
        <span className={styles.button}>Más información</span>
      </div>
    </section>
  );
};

// Exporta el componente About como el valor por defecto del módulo
export default About;
