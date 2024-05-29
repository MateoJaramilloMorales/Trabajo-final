// Importa las dependencias necesarias desde React y Material-UI
import React from "react";
import { Stack, Typography } from "@mui/material";
// Importa la imagen del icono desde la ruta especificada
import Icon from "../../assets/icons/gym.png";
// Importa el componente Image desde Next.js para la optimización de imágenes
import Image from "next/dist/client/image";


// Define el componente funcional BodyPart, que toma las propiedades item, setBodyPart, y bodyPart
const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={
      bodyPart === item
        ? {
            borderTop: "4px solid #FF2625",
            background: "#fff",
            padding: "35px",
            borderBottomLeftRadius: "20px",
            cursor: "pointer",
            gap: "47px",
          }
        : {
            background: "#fff",
            borderBottomLeftRadius: "20px",
            padding: "35px",
            cursor: "pointer",
            gap: "47px",
          }
    }
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 2000, left: 100, behavior: "smooth" });
    }}
  >
    <Image
      src={Icon}
      alt={item}
      style={{ width: "40px", height: "40px" }}
    />
    <Typography
      fontSize="24px"
      fontWeight="bold"
      fontFamily="Alegreya"
      color="#3A1212"
      textTransform="capitalize"
    >
      {" "}
      {item}
    </Typography>
  </Stack>
);

export default BodyPart;
