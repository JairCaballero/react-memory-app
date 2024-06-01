import { useForm } from 'react-hook-form'
import FormGroup from '../components/FormGroup'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = handleSubmit((data) => {
    localStorage.setItem('data', JSON.stringify(data))
    navigate('/game')
  })

  return (
    <div className='flex flex-col items-center justify-center gap-12'>
      <h1>Welcome to memory game</h1>
      <div className='w-full h-40 bg-red-50 text-black'>
        Aca va el carousel de avatars para escoger
      </div>
      <form onSubmit={onSubmit} className='w-full grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        <FormGroup
          label='Nombre de usuario'
          id='username'
          register={register}
          errors={errors}
          validation={{
            required: 'Campo obligatorio',
            minLength: { value: 3, message: 'Minimo 10 caracteres' },
            maxLength: { value: 20, message: 'Maximo 50 caracteres' }
          }}
        />
        <FormGroup
          label='Tipo de juego'
          id='typeGame'
          type='select'
          register={register}
          errors={errors}
          defaultValue=''
          validation={{ required: 'Campo obligatorio' }}
        >
          <option value='' disabled>Selecciona una opcion</option>
          <option value='1'>Normal</option>
          <option value='2'>Especial</option>
        </FormGroup>
        <FormGroup
          label='Dificultad'
          id='difficulty'
          type='select'
          defaultValue=''
          register={register}
          errors={errors}
          validation={{ required: 'Campo obligatorio' }}
        >
          <option value='' disabled>Selecciona una opcion</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
          <option value='6'>Todas</option>
        </FormGroup>
        <FormGroup
          label='Vidas'
          id='lifes'
          type='select'
          defaultValue=''
          register={register}
          errors={errors}
          validation={{ required: 'Campo obligatorio' }}
        >
          <option value='' disabled>Selecciona una opcion</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
        </FormGroup>
        <FormGroup
          label='Tema de el juego'
          id='themeGame'
          type='select'
          register={register}
          errors={errors}
          defaultValue=''
          validation={{ required: 'Campo obligatorio' }}
        >
          <option value='' disabled>Selecciona una opcion</option>
          <option value='1'>Animales</option>
          <option value='2'>Personas</option>
          <option value='3'>Ciudades</option>
          <option value='4'>Paises</option>
          <option value='5'>Peliculas</option>
          <option value='6'>Juegos</option>
          <option value='7'>Anime</option>
          <option value='8'>Todos</option>
        </FormGroup>
        <FormGroup
          label='¿ Juego infinito ?'
          id='infinity'
          type='select'
          register={register}
          errors={errors}
          defaultValue=''
          validation={{ required: 'Campo obligatorio' }}
        >
          <option value='' disabled>Selecciona una opcion</option>
          <option value='1'>Si</option>
          <option value='2'>No</option>
        </FormGroup>
        <FormGroup
          label='Tiempo limite (mn)'
          id='time'
          type='number'
          register={register}
          errors={errors}
          validation={{
            required: 'Campo Obligatorio',
            pattern: { value: /^(1[0-5]|[1-9])$/, message: 'Ingrese un numero de 1 a 15' }
          }}
        />
        <div className='md:col-span-2 lg:col-span-3 flex justify-center'>
          <button className='play-btn w-fit'>Jugar</button>
        </div>
      </form>
    </div>
  )
}

export default Home
