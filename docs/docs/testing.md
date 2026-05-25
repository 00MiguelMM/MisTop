# Testing y mejoras

En este apartado se documentan las pruebas manuales realizadas en la aplicación MisTop.

---

# Pruebas del backend

## Comprobación del servidor

Se ha probado que el backend arranca correctamente con:

```bash
npm run dev
```

URL probada:

```txt
http://localhost:3000
```

Resultado esperado:

```txt
Backend de MisTop funcionando
```

Resultado: correcto.

---

# Pruebas de endpoints REST

## GET /api/rankings

URL probada:

```txt
http://localhost:3000/api/rankings
```

Resultado esperado:

Devuelve un listado de rankings.

Resultado: correcto.

---

## GET /api/rankings/:id

URL probada:

```txt
http://localhost:3000/api/rankings/1
```

Resultado esperado:

Devuelve un ranking concreto.

Resultado: correcto.

---

## GET /api/rankings/:id con id inexistente

URL probada:

```txt
http://localhost:3000/api/rankings/99
```

Resultado esperado:

```json
{
  "message": "Ranking no encontrado"
}
```

Resultado: correcto.

---

# Pruebas de frontend

## Carga de rankings desde backend

URL probada:

```txt
http://localhost:5173
```

Resultado esperado:

La página de inicio carga los rankings desde el backend.

Resultado: correcto.

---

## Estados de red

Se ha comprobado que la interfaz muestra:

- estado de carga mientras se solicitan datos
- listado de rankings cuando la petición funciona
- mensaje de error si el backend no está disponible

Resultado: correcto.

---

# Responsive

Se ha probado la aplicación en distintos tamaños de pantalla utilizando las herramientas de desarrollador del navegador.

Aspectos comprobados:

- adaptación de tarjetas
- navegación
- distribución de columnas
- separación y márgenes

Resultado: correcto.

---

# Revisión de consola

Se ha comprobado la consola del navegador y del servidor durante las pruebas.

Aspectos comprobados:

- errores JavaScript
- errores de red
- errores del backend
- recarga de componentes

Resultado:

No se encontraron errores críticos durante las pruebas.

---

# Mejoras realizadas

Durante el testing se realizaron varias mejoras:

- conexión del frontend con el backend mediante fetch
- creación de cliente API tipado
- organización del backend en rutas y controladores
- mejora visual de la interfaz
- adaptación del proyecto al enfoque de películas y series
- control de errores y estados de carga

---

## Creación de rankings desde la interfaz

Se ha probado la creación de rankings desde la página principal de la aplicación.

Pasos realizados:

1. Escribir un nombre en el formulario "Nuevo ranking"
2. Pulsar el botón "Crear"

Resultado esperado:

El nuevo ranking aparece automáticamente en la lista de rankings cargados desde el backend.

Resultado: correcto.