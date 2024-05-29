// Importa estilos globales
import "../styles/globals.scss";
// Importa estilos específicos para servicio
import "../styles/services.scss";

function MyApp({ Component, pageProps }) {
  // Pasa las props del componente y de la página al componente principal
  return <Component {...pageProps} />;
}

export default MyApp;
