import { useForm } from 'react-hook-form'

const Home = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

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
          <form onSubmit={onSubmit} className='w-full grid grid-cols-3 gap-10'>

            {/* username */}
            <span className='form-group col-span-2'>
              <label htmlFor='username'>Nombre de usuario</label>
              <input
                type='text'
                id='username'
                name='username'
                {...register('username', {
                  required: {
                    value: true,
                    message: 'El campo Nombre es obligatorio'
                  },
                  minLength: {
                    value: 3,
                    message: 'Minimo 10 caracteres'
                  },
                  maxLength: {
                    value: 20,
                    message: 'Maximo 50 caracteres'
                  }
                })}
              />
              <span className='text-red-400'>{errors?.username?.message}</span>
            </span>

            {/* type */}
            <span className='form-group'>
              <label htmlFor='typeGame'>Tipo de juego</label>
              <select
                defaultValue=''
                id='typeGame'
                name='typeGame'
                {...register('typeGame', {
                  required: {
                    value: true,
                    message: 'El campo de tipo de juego es obligatorio'
                  }
                })}
              >
                <option value='' disabled>Selecciona una opcion</option>
                <option value='1'>Normal</option>
                <option value='2'>Especial</option>
              </select>
              <span className='text-red-400'>{errors?.typeGame?.message}</span>
            </span>

            {/* dificulty */}
            <span className='form-group'>
              <label htmlFor='difficulty'>Dificultad</label>
              <input
                id='difficulty'
                name='difficulty'
                type='number'
                {...register('difficulty', {
                  required: {
                    value: true,
                    message: 'El campo dificultad es obligatorio'
                  },
                  pattern: {
                    value: /^(1[0-5]|[1-9])$/,
                    message: 'Ingrese un numero de 1 a 15'
                  }
                })}
              />
              <span className='text-red-400'>{errors?.difficulty?.message}</span>
            </span>

            {/* lifes */}
            <span className='form-group'>
              <label htmlFor='lifes'>Vidas</label>
              <input
                id='lifes'
                name='lifes'
                type='number'
                pattern='^[1-5]$'
                title='Please enter a number between 1 and 5'
                {...register('lifes')}
              />
            </span>

            {/* theme */}
            <span className='form-group'>
              <label htmlFor='theme-game'>Tema de el juego</label>
              <select id='theme-game' name='theme-game' {...register('theme-game')}>
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

            {/* inifity */}
            <span className='form-group'>
              <label htmlFor='infinity'>¿ Juego infinito ?</label>
              <select id='infinity' name='infinity' {...register('infinity')}>
                <option value='' disabled>
                  Selecciona una opcion
                </option>
                <option value='1'>Si</option>
                <option value='2'>No</option>
              </select>
            </span>

            {/* time limit */}
            <span className='form-group'>
              <label htmlFor='time'>Tiempo limite</label>
              <input
                id='time'
                name='time'
                type='number'
                min='1'
                max='15'
                title='Please enter a number between 1 and 15'
                {...register('time')}
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
