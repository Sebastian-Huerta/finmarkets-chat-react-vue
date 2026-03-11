import { useChatStore } from "../store/chatStore"
import { useEffect, useRef } from "react"
import { useUserStore } from "../store/userStore"

export default function MessageList() {
  const messages = useChatStore((state) => state.messages)
  const bottomRef = useRef<HTMLDivElement | null>(null)
  const currentUser = useUserStore((s) => s.username)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <div style={{ height: "200px", overflowY: "auto" }}>

      {messages.map((msg, i) => {
        const isOwnMessage = msg.username === currentUser
        const avatar = msg.username?.charAt(0).toUpperCase() || "?"

        return (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent: isOwnMessage ? "flex-end" : "flex-start",
              marginBottom: "6px"
            }}
          >

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                background: isOwnMessage ? "#078d8d" : "#03682a",
                padding: "6px 10px",
                borderRadius: "8px"
              }}
            >

              {!isOwnMessage && (
                <div
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    background: "#444",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  {avatar}
                </div>
              )}

              <div>
                {!isOwnMessage && <strong>{msg.username}</strong>}
                <div>{msg.text}</div>
              </div>

            </div>

          </div>
        )
      })}

      <div ref={bottomRef} />

    </div>
  )
}