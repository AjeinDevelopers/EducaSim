import React, { useState, useEffect } from 'react';
import Boton from '../boton/boton';
import './SopaLetras.css';
import { NavLink } from 'react-router-dom';

const SopaLetras = () => {
    const gridSize = 10;
    const [grid, setGrid] = useState(Array(gridSize).fill(null).map(() => Array(gridSize).fill('')));
    const [selectedCells, setSelectedCells] = useState([]);
    const [foundWords, setFoundWords] = useState([]);
    const [gameOver, setGameOver] = useState(false);

    const words = [
        { word: 'DECENAS', x: 0, y: 0, direction: 'horizontal' },
        { word: 'GRAFICO', x: 7, y: 0, direction: 'vertical' },
        { word: 'FORMA', x: 2, y: 7, direction: 'horizontal' },
        { word: 'COMPARAR', x: 0, y: 2, direction: 'vertical' },
        { word: 'RESTAR', x: 1, y: 3, direction: 'horizontal' },
        { word: 'LONGITUD', x: 9, y: 0, direction: 'vertical' },
        { word: 'SUMAR', x: 4, y: 2, direction: 'horizontal' },
        { word: 'HORA', x: 3, y: 6, direction: 'vertical' },

    ];

    useEffect(() => {
        const newGrid = Array(gridSize).fill(null).map(() => Array(gridSize).fill(''));
        words.forEach(({ word, x, y, direction }) => {
            for (let i = 0; i < word.length; i++) {
                if (direction === 'horizontal') {
                    newGrid[y][x + i] = { letter: word[i], found: false };
                } else if (direction === 'vertical') {
                    newGrid[y + i][x] = { letter: word[i], found: false };
                }
            }
        });

        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        for (let i = 0; i < gridSize; i++) {
            for (let j = 0; j < gridSize; j++) {
                if (!newGrid[i][j]) {
                    newGrid[i][j] = { letter: letters[Math.floor(Math.random() * letters.length)], found: false };
                }
            }
        }

        setGrid(newGrid);
    }, []);

    useEffect(() => {
        if (foundWords.length === words.length) {
            setGameOver(true);
        }
    }, [foundWords, words]);

    const handleCellClick = (row, col) => {
        if (gameOver) return;

        setSelectedCells([...selectedCells, { row, col }]);
    };

    const checkWord = () => {
        if (gameOver) return;

        const selectedWord = selectedCells.map(cell => grid[cell.row][cell.col].letter).join('');
        const reversedWord = selectedWord.split('').reverse().join('');
        const foundWord = words.find(word => word.word === selectedWord || word.word === reversedWord);

        if (foundWord && !foundWords.includes(foundWord.word)) {
            alert('¡Correcto!');
            setFoundWords([...foundWords, foundWord.word]);
            markWordAsFound(foundWord);
            setSelectedCells([]);

            const { x, y, direction, word: wordString } = foundWord;
            for (let i = 0; i < wordString.length; i++) {
                let row = y, col = x;
                if (direction === 'horizontal') {
                    col += i;
                } else if (direction === 'vertical') {
                    row += i;
                }
                const cellElement = document.querySelector(`.sopa-cell[data-row="${row}"][data-col="${col}"]`);
                if (cellElement) {
                    cellElement.classList.add('bounce');
                    setTimeout(() => {
                        cellElement.classList.remove('bounce');
                    }, 500); 
                }
            }
        } else {
            alert('Incorrecto');
            setSelectedCells([]);
        }
    };

    const markWordAsFound = (word) => {
        const { x, y, direction, word: wordString } = word;
        let newGrid = [...grid];
        for (let i = 0; i < wordString.length; i++) {
            if (direction === 'horizontal') {
                newGrid[y][x + i].found = true;
            } else if (direction === 'vertical') {
                newGrid[y + i][x].found = true;
            }
        }
        setGrid(newGrid);
    };

    return (
        <>
            <div className="word-search-container">
                {grid.map((row, rowIndex) =>
                    row.map((cell, cellIndex) => (
                        <div
                            className={`sopa-cell ${selectedCells.some(c => c.row === rowIndex && c.col === cellIndex) ? 'selected' : ''} ${cell.found ? 'found' : ''}`}
                            key={`${rowIndex}-${cellIndex}`}
                            data-row={rowIndex}
                            data-col={cellIndex}
                            onClick={() => handleCellClick(rowIndex, cellIndex)}
                        >
                            {cell.letter}
                        </div>
                    ))
                )}
            </div>
            <div style={{ display: "flex", alignItems: "center", width: "100%", justifyContent: "center", marginTop: "10px", padding: "0px var(--M, 48px)", gap: "160px" }}>
                {!gameOver && <button onClick={checkWord}>Check Word</button>}
            </div>
            <div style={{ display: "flex", alignItems: "center", width: "100%", justifyContent: "center", padding: "0px var(--M, 10px)" }}>
                {gameOver && (
                   <NavLink className={''} to='/menu/Lec'> <Boton size={"small"} Style={"secondary"} text={"Regresar al inicio"} showIcon2={true} icon2={"fa-solid fa-check fa-fw"} />
                    </NavLink>
                )}
            </div>
        </>
    );
};

export default SopaLetras;
