import { create } from "zustand"
import type Message from "../types/Message"
import { socket } from "../services/socket"

interface ChatState {
  messages: Message[]
  connected: boolean
  addMessage: (msg: Message) => void
  setMessages: (msgs: Message[]) => void
  setConnected: (status: boolean) => void
  clearMessages: () => void
}

const savedMessages = localStorage.getItem("chat-messages")

export const useChatStore = create<ChatState>((set) => ({
  messages: savedMessages ? JSON.parse(savedMessages) : [],
  connected: false,

  addMessage: (msg) =>
    set((state) => {
      const updated = [...state.messages, msg]
      localStorage.setItem("chat-messages", JSON.stringify(updated))
      return { messages: updated }
    }),

  setMessages: (msgs) =>
    set(() => {
      localStorage.setItem("chat-messages", JSON.stringify(msgs))
      return { messages: msgs }
    }),

  clearMessages: () => {
    localStorage.removeItem("chat-messages")
    socket.emit("clear-history")
    set({ messages: [] })
  },

  setConnected: (status) =>
    set(() => ({
      connected: status,
    })),
}))