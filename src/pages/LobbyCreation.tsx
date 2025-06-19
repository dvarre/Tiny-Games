import { useEffect, useState } from "react";
import { useStompClient } from "../components/WebSocketProvider";
import { Player } from "../models/Player";
import Lobby from "./Lobby";


const LobbyCreation = () => {
  const [username, setUsername] = useState('');
  const [roomId, setRoomId] = useState('');
  const {client, sessionId} = useStompClient();

  const createRoom = () => {
    if(username.trim().length>0){
      const player = new Player(username, sessionId);
      client?.publish({
        destination: "/app/create-room",
        body: JSON.stringify(player)
        });
    }
  }

  useEffect(() => {
    client?.subscribe("/topic/room-created", (message) => {
        const messageInfos = JSON.parse(message.body);
        console.log("🎉 salle créée avec succès avec l'ID :", messageInfos.roomId, " et avec la session : ", messageInfos.sessionId);
        setRoomId(messageInfos.roomId);
      })

      return () => {client?.unsubscribe("/topic/room-created")};
  }, []);

  const joinRoom = () => {
    if(roomId.length>0){
      client?.subscribe(`/topic/${roomId}`, (message) => {
        console.log("🎉 salle rejointe avec succès : ", message.body);
        client?.unsubscribe(`/topic/${roomId}`);
      })

      const player = new Player(username, sessionId);
      client?.publish({
        destination: `/app/join-room/${roomId}`,
        body: JSON.stringify(player) 
      });
    }
  }

  return (
    <div>
      {!roomId && <>
        <h1>Créer une salle</h1>
        <input placeholder="Pseudo" onChange={(e) => setUsername(e.target.value)}></input>
        <button onClick={createRoom}>Créer</button>
        <br></br>
        <input placeholder="Room id" onChange={(e) => setRoomId(e.target.value.trim())}></input>
        <button onClick={joinRoom}>Rejoindre</button>
      </>}
      {roomId && <Lobby roomId={roomId}/>}
    </div>
  );
};

export default LobbyCreation;