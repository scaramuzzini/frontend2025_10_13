import { useState } from 'react';
import './JogoDaVelha.css'

function Quadrado() {
    const [quadrado,setQuadrado] = useState('');

    function handleClick() {
        if (quadrado === 'X') {
            setQuadrado('O');
        } else {
            setQuadrado('X');
        }
    }

    return <button className="q" onClick={handleClick}>{quadrado}</button>
}

function Tabuleiro() {
    return (
        <>
            <div className='linha'>
                <Quadrado />
                <Quadrado />
                <Quadrado />
            </div>
            <div className='linha'>
                <Quadrado />
                <Quadrado />
                <Quadrado />
            </div>
            <div className='linha'>
                <Quadrado />
                <Quadrado />
                <Quadrado />
            </div>
        </>
    );
}

function JogoDaVelha() {
    return (
        <>
            <h1>Jogo da Velha</h1>
            <Tabuleiro />
        </>
    );
}

export default JogoDaVelha;