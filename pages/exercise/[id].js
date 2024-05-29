import React, { useEffect, useState } from "react";
import { Box, Button, Divider } from "@mui/material";
import Link from "next/link";
import {
  fetchData,
  youtubeOptions,
} from "../../components/services/utils/fetchData";
import Detail from "../../components/services/servicesdata/Detail";
import ExerciseVideos from "../../components/services/servicesdata/ExerciseVideos";
import SimilarExercises from "../../components/services/servicesdata/SimilarExercises.js";
import { useRouter } from "next/router";
const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  // const { id } = useParams();

  const router = useRouter();
  const { id } = router.query;
  // console.log(id);
  useEffect(() => {
    // Función para cargar los datos del ejercicio y ejercicios similares
    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchExercisesData = async () => {
      // URL base para la búsqueda de videos de ejercicios en YouTube
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";


        // Obtener los detalles del ejercicio actual por su ID
      const exerciseDetailData = await fetch(`/api/exercises?id=${id}`)
        .then((response) => response.json())
        .catch((error) => console.error(error));
      setExerciseDetail(exerciseDetailData);
      console.log(exerciseDetail);

      const exerciseVideosData = await fetchData(
        // Obtener videos relacionados con el ejercicio actual desde YouTube
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`,
        youtubeOptions
      );
      setExerciseVideos(exerciseVideosData.contents);

      // Obtener ejercicios dirigidos al mismo grupo muscular que el ejercicio actual
      const targetMuscleExercisesData = await fetch(
        `/api/exercises?target=${exerciseDetailData.target}`
      )
        .then((response) => response.json())
        .catch((error) => console.error(error));
      setTargetMuscleExercises(targetMuscleExercisesData);

// Obtener ejercicios que requieren el mismo equipo que el ejercicio actual
      const equimentExercisesData = await fetch(
        `/api/exercises?equipment=${exerciseDetailData.equipment}`
      )
        .then((response) => response.json())
        .catch((error) => console.error(error));
      setEquipmentExercises(equimentExercisesData);
    };
    const exerciseDetail = fetchExercisesData();
    fetchExercisesData();
  }, [id]);


// Llamar a la función para cargar los datos cuando el ID del ejercicio cambie
 // Si no se ha cargado ningún detalle del ejercicio, mostrar un mensaje
  if (!exerciseDetail) return <div>Sin datos</div>;

  return (
    <>
      <Box>
        <Divider color="red" />

        <Link href="/" as={`/`} passHref>
          <Button variant="outlined" sx={{ m: "2rem" }}>
            {" "}
            {" < Volver a Inicio "}{" "}
          </Button>
        </Link>
      </Box>
      <Divider />
      <Box sx={{ mt: { lg: "96px", xs: "60px" } }}>
        <Detail exerciseDetail={exerciseDetail} />
        {}
        <SimilarExercises
          targetMuscleExercises={targetMuscleExercises}
          equipmentExercises={equipmentExercises}
        />
      </Box>
      <Divider color="red" />
    </>
  );
};

export default ExerciseDetail;
