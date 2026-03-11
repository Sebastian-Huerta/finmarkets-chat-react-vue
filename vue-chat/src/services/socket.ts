import { io } from "socket.io-client"

const socketURL =
  import.meta.env.VITE_SOCKET_URL || "http://localhost:3001"

export const socket = io(socketURL, {
  autoConnect: true,
  reconnection: true
})