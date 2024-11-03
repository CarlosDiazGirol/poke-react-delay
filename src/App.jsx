import { useState, useEffect } from 'react'; // Importamos los hooks useState y useEffect de React.
import './App.css'; // Importamos los estilos desde App.css.

function App() { 
  // Definimos el componente principal de la aplicación.

  // Estados:
  const [namePokemon, setNamePokemon] = useState(''); // Estado para el nombre del Pokémon ingresado en el input.
  const [resultPokemon, setResultPokemon] = useState(null); // Estado para almacenar los datos del Pokémon que se obtienen desde la API.
  const [error, setError] = useState(null); // Estado para almacenar mensajes de error.
  const [loading, setLoading] = useState(false); // Estado para controlar si se está cargando una solicitud.

  // Función asíncrona para obtener los datos del Pokémon desde la API:
  const getPokemon = async (pokemon) => {
    try {
      setLoading(true); // Pasamos a true el loading para activar el spinner
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`); 
      // Solicitud a la API usando el nombre del Pokémon proporcionado por el usuario.

      if (!response.ok) { 
        // Si la respuesta npo es ok, lanzamos un error con el código de estado.
        throw new Error(`Pokemon not found: ${response.status}`);
      }

      const data = await response.json(); // Convertimos la respuesta a formato JSON.

      setResultPokemon(data); // Guardamos los datos del Pokémon en el estado resultPokemon.
    } catch (err) {
      setResultPokemon(null); // Si hay un error, limpiamos el resultado del Pokemon.
      setError(err.message); // Guardamos el mensaje de error en el estado error.
      console.error(err); // Registramos el error en la consola.
    } finally {
      setLoading(false); // pasamos a false la carga, independiente del resultado de try o catch.
    }
  };

  // Efecto que se ejecuta cuando cambia el nombre del Pokémon
  useEffect(() => {
    setError(null); // Limpiamos el estado de error para iniciar una nueva búsqueda.

    const trimName = namePokemon.trim(); // Eliminamos los espacios en blanco del nombre del Pokemon
    if (!trimName) { 
      // Si el nombre del Pokémon es un string vacío, limpiamos el resultado y el error
      setResultPokemon(null);
      setError(null);
      return; // Salimos del efecto para evitar hacer la solicitud
    }

    // Creamos un temporizador para agregar un retardo antes de realizar la búsqueda. En este caso es medio segundo
    const delay = setTimeout(() => {
      getPokemon(namePokemon); // Llamamos a la función getPokemon con el nombre del Pokemon obtenido desde el formulario
    }, 500); // Retardo de 500 ms para evitar múltiples llamadas mientras el usuario escribe.

    return () => clearTimeout(delay); 
    // Limpiamos el temporizador si el usuario sigue escribiendo antes de que se complete el retardo
  }, [namePokemon]); // Ejecutamos este efecto cada vez que cambie el estado namePokemon

  return (
    <>
      
      <form>
        <input
          type='text'
          placeholder='Introduce el nombre del pokemon'
          value={namePokemon}
          onChange={(e) => setNamePokemon(e.target.value)} 
          // Actualizamos el estado namePokemon con el valor del campo de entrada.
        />
      </form>

      {/* Indicador de carga */}
      {loading && <div className="spinner"></div>}

      {/* Mensaje de error */}
      {error && <p style={{color: 'red', fontWeight: 'bold'}}>{error}</p>}

      {/* Mostramos los resultados del Pokémon */}
      {resultPokemon && (
        <>
          <h1>{resultPokemon.name}</h1>
          {/* ?. (optional chaining): Este operador verifica si sprites existe antes de intentar acceder a front_default. Si sprites no existe, en lugar de causar un error, el resultado de src será undefined y no se intentará acceder a front_default. */}
          <img src={resultPokemon.sprites?.front_default} alt={resultPokemon.name} />
        </>
      )}
    </>
  );
}

export default App;
