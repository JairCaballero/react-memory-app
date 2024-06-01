const FormGroup = ({ label, id, type = 'text', register, errors, validation, children, defaultValue }) => (
  <div className='form-group'>
    <label htmlFor={id} className={`${errors[id] && 'invalid'}`}>{label}</label>
    {type === 'select'
      ? (
        <select id={id} name={id} defaultValue={defaultValue} className={`${errors[id] && 'invalid'}`} {...register(id, validation)}>
          {children}
        </select>
        )
      : (
        <input id={id} name={id} type={type} className={`${errors[id] && 'invalid'}`} {...register(id, validation)} />
        )}
    <span className='text-red-400 text-sm font-medium'>{errors[id]?.message}</span>
  </div>
)

export default FormGroup
