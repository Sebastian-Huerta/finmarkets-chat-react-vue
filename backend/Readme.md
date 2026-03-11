# Chat Backend – Socket.io

Servidor **Socket.io** utilizado por las aplicaciones frontend del proyecto de chat en tiempo real.

---

# Funcionalidades
* Conexión de clientes mediante **Socket.io**
* Envío y recepción de mensajes en tiempo real
* Broadcast de mensajes a todos los clientes conectados
* Historial de mensajes en memoria
* Registro de conexiones y desconexiones

El historial se mantiene **solo en memoria**, por lo que se reinicia al reiniciar el servidor.

---

# Tecnologías

* Node.js
* Express
* Socket.io

---

# Ejecución del servidor

## Opción 1 — Node.js
1. Instalar dependencias
```
npm install
```
2. Ejecutar servidor
```
npm start
npm run dev (en desarrollo)
```

El servidor se iniciará en:
```
http://localhost:3001
```

## Opción 2 — Docker

El backend también puede ejecutarse mediante Docker usando el docker-compose definido en la raíz del proyecto.

Desde la raíz del repositorio:
```
docker compose up -d --build
```

Esto levantará automáticamente:
```
Backend → http://localhost:3001
React Chat → http://localhost:5173
Vue Chat → http://localhost:5174
```
---

# Integración con los clientes

Las aplicaciones frontend (`react-chat` y `vue-chat`) se conectan a este servidor mediante:

```
VITE_SOCKET_URL=http://localhost:3001
```

---

# Autor

**Sebastián Huerta Soto**

[GitHub](https://github.com/Sebastian-Huerta) · [seba.hs.dev@gmail.com](mailto:seba.hs.dev@gmail.com) · [seba-dev.vercel.app](https://seba-dev.vercel.app)
