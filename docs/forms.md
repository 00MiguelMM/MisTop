# Formularios en MisTop

## Objetivo

En MisTop se utilizan formularios para permitir al usuario añadir nuevas películas y series a sus rankings personales.

El formulario principal de la aplicación es `AddItemForm`, un componente reutilizable que se muestra tanto en la página de películas como en la de series.

---

## Datos del formulario

El formulario permite introducir:

- Título
- Descripción
- Categoría
- Género
- Año
- Estado
- Puntuación

---

## Gestión del estado

Cada campo utiliza `useState` para guardar su valor mientras el usuario escribe.

Ejemplo:

```tsx
const [title, setTitle] = useState("");
```

---

## Validaciones

Se añadieron comprobaciones básicas para evitar:

- Campos vacíos
- Puntuaciones incorrectas
- Años inválidos

Si algún dato no es correcto, el formulario muestra mensajes de error visuales.

---

## Feedback visual

La aplicación muestra mensajes de confirmación cuando un elemento se añade correctamente al ranking.

También se aplican estilos visuales para mejorar la experiencia del usuario.

---

## Reutilización del componente

El componente `AddItemForm` se reutiliza en:

- `MoviesPage`
- `SeriesPage`

Esto evita duplicar código y facilita el mantenimiento de la aplicación.

---

## Tecnologías utilizadas

- React
- TypeScript
- Tailwind CSS
- Hooks (`useState`)