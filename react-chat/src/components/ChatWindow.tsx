import MessageList from "./MessageList"
import MessageInput from "./MessageInput"
import ConnectionStatus from "./ConnectionStatus"
import { useChatStore } from "../store/chatStore"

export default function ChatWindow() {
  const clearMessages = useChatStore((state) => state.clearMessages)

  return (
    <div style={{ marginLeft: "20px" }}>
      <ConnectionStatus />
      <button style={{ marginBottom: "20px" }} onClick={clearMessages}>
        Limpiar historial
      </button>

      <MessageList />
      <MessageInput />
    </div>
  )
}