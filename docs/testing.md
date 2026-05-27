# Testing de MisTop

## Pruebas realizadas

Durante el desarrollo realicé diferentes pruebas tanto en frontend como en backend para comprobar el correcto funcionamiento de la aplicación.

## Pruebas del frontend

- comprobación del renderizado de componentes
- funcionamiento de la navegación entre páginas
- validación del formulario de creación de rankings
- comprobación del diseño responsive
- verificación de estados de carga y error

## Pruebas de la API

- prueba de endpoint GET `/api/rankings`
- prueba de endpoint POST `/api/rankings`
- comprobación de respuestas JSON
- validación de errores cuando faltaban datos

## Problemas encontrados

Uno de los principales problemas apareció durante el despliegue en Vercel, ya que las primeras rutas de la API no funcionaban correctamente en producción.

Inicialmente utilicé una ruta dinámica mediante el archivo `api/[...path].js`, pero aparecían errores al acceder a los endpoints desplegados.

Finalmente simplifiqué la estructura creando directamente el archivo `api/rankings.js`, lo que permitió que la ruta `/api/rankings` funcionara correctamente.

## Resultado final

Tras las pruebas realizadas, conseguí que frontend y backend funcionaran correctamente tanto en local como en producción.