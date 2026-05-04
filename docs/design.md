## Estructura de componentes principales

La aplicación MisTop estará formada por varios componentes en el frontend.

- `Header`: parte de arriba de la app (nombre y navegación).
- `Layout`: estructura general de la página (envuelve todo).

- `RankingList`: muestra todos los rankings.
- `RankingCard`: muestra cada ranking de forma individual.

- `RankingForm`: sirve para crear o editar un ranking.
- `RankingDetail`: muestra un ranking en detalle.

- `ItemList`: muestra los elementos dentro de un ranking.
- `ItemCard`: muestra cada elemento individual.

- `ItemForm`: sirve para añadir o editar elementos.

- `EmptyState`: muestra un mensaje cuando no hay datos (por ejemplo, si no hay rankings).

## Componentes reutilizables

Algunos componentes se podrán reutilizar en distintas partes de la aplicación para evitar repetir código.

- `Button`: para acciones como crear, guardar o eliminar.
- `Input`: para campos de texto en formularios.
- `Card`: para mostrar información en formato tarjeta.
- `Modal`: para mostrar formularios o confirmaciones en una ventana emergente.
- `EmptyState`: para mostrar mensajes cuando no haya datos.

## Gestión del estado de la aplicación

El estado de la aplicación se gestionará principalmente con React.

Se usará `useState` para guardar datos como:

- Lista de rankings.
- Elementos dentro de cada ranking.
- Datos de los formularios.
- Mensajes de error o confirmación.

Se usará `useEffect` para cargar los datos desde la API cuando se inicie la aplicación o cuando haya cambios.

Más adelante se podrá usar Context API para compartir datos entre distintos componentes sin tener que pasar props manualmente.

Por ejemplo, se podrá usar para compartir la lista de rankings o el estado de carga entre varias partes de la aplicación.

## Diseño del backend/API

El backend tiene una API REST con rutas que empiezan por /api/v1.

La API trabaja con dos recursos principales:
- rankings: listas creadas por el usuario
- items: elementos dentro de cada ranking

### Endpoints de rankings

- GET /api/v1/rankings → obtiene todos los rankings
- GET /api/v1/rankings/:id → obtiene un ranking concreto
- POST /api/v1/rankings → crea un nuevo ranking
- PUT /api/v1/rankings/:id → edita un ranking
- DELETE /api/v1/rankings/:id → elimina un ranking

### Endpoints de items

- GET /api/v1/rankings/:rankingId/items → obtiene los elementos de un ranking
- POST /api/v1/rankings/:rankingId/items → añade un elemento
- PUT /api/v1/items/:id → edita un elemento
- DELETE /api/v1/items/:id → elimina un elemento

## Contratos de datos

Un ranking tiene esta estructura:

{
  "id": "1",
  "title": "Mis películas favoritas",
  "description": "Ranking personal",
  "category": "Películas",
  "createdAt": "2026-05-04"
}

Un item tiene esta estructura:

```json
{
  "id": "1",
  "rankingId": "1",
  "title": "Interestellar",
  "description": "Película",
  "position": 1,
  "score": 10
}

La API devuelve los datos en formato JSON.

## Datos en servidor y en cliente

En la aplicación hay datos que se guardan en el servidor y otros que solo se usan en el cliente.

### Datos en el servidor

Se guardan en el backend los datos principales de la aplicación:

- Rankings creados por el usuario
- Elementos de cada ranking
- Posición de los elementos
- Categoría y descripción
- Puntuación de cada elemento

Estos datos son importantes y deben mantenerse aunque el usuario cierre la aplicación.

### Datos en el cliente

Algunos datos solo se usan en el frontend y no se guardan en el servidor:

- Estado de los formularios mientras se escriben
- Mensajes de error o confirmación
- Estado de carga (loading)
- Filtros o búsquedas temporales

Estos datos son temporales y solo sirven para mejorar la experiencia del usuario.

## Diagrama simple del flujo de datos

El flujo de datos en la aplicación sigue este recorrido:

Usuario  
↓  
Frontend (React)  
↓  
Cliente de API  
↓  
Backend (Express)  
↓  
Datos en el servidor  

Cuando el usuario realiza una acción (por ejemplo, crear un ranking), el frontend envía una petición a la API.

El backend recibe la petición, procesa los datos y devuelve una respuesta.

Después, el frontend actualiza la interfaz con los datos recibidos.

## Decisiones de arquitectura

La aplicación está separada en frontend y backend para que el proyecto esté mejor organizado.

En el frontend uso componentes reutilizables para no repetir código y para que la interfaz sea más fácil de mantener.

En el backend uso una estructura por capas:

- routes: definen las rutas de la API
- controllers: reciben las peticiones y devuelven respuestas
- services: contienen la lógica principal de la aplicación
- config: guarda la configuración general del servidor

Esta organización ayuda a que el proyecto sea más claro, más fácil de modificar y más fácil de ampliar en el futuro.