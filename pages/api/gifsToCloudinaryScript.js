const cloudinary = require("cloudinary").v2;
const gifUrls = require("../../db.json");
require("dotenv").config();

// Configurar Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Sube las imágenes a Cloudinary y renómbralas con sus IDs
const uploadGifs = async () => {
  const uploadGifs = [];

  for (const gif of gifUrls) {
    const id = gif.id;
    const gifUrl = gif.gifUrl;
    const publicId = `gif_image_${id}`;

    try {
      const uploadResult = await cloudinary.uploader.upload(gifUrl, {
        folder: "Exercises_Gif",
        public_id: publicId,
        overwrite: true,
        resource_type: "auto",
      });

      uploadGifs.push({
        id: id,
        gifUrl: uploadResult.secure_url,
        bodyPart: gif.bodyPart,
        equipment: gif.equipment,
        name: gif.name,
        target: gif.target,
      });

      console.log(`Imagen ${publicId} cargado correctamente.`);
    } catch (error) {
      console.error(`Error al cargar la imagen ${publicId}:`, error);
    }
  }

  return uploadGifs;
};


uploadGifs()
  .then((uploadGifs) => {
    console.log(JSON.stringify(uploadGifs));
  })
  .catch((error) => {
    console.error("Error al cargar imágenes:", error);
  });
