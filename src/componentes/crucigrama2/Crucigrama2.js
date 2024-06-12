import React, { useState, useEffect } from 'react';
import './Crucigrama2.css';
import Boton from '../boton/boton';
import { NavLink } from 'react-router-dom';

const Crossword = () => {
    const gridSize = 18;
    const [grid, setGrid] = useState(
        Array(gridSize).fill(null).map(() => Array(gridSize).fill(''))
    );
    const [userGrid, setUserGrid] = useState(
        Array(gridSize).fill(null).map(() => Array(gridSize).fill(''))
    );
    const [gameOver, setGameOver] = useState(false);

    const words = [
        { word: 'FRACCIONES', x: 2, y: 3, direction: 'horizontal' },
        { word: 'PROBABILIDAD', x: 3, y: 2, direction: 'vertical' },
        { word: 'GRAFICA', x: 4, y: 1, direction: 'vertical' },
        { word: 'DECIMAL', x: 10, y: 2, direction: 'vertical' },
        { word: 'AREA', x: 10, y: 7, direction: 'horizontal' },
        { word: 'PERIMETRO', x: 12, y: 6, direction: 'vertical' },
        { word: 'VOLUMEN', x: 8, y: 8, direction: 'vertical' },
        { word: 'ANGULO', x: 7, y: 14, direction: 'horizontal' },
    ];

    useEffect(() => {
        const newGrid = grid.map(row => row.slice());
        words.forEach(({ word, x, y, direction }) => {
            for (let i = 0; i < word.length; i++) {
                if (direction === 'horizontal') {
                    newGrid[y][x + i] = word[i];
                } else if (direction === 'vertical') {
                    newGrid[y + i][x] = word[i];
                }
            }
        });
        setGrid(newGrid);
    }, [words]);

    const handleChange = (e, rowIndex, cellIndex) => {
        if (grid[rowIndex][cellIndex] !== '') {
            const newUserGrid = userGrid.map(row => row.slice());
            newUserGrid[rowIndex][cellIndex] = e.target.value.toUpperCase();
            setUserGrid(newUserGrid);
        }
    };

    const checkAnswers = () => {
        let correct = true;
        for (let i = 0; i < gridSize; i++) {
            for (let j = 0; j < gridSize; j++) {
                if (grid[i][j] && grid[i][j] !== userGrid[i][j]) {
                    correct = false;
                }
            }
        }
        if (correct) {
            setGameOver(true);
            alert('¡Correcto! Felicidades :D.');
        } else {
            alert('Hay errores, sigue intentando.');
        }
    };

    return (
        <>
            <div>
                <div style={{ display: "flex", borderRadius: "8px", background: "#CAE6FF", padding: "10px 16px", justifyContent: "center", alignItems: "center" }}>
                    <t5>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; 1&nbsp; &nbsp; &nbsp; 4&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 7&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                         &nbsp; &nbsp;6 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</t5>
                </div>
            </div>
            <div style={{ display: "flex" }}>
                <div className="crossword-container">
                    {userGrid.map((row, rowIndex) =>
                        row.map((cell, cellIndex) => (
                            <div
                                className={`cell ${grid[rowIndex][cellIndex] ? 'filled' : ''}`}
                                key={`${rowIndex}-${cellIndex}`}
                            >
                                <input
                                    type="text"
                                    maxLength="1"
                                    value={cell}
                                    onChange={(e) => handleChange(e, rowIndex, cellIndex)}
                                    disabled={grid[rowIndex][cellIndex] === '' || gameOver}
                                />
                            </div>
                        ))
                    )}
                </div>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", marginLeft: "10px" }}>
                    <div style={{ borderRadius: "8px", background: "#CAE6FF", padding: "10px 16px" }}>
                        <t5><br />2 <br /><br /><br /><br />3<br /><br /><br /><br /><br />5<br /><br /><br /><br /><br />8<br /><br /><br /><br /><br /></t5>
                    </div>
                </div>
            </div>
            <div style={{ display: "flex",alignItems:"center",width:"100%", justifyContent: "center",marginTop:"-50px" ,padding:" 0px var(--M, 48px)", gap:"160px" }}>
            
                <button onClick={checkAnswers} disabled={gameOver}>Revisar</button>
            
                
            </div>
            <div style={{ display: "flex",alignItems:"center",width:"100%", justifyContent: "center" ,padding:" 0px var(--M, 400px)" }}>
            {gameOver && (
                   <NavLink className={''} to='/menu/Ejer'> <Boton size={"small"} Style={"secondary"} text={"Regresar al inicio"} showIcon2={true} icon2={"fa-solid fa-check fa-fw"} />
                    </NavLink>
                )}
            </div>
        </>

    );
};

export default Crossword;
