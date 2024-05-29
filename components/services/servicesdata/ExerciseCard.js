// Importa las dependencias necesarias desde React y Next.js
import React from "react";
import Link from "next/link";
// Importa los componentes necesarios de Material-UI
import { Button, Stack, Typography } from "@mui/material";
// Importa el componente Image de Next.js para la optimización de imágenes
import Image from "next/image";

// Define el componente funcional ExerciseCard, que toma la prop exercise
const ExerciseCard = ({ exercise }) => (
  (
    // Utiliza el componente Link de Next.js para crear un enlace a la página del ejercicio específico
    <Link href="/exercise/[id]" as={`/exercise/${exercise.id}`} passHref>
      <div className="exercise-card">
        <Image
          src={exercise.gifUrl}
          alt={exercise.name}
          loading="lazy"
          width={300}
          height={300}
          key={exercise.id}
        />
        <Stack direction="row">
          <Button
            sx={{
              ml: "21px",
              color: "#fff",
              background: "#02e9bb",
              fontSize: "14px",
              borderRadius: "20px",
              textTransform: "capitalize",
            }}
          >
            {exercise.bodyPart}
          </Button>
          <Button
            sx={{
              ml: "21px",
              color: "#fff",
              background: "#ff2d5e",
              fontSize: "14px",
              borderRadius: "20px",
              textTransform: "capitalize",
            }}
          >
            {exercise.target}
          </Button>
        </Stack>
        <Typography
          ml="21px"
          color="#000"
          fontWeight="bold"
          sx={{ fontSize: { lg: "24px", xs: "20px" } }}
          mt="11px"
          pb="10px"
          textTransform="capitalize"
        >
          {exercise.name}
        </Typography>
      </div>
    </Link>
  )
);

// Exporta el componente ExerciseCard como el valor por defecto del módulo
export default ExerciseCard;
