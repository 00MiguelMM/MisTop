# Componentes de la aplicación

## 1. Componentes reutilizables

He creado componentes reutilizables para construir la interfaz de la aplicación de forma modular.

El primer componente desarrollado es `RankingCard`, que representa un elemento individual dentro de un ranking (película, restaurante, lugar, etc.).

Este componente es reutilizable, ya que puede utilizarse para mostrar cualquier tipo de elemento independientemente de su categoría. Lo utilizo dentro de listas y puede renderizarse múltiples veces en función de los datos disponibles.

## 2. Props tipadas con TypeScript

Defino las props de los componentes utilizando TypeScript para asegurar que los datos recibidos tengan la estructura correcta.

En el caso de `RankingCard`, he creado una interfaz para tipar sus props:

```ts
interface RankingCardProps {
  item: RankingItem;
}

## 3. Composición de componentes

He utilizado composición de componentes para dividir la interfaz en partes más pequeñas y reutilizables.

La estructura principal es:

- `App`: contiene los datos principales
- `RankingList`: muestra una lista de elementos
- `RankingCard`: representa cada tarjeta individual

De esta forma, cada componente tiene una responsabilidad concreta y el código es más limpio.

## 4. Tailwind CSS y layout

He utilizado Tailwind CSS para aplicar estilos y organizar la interfaz de la aplicación.

Algunas clases utilizadas han sido:

- `grid`: para crear un layout en forma de rejilla
- `gap-4`: para separar elementos
- `bg-white`: para el fondo de las tarjetas
- `rounded-xl`: para bordes redondeados
- `shadow-md`: para añadir sombras
- `text-3xl`: para tamaños de texto

## 5. Formularios y componentes visuales

He creado un componente llamado `AddItemForm` para representar el formulario de creación de nuevos elementos del ranking.

Este formulario incluye:

- un input para el título
- un textarea para la descripción
- un select para elegir la categoría
- un input numérico para la puntuación
- un botón para añadir el elemento

También he utilizado Tailwind CSS para mejorar el diseño visual del formulario y organizar mejor los elementos en pantalla.

## 6. Estructura de componentes

Actualmente la aplicación está organizada de la siguiente manera:

- `App`: componente principal de la aplicación
- `AddItemForm`: formulario para añadir elementos
- `RankingList`: componente que muestra la lista de elementos
- `RankingCard`: tarjeta individual de cada elemento

Gracias a esta estructura, el código queda más organizado y los componentes pueden reutilizarse más fácilmente en distintas partes de la aplicación.