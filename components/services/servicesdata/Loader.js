import React from "react";
import { Stack } from "@mui/material";
// Importa el componente Rings de react-loader-spinner para mostrar el indicador de carga
import { Rings } from "react-loader-spinner";

// Componente funcional Loader que muestra un indicador de carga mientras se espera que se cargue el contenido
const Loader = () => (
    // Utiliza Stack para alinear el indicador de carga en el centro de la pantalla
  <Stack
    direction="row"
    justifyContent="center"
    alignItems="center"
    width="100%"
  >
    <Rings color="grey" />
  </Stack>
);

// Exporta el componente Loader como el valor por defecto del módulo
export default Loader;
