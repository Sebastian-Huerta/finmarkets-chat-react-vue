import { defineStore } from "pinia"
import type Message from "../types/Message"

const savedMessages = localStorage.getItem("chat-messages")

export const useChatStore = defineStore("chat", {
  state: () => ({
    messages: savedMessages ? JSON.parse(savedMessages) : [] as Message[],
    connected: false
  }),

  actions: {
    addMessage(msg: Message) {
      this.messages.push(msg)
      localStorage.setItem(
        "chat-messages",
        JSON.stringify(this.messages)
      )
    },

    setMessages(msgs: Message[]) {
      this.messages = msgs
      localStorage.setItem(
        "chat-messages",
        JSON.stringify(msgs)
      )
    },

    clearMessages() {
      this.messages = []
      localStorage.removeItem("chat-messages")
    },

    setConnected(status: boolean) {
      this.connected = status
    }
  }
})