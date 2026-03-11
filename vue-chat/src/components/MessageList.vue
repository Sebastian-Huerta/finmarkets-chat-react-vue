<script setup lang="ts">
import { ref, watch, nextTick } from "vue"
import { useChatStore } from "../stores/chatStore"
import { useUserStore } from "../stores/userStore"

const chat = useChatStore()
const user = useUserStore()

const bottomRef = ref<HTMLElement | null>(null)

watch(
  () => chat.messages,
  async () => {
    await nextTick()
    bottomRef.value?.scrollIntoView({ behavior: "smooth" })
  },
  { deep: true }
)
</script>

<template>

<div style="height:160px; overflow-y:auto">
  <div
    v-for="(msg,i) in chat.messages"
    :key="i"
    :style="{
      display:'flex',
      justifyContent: msg.username === user.username ? 'flex-end' : 'flex-start',
      marginBottom:'6px'
    }"
  >
    <div
      style="display:flex;align-items:center;gap:10px;padding:6px 10px;border-radius:8px"
      :style="{
        background: msg.username === user.username ? '#078d8d' : '#03682a'
      }"
    >
      <div
        v-if="msg.username !== user.username"
        style="width:30px;height:30px;border-radius:50%;background:#444;color:white;display:flex;align-items:center;justify-content:center"
      >
        {{ msg.username?.charAt(0).toUpperCase() }}
      </div>

      <div>
        <strong v-if="msg.username !== user.username">
          {{ msg.username }}
        </strong>

        <div>{{ msg.text }}</div>
      </div>
    </div>
  </div>
  <div ref="bottomRef"></div>
</div>

</template>