import React, { useEffect, useState } from 'react';

import io from "socket.io-client";

const deployedServer = "https://10eef70d15c8.ngrok.io/";
const localServer = "ws://localhost:8000";

const socket = io.connect(deployedServer, {
  reconnection: true,
  reconnectionDelay: 500,
  reconnectionDelayMax: 1000,
  reconnectionAttempts: Infinity,
});

const App = () => {
  const [lastBase64, setNewBase64] = useState('');

  useEffect(() => {
    socket.on('travelor image broadcasted', (data) => {
      setNewBase64(data['base64']);
    });
  }, []);

  return (
    <div style={{
      'margin': '0px',
      'overflow': 'hidden'
    }}>
      <a-scene>
        {/* <a-box position='0 0.5 0' material='opacity: 0.5;'></a-box> */}
        <a-curvedimage height="4" radius="4" theta-length="100"
          rotation="0 100 0" scale="0.8 0.8 0.8"  src={lastBase64}></a-curvedimage>
        <a-marker-camera preset='hiro'></a-marker-camera>
      </a-scene>
    </div>
  );
}

export default App;
