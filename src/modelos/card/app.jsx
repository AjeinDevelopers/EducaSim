import React, { useState } from "react";
import Card from "./components/Card";

function App() {
  const cardData = [
    {
      direction: "vertical",
      width: "304px",
      header: "Holaa",
      link: true,
      actions: true,
      adicional: true,
      bt1: "Hola",
      bt2: "Hola",
      score: "10.0",
      date: "10/10/2021",
      img: "si",
      text: "Textooooooooooooooo oo  o oo  oooooooooo ooo o o o o  o o ooooooasdasdsadsad",
      toLink: "/example1",
      click1: () => console.log('Botón 1 presionado'),
      click2: () => console.log('Botón 2 presionado')
    },
    // Añade más objetos según sea necesario
  ];

  const [visibleCount, setVisibleCount] = useState(5); // Muestra 5 elementos inicialmente

  const handleShowMore = () => {
    setVisibleCount(prevCount => prevCount + 5); // Muestra 5 elementos más al hacer clic
  };

  return (
    <div>
      {cardData.slice(0, visibleCount).map((cardProps, index) => (
        <Card key={index} {...cardProps} />
      ))}
      {visibleCount < cardData.length && (
        <button onClick={handleShowMore}>Ver más</button>
      )}
    </div>
  );
}

export default App;
