<script setup lang="ts">
import { ref } from "vue"
import { socket } from "../services/socket"
import { useUserStore } from "../stores/userStore"

const user = useUserStore()
const text = ref("")
const usernameInput = ref(user.username)

function updateUsername() {
  user.setUsername(usernameInput.value)
}

function sendMessage() {
  if (!user.username || !text.value) return
  socket.emit("message", {
    username: user.username,
    text: text.value
  })
  text.value = ""
}
</script>

<template>

<div>
  <input
    placeholder="User"
    v-model="usernameInput"
    @change="updateUsername"
  />
  <input
    placeholder="Mensaje"
    v-model="text"
    @keydown.enter="sendMessage"
  />
  <button @click="sendMessage">
    Enviar
  </button>
</div>
</template>