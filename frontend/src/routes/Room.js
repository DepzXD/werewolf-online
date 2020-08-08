import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connectSocket } from '../utils/api';
import GameUI from '../components/GameUI';

export default function Room({ match, location }) {
    const room = match.params.roomID;
    const playerName = location.state && location.state.name;
    const socketRef = React.useRef();
    const [uiState, setUIState] = React.useState({});
    
    useEffect(() => {
        if (playerName) {
            socketRef.current = connectSocket();
            socketRef.current.emit('join room', { room, playerName });
            socketRef.current.on('update state', state => {
                console.log(state);
                setUIState(state);
            });
        }
    }, []);

    function startGame() {
        socketRef.current.emit('start game', { room });
    }

    return (
        <div>
            <div>
                {!playerName && <Redirect to={'/'} />}
                This is room {room}.
                <br />
                Your name is {playerName}.
            </div>
            Players in room:
            {JSON.stringify(uiState.players)}
            {uiState.roomState === 'ready' && <button onClick={startGame}>Start Game</button>}
            {uiState.roomState === 'started' && <GameUI state={uiState} />}
        </div>
    )
}