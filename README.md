# MisTop

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

Aplicación web fullstack desarrollada con React, TypeScript y Node.js para crear y gestionar rankings personales de películas y series.

MisTop permite organizar contenido audiovisual mediante puntuaciones, estados personalizados y filtros visuales en una interfaz moderna y responsive.

---

# Despliegue

| Plataforma | URL |
|---|---|
| Aplicación web | https://mis-top-git-main-00miguelmms-projects.vercel.app |

---

# Características

- Rankings de películas y series
- Sistema de puntuaciones
- Búsqueda por título
- Filtros por estado
- Estadísticas visuales
- Componentes reutilizables
- Diseño responsive
- Interfaz moderna con Tailwind CSS
- Desarrollo rápido con Vite
- Tipado completo con TypeScript
- Conexión frontend/backend mediante API REST

---

# API y backend

MisTop utiliza una API REST creada con Node.js y Express.

La aplicación frontend consume la API mediante peticiones HTTP usando `fetch`.

Endpoints principales:

```txt
GET /api/rankings
POST /api/rankings
```

La API está desplegada en Vercel mediante funciones serverless.

---

# Tecnologías

## Frontend

| Tecnología | Uso |
|---|---|
| React | Creación de componentes y UI |
| TypeScript | Tipado y seguridad del código |
| Tailwind CSS | Estilos y diseño responsive |
| React Router | Navegación entre páginas |
| Vite | Entorno de desarrollo |

---

## Backend

| Tecnología | Uso |
|---|---|
| Node.js | Entorno backend |
| Express | API REST |

---

## Herramientas auxiliares

| Herramienta | Uso |
|---|---|
| Git | Control de versiones |
| GitHub | Repositorio remoto |
| Trello | Organización del proyecto |
| VS Code | Editor de código |
| Vercel | Despliegue frontend y backend |

---

# Arquitectura

El proyecto sigue una arquitectura frontend/backend:

```txt
Frontend React + TypeScript
↓
Cliente API (fetch)
↓
Backend Express / API REST
↓
Datos de rankings
```

El frontend se encarga de:

- interfaz visual
- navegación
- estados de red
- renderizado de rankings

El backend se encarga de:

- exponer endpoints REST
- validar datos
- responder peticiones HTTP
- gestionar rankings

---

# Estructura del proyecto

```txt
MisTop/
│
├── api/
│   └── rankings.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── types/
│   │   ├── utils/
│   │   ├── App.tsx
│   │   └── main.tsx
│   │
│   ├── package.json
│   └── vite.config.ts
│
├── backend/
│
├── docs/
│   ├── agile.md
│   ├── api-client.md
│   ├── components.md
│   ├── deployment.md
│   ├── design.md
│   ├── hooks.md
│   ├── project-management.md
│   ├── testing.md
│   └── retrospective.md
│
└── README.md
```

---

# Instalación local

## Frontend

```bash
cd frontend
npm install
npm run dev
```

## Backend

```bash
cd backend
npm install
npm run dev
```

---

# Autor

Proyecto desarrollado por Miguel Martínez para la práctica fullstack de Desarrollo de Aplicaciones Multiplataforma (DAM).