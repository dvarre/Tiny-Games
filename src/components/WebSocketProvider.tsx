import { Client } from "@stomp/stompjs";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import SockJS from "sockjs-client";

const WebSocketContext = createContext<Client | null>(null);
export const useStompClient = () => useContext(WebSocketContext);

export const WebSocketProvider = ({ children } : {children: React.ReactNode}) => {
    const clientRef = useRef<Client | null>(null);
    const [connected, setConnected] = useState(false);

    useEffect(() => {
        const socket = new SockJS("http://localhost:8443/ws");
        const client = new Client({
            webSocketFactory: () => socket,
            onConnect: () => setConnected(true),
        });

        client.activate();
        clientRef.current = client;
        return () => {client.deactivate()};
    }, []);

    return (
        <WebSocketContext.Provider value={clientRef.current}>
            {connected ? children : <div>Connecting...</div>}
        </WebSocketContext.Provider>
    );
};
