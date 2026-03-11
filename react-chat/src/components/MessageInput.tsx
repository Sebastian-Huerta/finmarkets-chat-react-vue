import { useState } from "react"
import { socket } from "../services/socket"
import { useUserStore } from "../store/userStore"

export default function MessageInput() {
  const username = useUserStore((s) => s.username)
  const setUsername = useUserStore((s) => s.setUsername)
  const [text, setText] = useState("")

  const sendMessage = () => {
    if (!username || !text) return
    socket.emit("message", {
      username,
      text
    })
    setText("")
  }


  return (
    <div>
      <input
        placeholder="User"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        placeholder="Mensaje"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") sendMessage()
        }}
      />

      <button onClick={sendMessage}>
        Enviar
      </button>

    </div>
  )
}