# Cliente API y capa de red

El frontend de MisTop utiliza una capa de red propia para comunicarse con el backend desarrollado con Express.

La comunicación se realiza mediante peticiones HTTP usando `fetch`.

---

# Archivo principal

La capa de red se encuentra en:

```txt
src/api/client.ts
```

Este archivo centraliza todas las peticiones al backend.

---

# URL base

```txt
http://localhost:3000/api
```

---

# Funciones disponibles

## getRankings()

Obtiene todos los rankings desde el backend.

### Endpoint utilizado

```txt
GET /api/rankings
```

### Tipo devuelto

```ts
Promise<Ranking[]>
```

---

## createRanking(name)

Crea un nuevo ranking.

### Endpoint utilizado

```txt
POST /api/rankings
```

### Tipo devuelto

```ts
Promise<Ranking>
```

---

## updateRanking(id, name)

Actualiza un ranking existente.

### Endpoint utilizado

```txt
PUT /api/rankings/:id
```

### Tipo devuelto

```ts
Promise<Ranking>
```

---

## deleteRanking(id)

Elimina un ranking existente.

### Endpoint utilizado

```txt
DELETE /api/rankings/:id
```

### Tipo devuelto

```ts
Promise<{ message: string }>
```

---

# Tipos TypeScript

Los tipos utilizados por el cliente API se encuentran en:

```txt
src/types/ranking.ts
```

Ejemplo:

```ts
export interface Ranking {
  id: number;
  name: string;
}
```

---

# Estados de red

La interfaz gestiona los tres estados principales de red:

- loading → mientras se cargan los datos
- data → cuando la petición es correcta
- error → cuando ocurre un fallo en la API

Estos estados se controlan desde `HomePage.tsx` usando `useState` y `useEffect`.

---

# Relación frontend-backend

El frontend no se comunica directamente con TMDB.

Flujo:

```txt
Frontend React
↓
Backend Express
↓
API externa TMDB
```

Esto permite:

- proteger la API Key
- centralizar la lógica
- validar peticiones
- controlar errores
- mantener una arquitectura más escalable