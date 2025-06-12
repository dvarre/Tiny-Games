import { Client } from "@stomp/stompjs";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import SockJS from "sockjs-client";
import type { IWebSocketContextType } from "../interfaces/IWebSocketContextType";


const WebSocketContext = createContext<IWebSocketContextType>({ client: null, connected: false, sessionId: undefined});

export const useStompClient = () => useContext(WebSocketContext);

export const WebSocketProvider = ({ children }: { children: React.ReactNode }) => {
  const [connected, setConnected] = useState(false);
  const [sessionId, setSessionId] = useState(undefined);
  const clientRef = useRef<Client | null>(null);

  useEffect(() => {
    const socket = new SockJS("http://localhost:8443/ws");

    const client = new Client({
      webSocketFactory: () => socket,
      debug: console.log,
      onConnect: () => {
        console.log("✅ Connecté au WebSocket");
        setConnected(true);

        const sockAny = socket as any;
        const url = sockAny._transport?.url ?? sockAny._transport?._transport?.url;

        if (url) {
          const parts = url.split("/");
          const id = parts[parts.length - 2];
          setSessionId(id);
          console.log("🖇️ session id: ", id);
        }
      },
      onStompError: () => {
        console.error("❌ Error stomp client");
      }
    });

    client.activate();
    clientRef.current = client;

    return () => {client.deactivate()};
  }, []);

  return (
    <WebSocketContext.Provider value={{ client: clientRef.current, connected, sessionId }}>
      {connected ? children : <div>Connexion en cours...</div>}
    </WebSocketContext.Provider>
  );
};

