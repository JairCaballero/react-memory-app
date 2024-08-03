const MemoBlock = ({ data, setMemoBlockSelected, memoBlockSelected }) => {
  return (
    <button onClick={() => setMemoBlockSelected(data.index)} className={` ${memoBlockSelected === data.index ? 'bg-blue-300' : 'bg-gray-300'} w-full rounded aspect-square flex items-center justify-center text-4xl`}>
      {data.img && data.img}
    </button>
  )
}

export default MemoBlock
