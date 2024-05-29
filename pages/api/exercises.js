import exercisesData from "../../db.json";

export default function handler(req, res) {
  // Extraer parámetros de la consulta
  const { target, bodyPart, equipment, bodyPartsList, id, idSort } = req.query;
  // Verificar si la solicitud es de tipo GET
  if (req.method === "GET") {
    let data = exercisesData;
    // Ordenar los ejercicios por ID y actualizar las URL de los GIF si se proporciona el parámetro idSort
    if (idSort) {
      const uniqueIds = [
        ...new Set(
          exercisesData.map((exercise) => ({
            id: exercise.id,
            gifUrl: exercise.gifUrl,
            bodyPart: exercise.bodyPart,
            equipment: exercise.equipment,
            name: exercise.name,
            target: exercise.target,
          }))
        ),
      ];
      // Ordenar los ejercicios por ID
      uniqueIds.sort((a, b) => a.id.localeCompare(b.id));
      // Actualizar los ejercicios con nuevos IDs y URLs de GIF

      const updatedExercises = uniqueIds.map((exercise, index) => ({
        ...exercise,
        id: String(index + 1).padStart(4, "0"),
        gifUrl: `https://res.cloudinary.com/devthakur/image/upload/v1686929351/Exercises_Gif/gif_image_${exercise.id}.gif`,
      }));
      // Enviar respuesta con los ejercicios ordenados y actualizados
      return res.status(200).json(updatedExercises);
    }
    // Buscar un ejercicio por su ID si se proporciona el parámetro id
    if (id) {
      const exercise = exercisesData.find((item) => item.id === id);
      if (exercise) return res.status(200).json(exercise);
      else return res.status(404).json({ error: "Ejercicio no encontrado" });
    }
    // Obtener una lista de todas las partes del cuerpo si se proporciona el parámetro bodyPartsList
    if (bodyPartsList) {
      const bodyPartsList = [
        ...new Set(exercisesData.map((exercise) => exercise.bodyPart)),
      ];
      return res.status(200).json(bodyPartsList);
    }

    // Filtrar los ejercicios por objetivo, parte del cuerpo o equipo si se proporcionan los parámetros correspondientes
    if (target) {
      data = data.filter((exercise) => exercise.target === target);
    }

    if (bodyPart) {
      data = data.filter((exercise) => exercise.bodyPart === bodyPart);
    }

    if (equipment) {
      data = data.filter((exercise) => exercise.equipment === equipment);
    }
    res.status(200).json(data);
  }
  // Enviar un código de estado 405 si la solicitud no es de tipo GET
  res.status(405).end();
}
