import React from "react";
import styles from "../styles/Home.module.scss";
// Importa el componente Head de Next.js para manejar metadatos de la página
import Head from "next/dist/shared/lib/head";
// Importa el componente Link de Next.js para la navegación interna
import Link from "next/dist/client/link";

// Componente funcional Navbar
const Navbar = () => {
  return (
    <div>
      <Head>
        <title>Fitness</title>
        <meta
          name="descripción"
          content="Creado para mejorar el rendimiento en el gimnasio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.left}>
          <Link href="/">
            <a className={styles.logo}>Fitness</a>
          </Link>
        </div>

        <div className={styles.right}>
          <Link href="#" passHref>
            <a className={styles.cta}>Mantente fuerte</a>
          </Link>
        </div>
      </header>
    </div>
  );
};

// Exporta el componente Navbar como el valor por defecto del módulo
export default Navbar;
