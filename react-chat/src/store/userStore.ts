import { create } from "zustand"

interface UserState {
  username: string
  setUsername: (name: string) => void
}

const savedUser = localStorage.getItem("chat-user") || ""

export const useUserStore = create<UserState>((set) => ({
  username: savedUser,

  setUsername: (name) => {
    localStorage.setItem("chat-user", name)
    set({ username: name })
  },
}))