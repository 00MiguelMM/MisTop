# Despliegue

En este apartado se documenta el proceso de despliegue de MisTop.

---

# Plataforma utilizada

El frontend se despliega usando Vercel.

Vercel permite desplegar aplicaciones creadas con Vite, React y TypeScript conectando el repositorio de GitHub.

---

# Preparación del frontend

Se modificó el cliente API del frontend para que no dependa únicamente de `localhost`.

Archivo modificado:

```txt
frontend/src/api/client.ts
```

Código usado:

```ts
const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:3000/api";
```

De esta forma:

- en local se usa `http://localhost:3000/api`
- en producción se usa la variable de entorno `VITE_API_URL`

---

# Variables de entorno

En Vercel será necesario configurar:

```txt
VITE_API_URL
```

Esta variable debe apuntar a la URL del backend desplegado.

---

# Backend

El backend está creado con Node.js y Express.

En local se ejecuta con:

```bash
cd backend
npm run dev
```

URL local:

```txt
http://localhost:3000
```

---

# Frontend

El frontend está creado con Vite, React y TypeScript.

En local se ejecuta con:

```bash
cd frontend
npm run dev
```

URL local:

```txt
http://localhost:5173
```

---

# Comprobaciones necesarias

Después del despliegue se debe comprobar:

- que la web carga correctamente
- que las rutas de React funcionan
- que la API responde correctamente
- que el frontend puede comunicarse con el backend
- que no aparecen errores en la consola
- que las variables de entorno están bien configuradas

---

# URLs del proyecto

Pendiente de añadir cuando el despliegue esté terminado:

```txt
Frontend:
Backend/API:
```