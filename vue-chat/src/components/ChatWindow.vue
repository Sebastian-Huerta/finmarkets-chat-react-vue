<script setup lang="ts">
import MessageList from "./MessageList.vue"
import MessageInput from "./MessageInput.vue"
import ConnectionStatus from "./ConnectionStatus.vue"
import { useChatStore } from "../stores/chatStore"
import { socket } from "../services/socket"

const chat = useChatStore()

function clearHistory(){
  chat.clearMessages()
  socket.emit("clear-history")
}
</script>

<template>
<div>
  <ConnectionStatus />
  <button @click="clearHistory">
    Limpiar historial
  </button>
  <MessageList />
  <MessageInput />
</div>
</template>