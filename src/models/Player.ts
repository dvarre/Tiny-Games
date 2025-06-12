export class Player {
    playerName: string;
    sessionId: string | undefined;

    constructor(playerName: string , sessionId: string | undefined) {
        this.playerName = playerName;
        this.sessionId = sessionId;
    }
}