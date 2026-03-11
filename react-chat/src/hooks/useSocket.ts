import { useEffect } from "react"
import { socket } from "../services/socket"
import { useChatStore } from "../store/chatStore"
import type Message from "../types/Message"

export function useSocket() {

  const addMessage = useChatStore((s) => s.addMessage)
  const setConnected = useChatStore((s) => s.setConnected)
  const setMessages = useChatStore((s) => s.setMessages)

  useEffect(() => {
    socket.on("connect", () => setConnected(true))
    socket.on("disconnect", () => setConnected(false))
    socket.on("message", (msg: Message) => {
      addMessage(msg)
    })
    socket.on("history", setMessages)

    return () => {
      socket.off("connect")
      socket.off("disconnect")
      socket.off("message")
      socket.off("history")
    }
  }, [])
}