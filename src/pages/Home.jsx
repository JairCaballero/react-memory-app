const Home = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='flex items-center justify-center h-screen w-full'>
      {/* Contenedor principal */}
      <div className='container max-w-[1280px] mx-auto p-[2rem]'>
        {/* Contenido centrado */}
        <div className='flex flex-col items-center justify-center gap-12'>
          <h1>Welcome to memory game</h1>
          <div className='w-full h-40 bg-red-50 text-black'>
            Aca va el carousel de avatars para escoger
          </div>
          <form onSubmit={handleSubmit} className='w-full grid grid-cols-3 gap-10'>
            <span className='form-group col-span-2'>
              <label htmlFor=''>Nombre de usuario</label>
              <input id='' name='' type='text' />
            </span>
            <span className='form-group'>
              <label htmlFor='type-game'>Tipo de juego</label>
              <select id='type-game' name='type-game'>
                <option value='' disabled>
                  Selecciona una opcion
                </option>
                <option value='1'>Normal</option>
                <option value='2'>Especial</option>
              </select>
            </span>
            <span className='form-group'>
              <label htmlFor='difficulty'>Dificultad</label>
              <input
                id='difficulty'
                name='difficulty'
                type='number'
                pattern='^(1[0-5]|[1-9])$'
                title='Please enter a number between 1 and 15'
              />
            </span>
            <span className='form-group'>
              <label htmlFor=''>Vidas</label>
              <input type='number' pattern='^[1-5]$' title='Please enter a number between 1 and 5' />
            </span>
            <span className='form-group'>
              <label htmlFor='theme-game'>Tema de el juego</label>
              <select id='theme-game' name='theme-game'>
                <option value='' disabled>
                  Selecciona una opcion
                </option>
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
            <span className='form-group'>
              <label htmlFor=''>¿ Juego infinito ?</label>
              <select id='theme-game' name='theme-game'>
                <option value='' disabled>
                  Selecciona una opcion
                </option>
                <option value='1'>Si</option>
                <option value='2'>No</option>
              </select>
            </span>
            <span className='form-group'>
              <label htmlFor=''>Tiempo limite</label>
              <input
                type='number'
                min='1'
                max='15'
                title='Please enter a number between 1 and 15'
              />
            </span>
            <div className='col-span-3'>
              <button className='play-btn w-fit'>Jugar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Home
