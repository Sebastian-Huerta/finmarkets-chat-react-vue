# Realtime Chat – React + Vue + Socket.io

Implementación de un chat en tiempo real desarrollada como prueba técnica utilizando **React**, **Vue** y **Socket.io**.

El proyecto incluye dos aplicaciones frontend que se conectan al mismo servidor Socket.io, permitiendo comunicación en tiempo real entre ambas.
---

# Estructura del proyecto
```
backend/     → Servidor Socket.io
react-chat/  → Implementación del chat en React + TypeScript
vue-chat/    → Implementación del chat en Vue 3 + TypeScript
```
---

# Funcionalidades

* Conexión en tiempo real mediante Socket.io
* Envío y recepción instantánea de mensajes
* Indicador de estado de conexión
* Visualización del historial de mensajes
* Scroll automático del chat
* Persistencia de mensajes
* Persistencia del usuario
* Avatar basado en la inicial del usuario
* Limpieza del historial de mensajes

---

# Tecnologías

Frontend:

* React + TypeScript
* Vue 3 + Composition API + TypeScript
* Vite

Comunicación:

* Socket.io
* Socket.io-client

Estado global:

* Zustand (React)
* Pinia (Vue)

---

---

# Ejecutar el proyecto

El proyecto puede ejecutarse de dos formas.

---

## Opción 1 — Usando Docker (recomendado)

Desde la raíz del proyecto:

```
docker compose up -d --build
```

Esto levantará:
* Backend → http://localhost:3001
* React Chat → http://localhost:5173
* Vue Chat → http://localhost:5174

Ambas aplicaciones se conectarán automáticamente al mismo servidor.

---

## Opción 2 — Ejecución manual con Node

### 1. Backend

```
cd backend
npm install
node server.js
```

Servidor disponible en:
```
http://localhost:3001
```
---

### 2. Configurar variables de entorno

Antes de ejecutar los frontends, copiar el archivo .env.example:
```
react-chat/.env.example  → react-chat/.env
vue-chat/.env.example    → vue-chat/.env
```
Esto define la URL del servidor Socket.io.

### 3. React

```
cd react-chat
npm install
npm run dev
```
Disponible en:
```
http://localhost:5173
```

---

### 4. Vue
```
cd vue-chat
npm install
npm run dev
```
Disponible en:
```
http://localhost:5174
```
---

# Arquitectura y decisiones técnicas

El proyecto fue diseñado priorizando separación de responsabilidades, simplicidad y escalabilidad.

### Decisiones técnicas:

• **Separación de lógica de sockets**  
La conexión a Socket.io se maneja en un servicio independiente, evitando duplicación de listeners y desacoplando la comunicación de los componentes de UI.

• **Estado global centralizado**  
Cada aplicación utiliza una solución de estado adecuada a su ecosistema:
- React → Zustand
- Vue → Pinia

Esto permite mantener sincronizado el estado de conexión, usuario y mensajes.

• **Componentización clara**  
La interfaz se divide en componentes simples y reutilizables:
- ChatWindow
- MessageList
- MessageInput
- ConnectionStatus

• **Persistencia en cliente**  
Se utiliza `localStorage` para mantener el usuario y el historial local durante la sesión.

• **Backend mínimo desacoplado**  
El servidor Socket.io actúa únicamente como canal de comunicación en tiempo real, manteniendo el historial en memoria.

• **Arquitectura paralela entre React y Vue**  
Ambas implementaciones siguen una estructura similar para facilitar la comparación entre frameworks y demostrar equivalencia de arquitectura.

---

# Autor

**Sebastián Huerta Soto**

[GitHub](https://github.com/Sebastian-Huerta) · [seba.hs.dev@gmail.com](mailto:seba.hs.dev@gmail.com) · [seba-dev.vercel.app](https://seba-dev.vercel.app)
