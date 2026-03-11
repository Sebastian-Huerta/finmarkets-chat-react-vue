<script setup lang="ts">
import ChatWindow from "./components/ChatWindow.vue"
import { useSocket } from "./composables/useSocket"

useSocket()
</script>

<template>
  <h1>Realtime Chat</h1>

  <ChatWindow />
</template>