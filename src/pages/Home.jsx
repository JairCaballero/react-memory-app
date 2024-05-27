const Home = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='container mx-auto h-full flex flex-col items-center justify-center gap-12'>
      <h1 className='text-text-secondary font-medium text-xl'>Welcome to memory game</h1>
      <div className='w-full h-40 bg-red-50 text-black'>
        Aca va el carousel de avatars para escoger
      </div>
      <form onSubmit={handleSubmit} className='w-full text-gray-500 grid grid-cols-4 gap-10'>
        <span className='container-input col-span-2'>
          <label htmlFor=''>Nombre de usuario</label>
          <input id='' name='' type='text' />
        </span>
        <span className='container-input'>
          <label htmlFor='type-game'>Tipo de juego</label>
          <select id='type-game' name='type-game'>
            <option value='' disabled>Selecciona una opcion</option>
            <option value='1'>Normal</option>
            <option value='2'>Especial</option>
          </select>
        </span>
        <span className='container-input'>
          <label htmlFor='difficulty'>Dificultad</label>
          <input id='difficulty' name='difficulty' type='text' pattern='^(1[0-5]|[1-9])$' title='Please enter a number between 1 and 15' />
        </span>
        <span className='container-input'>
          <label htmlFor=''>Numero de vidas</label>
          <input type='text' pattern='^[1-5]$' title='Please enter a number between 1 and 5' />
        </span>
        <span className='container-input'>
          <label htmlFor='theme-game'>Tema de el juego</label>
          <select id='theme-game' name='theme-game'>
            <option value='' disabled>Selecciona una opcion</option>
            <option value='1'>Animales</option>
            <option value='2'>Personas</option>
            <option value='2'>Ciudades</option>
            <option value='2'>Paises</option>
            <option value='2'>Peliculas</option>
            <option value='2'>Juegos</option>
            <option value='2'>Anime</option>
            <option value='2'>Todos</option>
          </select>
        </span>
        <span className='container-input'>
          <label htmlFor=''>¿ Juego infinito ?</label>
          <select id='theme-game' name='theme-game'>
            <option value='' disabled>Selecciona una opcion</option>
            <option value='1'>Si</option>
            <option value='2'>No</option>
          </select>
        </span>
        <span className='container-input'>
          <label htmlFor=''>Tiempo limite</label>
          <input type='number' min='1' max='15' title='Please enter a number between 1 and 15' />
        </span>
        <button className='w-56 bg-cyan-500 text-white font-medium uppercase button-form col-span-4 mx-auto mt-10'>
          Jugar
        </button>
      </form>
    </div>
  )
}

export default Home
