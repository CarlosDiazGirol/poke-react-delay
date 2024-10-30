# Buscador de Pokémon con REACT

Este proyecto consiste en crear un buscador de Pokémon utilizando React. 

Antes de empezar recuerda instalar todas las dependencias necesarias para el proyecto. Un npm i o créate tu propio proyecto React con vite.

# ¿Cómo empezar?
Crear en App.jsx toda la aplicación. Una vez hecha y viendo que funciona correctamente, refactorizaremos el código y crearemos módulos funcionales.

# Instrucciones

- Usaremos un formulario para hacer peticiones a la API de pokemon, donde nos devolverá el pokemon que estemos buscando en ese momento. Si no existiera nos tiene que devolver un mensaje de `pokemon no encontrado`  
- Utilizar estados para manejar el término de búsqueda, los resultados de la búsqueda, el estado de carga y los errores. Los que pienses que son necesarios.
  *** PISTA: *** `useState` para guardar los cambios de cada uno de los estados
- En la búsqueda tendremos que ir actualizando el cambio en el momento de cada escritura. Si escribimos el pokemon `Pikachu` si escribimos `P` hará búsqueda, `Pi`, siguiente búsqueda... y así hasta que encuentre el pokemon.
  *** PISTA: *** `useEffect` para actualizar en cada momento la busqueda pasándole el parametro de cambio 
- Mostrar los resultados de la búsqueda (nombre e imagen del Pokémon) en la interfaz de usuario. Puedes añadir más datos si lo deseas.
- Manejar adecuadamente los casos de búsqueda vacía, resultados no encontrados y errores de la API.
- Crea estilos CSS para tu aplicación según sea necesario. Puedes utilizar App.css para crearlos.

*** Recursos adicionales ***

Documentación de la PokeAPI: https://pokeapi.co/docs/v2
