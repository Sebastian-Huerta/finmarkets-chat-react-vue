const { Server } = require("socket.io");

const PORT = process.env.PORT || 3001;

const io = new Server(PORT, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const messageHistory = [];
const MAX_HISTORY = 100;

io.on("connection", (socket) => {
  console.log(`[+] Client connected: ${socket.id}`);

  if (messageHistory.length > 0) {
    socket.emit("history", messageHistory);
  }

  socket.on("message", (msg) => {
    const message = {
      id: `${Date.now()}-${socket.id}`,
      username: msg.username,
      text: msg.text,
      timestamp: new Date().toISOString(),
    };

    messageHistory.push(message);
    if (messageHistory.length > MAX_HISTORY) {
      messageHistory.shift();
    }
    io.emit("message", message);
  });

  socket.on("disconnect", (reason) => {
    console.log(`Cliente desconectado: ${socket.id} — reason: ${reason}`);
  });
});

console.log(`Socket.io server corriendo en puerto: ${PORT}`);