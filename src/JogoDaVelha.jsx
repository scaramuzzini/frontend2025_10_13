import { useState } from 'react';
import './JogoDaVelha.css'

function Quadrado({quadrado, handleClick}) {

    return <button className="q" onClick={handleClick}>{quadrado}</button>
}

function verificarVencedor(q) {
    /*
        AND (E)
        V V = V
        V F = F
        F V = F
        F F = F
    */
   if (q[0] == q[1] && q[1] == q[2]) {
    return q[0]; 
   }
   return null;
}

function Tabuleiro() {
    const [quadrados,setQuadrados] = useState(Array(9).fill(null));
    const [vezDoX,setVezDoX] = useState(true);

    function handleClick(i) {
        let vencedor = verificarVencedor(quadrados);
        if (vencedor) {
            alert('O vencedor é: '+vencedor);
        }
        if (quadrados[i] == null) {
            const novosQuadrados = quadrados.slice();
            novosQuadrados[i] = vezDoX ? 'X' : 'O';
            setQuadrados(novosQuadrados);
            setVezDoX(!vezDoX);
        }
    }

    function handleLimparTabuleiro() {
        setQuadrados(Array(9).fill(null));
        setVezDoX(true);
    }

    let mensagem = 'Vez do jogador: ' + (vezDoX ? 'X' : 'O');
    
    return (
        <>
            <h2 className='msg'>{mensagem}</h2>
            <button onClick={handleLimparTabuleiro}>Limpar</button>
            <div className='linha'>
                <Quadrado 
                    quadrado={quadrados[0]} 
                    handleClick={() => handleClick(0)} />
                <Quadrado 
                    quadrado={quadrados[1]} 
                    handleClick={() => handleClick(1)}/>
                <Quadrado 
                    quadrado={quadrados[2]} 
                    handleClick={() => handleClick(2)}/>
            </div>
            <div className='linha'>
                <Quadrado 
                    quadrado={quadrados[3]} 
                    handleClick={() => handleClick(3)}/>
                <Quadrado 
                    quadrado={quadrados[4]} 
                    handleClick={() => handleClick(4)}/>
                <Quadrado 
                    quadrado={quadrados[5]} 
                    handleClick={() => handleClick(5)}/>
            </div>
            <div className='linha'>
                <Quadrado 
                    quadrado={quadrados[6]} 
                    handleClick={() => handleClick(6)}/>
                <Quadrado 
                    quadrado={quadrados[7]} 
                    handleClick={() => handleClick(7)}/>
                <Quadrado 
                    quadrado={quadrados[8]} 
                    handleClick={() => handleClick(8)}/>
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