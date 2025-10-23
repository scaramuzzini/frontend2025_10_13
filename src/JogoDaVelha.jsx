import './JogoDaVelha.css'

function Tabuleiro() {
    return (
        <>
            <div>
                <button className="q">O</button>
                <button className="q">X</button>
                <button className="q">X</button>
            </div>
            <div>
                <button className="q">X</button>
                <button className="q">X</button>
                <button className="q">X</button>
            </div>
            <div>
                <button className="q">X</button>
                <button className="q">X</button>
                <button className="q">X</button>
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