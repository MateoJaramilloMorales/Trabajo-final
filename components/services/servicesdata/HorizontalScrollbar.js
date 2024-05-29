import React, { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { Box, Typography } from "@mui/material";
import Image from "next/dist/client/image.js";

// Importa los componentes ExerciseCard y BodyPart
import ExerciseCard from "./ExerciseCard.js";
import BodyPart from "./BodyPart.js";
// Importa las imágenes de flecha de exportaciones
import { LeftArrowIcon, RightArrowIcon } from "../../assets/exports.js";

  // Componente funcional LeftArrow para la flecha izquierda del scroll
const LeftArrow = () => {
  // Obtiene la función scrollPrev del contexto de visibilidad
  const { scrollPrev } = useContext(VisibilityContext);
  return (
      // Elemento Typography que actúa como botón de flecha izquierda
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <Image src={LeftArrowIcon} alt="left-arrow" />
    </Typography>
  );
};

// Componente funcional RightArrow para la flecha derecha del scroll
const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <Image src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

// Componente funcional HorizontalScrollbar que renderiza un menú de desplazamiento horizontal
const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
  <Box sx={{ overflow: "hidden" }}>
    {" "}
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
          {bodyParts ? (
            <BodyPart
              item={item}
              setBodyPart={setBodyPart}
              bodyPart={bodyPart}
            />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </Box>
      ))}
    </ScrollMenu>
  </Box>
);

// Exporta el componente HorizontalScrollbar como el valor por defecto del módulo
export default HorizontalScrollbar;
