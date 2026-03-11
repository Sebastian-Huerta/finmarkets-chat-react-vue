import { useChatStore } from "../store/chatStore"

export default function ConnectionStatus() {

  const connected = useChatStore((state) => state.connected)

  return (
    <div style={{ marginBottom: "10px" }}>
      Status: {connected ? "🟢 Conectado" : "🔴 Reconectando..."}
    </div>
  )

}