<script setup lang="ts">
import { useChatStore } from "../stores/chatStore"

const chat = useChatStore()
</script>

<template>

<div>
  Status:
  <span v-if="chat.connected">🟢 Conectado</span>
  <span v-else>🔴 Desconectado</span>
</div>

</template>