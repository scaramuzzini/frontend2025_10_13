import { useState } from 'react';
import './JogoDaVelha.css'

function Quadrado({quadrado, handleClick}) {

    return <button className="q" onClick={handleClick}>{quadrado}</button>
}

function verificarVencedor(q) {
    const combinacoesVencedoras = [
        [0,1,2], //l1
        [3,4,5], //l2
        [6,7,8], //l3

        [0,3,6], //c1
        [1,4,7], //c2
        [2,5,8], //c3

        [0,4,8],//dp
        [2,4,6],//ds
    ];
  
   for (let i=0;i<combinacoesVencedoras.length; i++) {
        const [p1,p2,p3] = combinacoesVencedoras[i];
        if (q[p1] && q[p1] == q[p2] && q[p2] == q[p3]) {
            return q[p1]; 
        }
   }

   return null;
}

function Tabuleiro() {
    const [quadrados,setQuadrados] = useState(Array(9).fill(null));
    const [vezDoX,setVezDoX] = useState(true);

    function handleClick(i) {
        if (verificarVencedor(quadrados)) {
            return;
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
    let mensagem;
    let vencedor = verificarVencedor(quadrados);
    if (vencedor) {
        mensagem = "Vencedor é "+vencedor;
    } else {
        let vazio = false;
        for (let j=0;j<quadrados.length;j++) {
            if (quadrados[j] == null) {
                vazio = true;
                break;
            }
        }
        if (vazio) {
            mensagem = 'Vez do jogador: ' + (vezDoX ? 'X' : 'O');
        } else {
            mensagem = 'Velhou...(empate)';
        }
    }
    
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