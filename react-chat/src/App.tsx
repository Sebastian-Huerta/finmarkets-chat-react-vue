import ChatWindow from "./components/ChatWindow"
import { useSocket } from "./hooks/useSocket"

function App() {
  useSocket()

  return (
    <div>
      <h1>Realtime Chat</h1>
      <ChatWindow />
    </div>
  )
}

export default App