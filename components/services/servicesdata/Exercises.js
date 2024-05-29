// Importa las dependencias necesarias desde React y Material-UI
import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";

// Importa los componentes ExerciseCard y Loader
import ExerciseCard from "./ExerciseCard.js";
import Loader from "./Loader.js";

// Define el componente funcional Exercises, que toma las props exercises, setExercises y bodyPart
const Exercises = ({ exercises, setExercises, bodyPart }) => {
  // Define el estado para la página actual y el número de ejercicios por página
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);

  // useEffect para obtener los datos de los ejercicios cuando bodyPart o setExercises cambien
  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];
      // Si bodyPart es "all", obtiene todos los ejercicios

      if (bodyPart === "all") {
        exercisesData = await fetch("/api/exercises")
          .then((response) => response.json())
          .catch((error) => console.error(error));
      } else {
        // Si bodyPart es específico, obtiene los ejercicios filtrados por bodyPart
        exercisesData = await fetch(`/api/exercises?bodyPart=${bodyPart}`)
          .then((response) => response.json())
          .catch((error) => console.error(error));
      }
      // Actualiza el estado de exercises con los datos obtenidos
      setExercises(exercisesData);
    };
        // Llama a la función para obtener los datos de los ejercicios
    fetchExercisesData();
  }, [bodyPart, setExercises]);

  // Paginacion
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );
   // Función para manejar el cambio de página
  const paginate = (event, value) => {
    setCurrentPage(value);
    const res = document.getElementById("showing-results");
    window.scrollTo({ res, behavior: "smooth" });
  };
  // Si no hay ejercicios actuales, muestra el componente Loader
  if (!currentExercises.length) return <Loader />;

  return (
        // Contenedor principal con un margen superior y padding
    <Box sx={{ mt: { lg: "109px" } }} mt="70px" p="20px">
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="46px"
        id="showing-results"
      >
        <div id="exercises"> Resultados</div>
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "107px", xs: "10px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, idx) => (
            // Renderiza una tarjeta de ejercicio para cada ejercicio actual
          <ExerciseCard key={idx} exercise={exercise} />
        ))}
      </Stack>
      <Stack sx={{ mt: { lg: "114px", xs: "70px" } }} alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            className="pagination"
            color="standard"
            shape="circle"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            siblingCount={0}
            sx={{ size: { lg: "large", xs: "small" } }}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

// Exporta el componente Exercises como el valor por defecto del módulo
export default Exercises;
