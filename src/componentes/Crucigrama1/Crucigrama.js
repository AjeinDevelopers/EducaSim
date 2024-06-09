import React, { useState, useEffect } from 'react';
import './Crucigrama.css';

const Crossword = () => {
    const gridSize = 13;
    const [grid, setGrid] = useState(
        Array(gridSize).fill(null).map(() => Array(gridSize).fill(''))
    );
    const [userGrid, setUserGrid] = useState(
        Array(gridSize).fill(null).map(() => Array(gridSize).fill(''))
    );

    const words = [
        { word: 'HOLA', x: 0, y: 0, direction: 'across' },
        { word: 'MUNDO', x: 1, y: 0, direction: 'down' },
        { word: 'AMIGO', x:5, y:1, direction:'down'}
        // Agrega más palabras aquí
    ];

    useEffect(() => {
        const newGrid = grid.map(row => row.slice());
        words.forEach(({ word, x, y, direction }) => {
            for (let i = 0; i < word.length; i++) {
                if (direction === 'across') {
                    newGrid[y][x + i] = word[i];
                } else if (direction === 'down') {
                    newGrid[y + i][x] = word[i];
                }
            }
        });
        setGrid(newGrid);
    }, [grid, words]);

    const handleChange = (e, rowIndex, cellIndex) => {
        if (grid[rowIndex][cellIndex] !== '') { // Verifica si la celda contiene una palabra
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
            alert('¡Correcto!');
        } else {
            alert('Hay errores, sigue intentando.');
        }
    };

    return (
        <>    <div className="crossword-container">
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
                            disabled={grid[rowIndex][cellIndex] === ''}
                        />
                    </div>
                ))
            )}
        </div>

    <button onClick={checkAnswers}>Comprobar</button>
    </>

    );
};

export default Crossword;
