// Importa las dependencias necesarias desde React y Material-UI
import React from "react";
import { Typography, Stack, Button } from "@mui/material";

// Importa las imágenes de los iconos desde las rutas especificadas
import BodyPartImage from "../../assets/icons/body-part.png";
import TargetImage from "../../assets/icons/target.png";
import EquipmentImage from "../../assets/icons/equipment.png";

// Define el componente funcional Detail, que toma la prop exerciseDetail
const Detail = ({ exerciseDetail }) => {
  // Desestructura las propiedades del objeto exerciseDetail
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

   // Define un array de objetos que contiene detalles adicionales
  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    // Usa el componente Stack de Material-UI para organizar elementos en un contenedor flexible
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography
          sx={{ fontSize: { lg: "64px", xs: "30px" } }}
          fontWeight={700}
          textTransform="capitalize"
        >
          {name}
        </Typography>
        <Typography
          sx={{ fontSize: { lg: "24px", xs: "18px" } }}
          color="#4F4C4C"
        >
          Los ejercicios te mantienen fuerte.{" "}
          <span style={{ textTransform: "capitalize" }}>{name}</span> bup es uno de los mejores <br /> ejercicios para {target}. Le ayudará a mejorar su <br /> estado de ánimo y ganar energía.
        </Typography>
      </Stack>
    </Stack>
  );
};

// Exporta el componente Detail como el valor por defecto del módulo
export default Detail;
