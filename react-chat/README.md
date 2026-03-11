# React Realtime Chat

Aplicación de chat en tiempo real desarrollada con **React + TypeScript + Socket.io**.

---

# Funcionalidades

- Conexión en tiempo real mediante **Socket.io**
- Envío y recepción de mensajes instantáneos
- Indicador de estado de conexión
- Visualización de historial de mensajes
- Scroll automático cuando llegan nuevos mensajes
- Persistencia de mensajes en **localStorage**
- Avatar simple basado en la inicial del usuario
- Reconexión automática del socket
- Limpieza del historial de mensajes

---

# Tecnologías utilizadas

- **React**
- **TypeScript**
- **Vite**
- **Socket.io-client**
- **Zustand**

---


# Ejecución del proyecto

## 1. Instalar dependencias
npm install

npm run dev

## 2. Configurar variables de entorno

Copiar:

.env.example → .env


La aplicación estará disponible en:
http://localhost:5173

---

# Backend

La aplicación requiere un servidor **Socket.io** ejecutándose en:
http://localhost:3001

El backend utilizado para esta prueba implementa:
- conexión de clientes
- envío y recepción de mensajes
- historial en memoria
- limpieza del historial

---


### Funcionalidades adicionales:

- TypeScript
- Reconexión automática del socket
- Scroll automático del chat
- Persistencia en localStorage
- Avatar simple de usuario

---

# Autor

**Sebastián Huerta Soto**

[GitHub](https://github.com/Sebastian-Huerta) · [seba.hs.dev@gmail.com](mailto:seba.hs.dev@gmail.com) · [seba-dev.vercel.app](https://seba-dev.vercel.app)