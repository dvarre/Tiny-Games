import type { Client } from "@stomp/stompjs";

export interface IWebSocketContextType {
  client: Client | null;
  connected: boolean;
  sessionId: string | undefined
}