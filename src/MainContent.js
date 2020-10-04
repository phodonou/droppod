import React, { useEffect, useState } from 'react';

import io from "socket.io-client";
import AAImage from './AAImage';

const deployedServer = "ws://circlebatch-live.herokuapp.com";
const localServer = "ws://localhost:8000";

const socket = io.connect(localServer, {
    reconnection: true,
    reconnectionDelay: 500,
    reconnectionDelayMax: 1000,
    reconnectionAttempts: Infinity,
});


const MainContent = (props) => {
    const [lastBase64, setNewBase64] = useState('');

    useEffect(() => {
        socket.on('travelor image broadcasted', (data) => {
            setNewBase64(data['base64'])
        })
        setNewBase64();
    })

    return (
        <div>
            <AAImage base64={lastBase64} />
        </div>
    );
}

export default MainContent;