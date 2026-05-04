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