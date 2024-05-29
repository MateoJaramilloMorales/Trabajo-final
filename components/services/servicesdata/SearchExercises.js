// Importa React y los componentes necesarios de Material-UI
import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField } from "@mui/material";
// Importa el componente HorizontalScrollbar
import HorizontalScrollbar from "./HorizontalScrollbar.js";
// Importa los estilos del módulo Home.module.scss
import styles from "../../../styles/Home.module.scss";

// Componente funcional SearchExercises para buscar y filtrar ejercicios
const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  // Define el estado para el valor de búsqueda y las partes del cuerpo
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  // useEffect para obtener y establecer las partes del cuerpo disponibles al cargar el componente
  useEffect(() => {
    const fetchData = async () => {
      fetch("/api/exercises?bodyPartsList=true")
        .then((response) => response.json())
        .then((data) => setBodyParts(["all", ...data]))
        .catch((error) => console.error(error));
    };
    fetchData();
  }, []);

  // Función para manejar la búsqueda de ejercicios
  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetch("/api/exercises").then((response) =>
        response.json()
      );
      const searchedExercises = exercisesData.filter(
        // Filtra los ejercicios basados en el valor de búsqueda
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
      );

      // Desplaza la página hacia abajo después de realizar la búsqueda
      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });

      setSearch("");
      setExercises(searchedExercises);
    }
  };


  return (
    // Contenedor principal del componente con estilos y disposición de los elementos
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Box position="relative" mb="72px" display="flex">
        <TextField
          className="search-exercises"
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "60vw", xs: "80vw" },
            height: { lg: "55px", xs: "50px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
            border: "none",
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className={[styles.CTA, styles.fill].join(" ")}
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "173px", xs: "80px" },
            height: "56px",
            position: "absolute",
            right: "0px",
            fontSize: { lg: "20px!important", xs: "14px!important" },
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar
          data={bodyParts}
          bodyParts
          setBodyPart={setBodyPart}
          bodyPart={bodyPart}
        />
      </Box>
    </Stack>
  );
};

// Exporta el componente SearchExercises como el valor por defecto del módulo
export default SearchExercises;
