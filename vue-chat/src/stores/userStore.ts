import { defineStore } from "pinia"

export const useUserStore = defineStore("user", {
  state: () => ({
    username: localStorage.getItem("chat-user") || ""
  }),

  actions: {
    setUsername(name: string) {
      this.username = name
      localStorage.setItem("chat-user", name)
    }
  }
})