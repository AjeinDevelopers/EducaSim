// src/components/WordSearch.js
import React, { useState, useEffect } from 'react';
import './WordSearch.css';

const WordSearch = () => {
    const gridSize = 10;
    const [grid, setGrid] = useState(Array(gridSize).fill(null).map(() => Array(gridSize).fill('')));
    const [selectedCells, setSelectedCells] = useState([]);
    const [foundWords, setFoundWords] = useState([]);
    const [gameOver, setGameOver] = useState(false);

    const words = [
        { word: 'HOLA', clue: 'Saludo en español', x: 0, y: 0, direction: 'horizontal' },
        { word: 'MUNDO', clue: 'Planeta en el que vivimos', x: 1, y: 1, direction: 'vertical' },
        // Agrega más palabras aquí
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

        // Llenar espacios vacíos con letras aleatorias
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
        <div>
            <div className="word-search-container">
                {grid.map((row, rowIndex) =>
                    row.map((cell, cellIndex) => (
                        <div
                            className={`cell ${selectedCells.some(c => c.row === rowIndex && c.col === cellIndex) ? 'selected' : ''} ${cell.found ? 'found' : ''}`}
                            key={`${rowIndex}-${cellIndex}`}
                            onClick={() => handleCellClick(rowIndex, cellIndex)}
                        >
                            {cell.letter}
                        </div>
                    ))
                )}
            </div>
            {!gameOver && <button onClick={checkWord}>Check Word</button>}
            {gameOver && <div>¡Juego terminado!</div>}
            <div>Palabras encontradas: {foundWords.join(', ')}</div>
        </div>
    );
};

export default WordSearch;
