import Image from "next/image";
import styles from "../../styles/Home.module.scss";

// Componente funcional WorkoutList
const WorkoutList = ({ items }) => (
  // Lista no ordenada que contiene elementos de entrenamiento
  <ul className={styles.workoutList}>
    {items.map(
      ({ title, subheading, stats, image: { height, width } }, idx) => (
        <li className={styles.item} key={idx}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.subheading}>{subheading}</p>
          {}

          {}
          <div className={styles.image}>
            <Image
              height={height}
              width={width}
              alt={`${title} Demo Image`}
              src={`/images/workout-items/${
                { 1: "first", 2: "second", 3: "third" }[idx + 1]
              }.png`}
            />
          </div>
        </li>
      )
    )}
  </ul>
);

// Exporta el componente WorkoutList como el valor por defecto del módulo
export default WorkoutList;
