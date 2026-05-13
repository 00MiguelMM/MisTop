# Hooks de React

## useState

He utilizado el hook `useState` para gestionar el estado de la aplicación y almacenar información dinámica.

Actualmente lo utilizo para:

- guardar los valores del formulario
- almacenar la lista de elementos del ranking
- actualizar la interfaz automáticamente cuando cambian los datos

### Estado del formulario

En el componente `AddItemForm` utilizo distintos estados para controlar los campos del formulario:

```ts
const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [category, setCategory] = useState("peliculas");
const [score, setScore] = useState("");