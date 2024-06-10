import React, { useState, useEffect } from 'react';
import './Memorama.css';

const symbols = ['+', '-', 'x', '÷', '=', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

const Memorama = () => {
    const [cards, setCards] = useState([]);
    const [firstCard, setFirstCard] = useState(null);
    const [secondCard, setSecondCard] = useState(null);
    const [lockBoard, setLockBoard] = useState(false);

    const startNewGame = () => {
        setFirstCard(null);
        setSecondCard(null);
        setLockBoard(false);
        createCards();
    };

    const createCards = () => {
        let shuffledSymbols = [...symbols, ...symbols];
        shuffledSymbols.sort(() => 0.5 - Math.random());

        const newCards = shuffledSymbols.map((symbol, index) => {
            return {
                id: index,
                symbol: symbol,
                isFlipped: false
            };
        });

        setCards(newCards);
    };

    const flipCard = (id) => {
        if (lockBoard) return;

        const updatedCards = cards.map(card => {
            if (card.id === id) {
                return { ...card, isFlipped: true };
            }
            return card;
        });

        setCards(updatedCards);

        if (!firstCard) {
            setFirstCard(id);
        } else {
            setSecondCard(id);
        }
    };

    useEffect(() => {
        const checkForMatch = () => {
            if (firstCard === null || secondCard === null) return;

            const firstCardObject = cards.find(card => card.id === firstCard);
            const secondCardObject = cards.find(card => card.id === secondCard);

            if (!firstCardObject || !secondCardObject) return;

            if (firstCardObject.symbol === secondCardObject.symbol) {
                disableCards();
            } else {
                unflipCards();
            }
        };

        const disableCards = () => {
            setFirstCard(null);
            setSecondCard(null);
        };

        const unflipCards = () => {
            setLockBoard(true);
            setTimeout(() => {
                const updatedCards = cards.map(card => {
                    if (card.id === firstCard || card.id === secondCard) {
                        return { ...card, isFlipped: false };
                    }
                    return card;
                });
                setCards(updatedCards);
                setFirstCard(null);
                setSecondCard(null);
                setLockBoard(false);
            }, 1000);
        };

        if (firstCard !== null && secondCard !== null) {
            checkForMatch();
        }
    }, [cards, firstCard, secondCard, lockBoard]);

    useEffect(() => {
        startNewGame();
    }, []);

    return (
        <div className="game-board">
            {cards.map(card => (
                <div
                    key={card.id}
                    className={`card ${card.isFlipped ? 'flipped' : ''}`}
                    onClick={() => flipCard(card.id)}
                >
                    <div className="card-inner">
                        <div className="card-front">{card.symbol}</div>
                        <div className="card-back"></div>
                    </div>
                </div>
            ))}
            <div className="new-game-container" style={{width:"100%"}}>
                <button className="new-game" onClick={startNewGame}>Nuevo Juego</button>
            </div>
        </div>
    );
};

export default Memorama;
