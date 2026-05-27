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

---

---

# Problemas encontrados durante el despliegue

Durante el despliegue en Vercel encontré varios problemas técnicos.

Al principio, Vercel utilizaba la rama `master` en lugar de `main`, por lo que no se desplegaban los últimos cambios del proyecto.

También tuve problemas con el directorio raíz del proyecto, ya que el frontend y el backend estaban organizados en distintas carpetas dentro del mismo repositorio.

Otro de los problemas fue la configuración de la API serverless. Las primeras rutas creadas no funcionaban correctamente en producción y devolvían errores al intentar acceder a `/api/rankings`.

Además, tuve que revisar varias veces la configuración de build, instalación de dependencias y salida del proyecto en Vercel para conseguir que frontend y backend funcionaran correctamente juntos.

Para solucionarlo:

- actualicé la rama principal del repositorio a `main`
- configuré manualmente los comandos de instalación y build en Vercel
- modifiqué las rutas de la API para que funcionaran correctamente en Vercel. Inicialmente utilicé una ruta dinámica mediante el archivo `api/[...path].js`, pero aparecían errores al acceder a los endpoints desde producción. Finalmente simplifiqué la estructura creando directamente el archivo `api/rankings.js`, lo que permitió que la ruta `/api/rankings` funcionara correctamente una vez desplegada la aplicación.
- realicé pruebas manuales de los endpoints desplegados
- comprobé el funcionamiento del frontend y backend una vez desplegados online

Finalmente conseguí desplegar correctamente la aplicación y conectar el frontend con la API en Vercel.

---

# Resultado final del despliegue

Una vez finalizada la configuración del proyecto, conseguí desplegar correctamente la aplicación en Vercel.

La aplicación quedó accesible públicamente mediante el siguiente enlace:

```txt
https://mis-top-git-main-00miguelmms-projects.vercel.app/
```

El frontend y la API quedaron conectados correctamente mediante endpoints serverless.

La ruta principal utilizada por la API es:

```txt
/api/rankings
```

Tras el despliegue final comprobé:

- carga correcta de rankings desde el backend
- funcionamiento de las peticiones GET y POST
- renderizado correcto de la interfaz
- funcionamiento de la navegación
- funcionamiento del proyecto desde distintos dispositivos y tamaños de pantalla

---

# Conclusiones

Esta fase me permitió aprender cómo desplegar una aplicación fullstack en producción utilizando Vercel.

También aprendí a conectar frontend y backend dentro del mismo repositorio, configurar endpoints serverless y resolver problemas reales relacionados con despliegue, rutas y configuración del proyecto.

La parte más complicada fue la configuración del backend y la integración con Vercel, pero finalmente conseguí que la aplicación funcionara correctamente online.