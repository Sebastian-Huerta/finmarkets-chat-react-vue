import { onMounted, onUnmounted } from "vue"
import { socket } from "../services/socket"
import { useChatStore } from "../stores/chatStore"

export function useSocket() {
  const chat = useChatStore()

  const onConnect = () => chat.setConnected(true)
  const onDisconnect = () => chat.setConnected(false)

  const onMessage = (msg: any) => {
    chat.addMessage(msg)
  }

  const onHistory = (msgs: any[]) => {
    chat.setMessages(msgs)
  }

  onMounted(() => {
    socket.on("connect", onConnect)
    socket.on("disconnect", onDisconnect)
    socket.on("message", onMessage)
    socket.on("history", onHistory)

  })

  onUnmounted(() => {
    socket.off("connect", onConnect)
    socket.off("disconnect", onDisconnect)
    socket.off("message", onMessage)
    socket.off("history", onHistory)
  })
}