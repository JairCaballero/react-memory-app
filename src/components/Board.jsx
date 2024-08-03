import { useEffect, useState } from 'react'
import MemoBlock from './MemoBlock'
import data from '../localData/data.json'

const Board = () => {
  const [localData, setLocalData] = useState({})
  const [emojiList, setEmojiList] = useState([])
  const [memoBlockSelected, setMemoBlockSelected] = useState()

  useEffect(() => {
    setLocalData(JSON.parse(localStorage.getItem('data')))
  }, [])

  useEffect(() => {
    if (parseInt(localData.difficulty) === 1) {
      setEmojiList(data.data.slice(0, 4))
    }
    if (parseInt(localData.difficulty) === 2) {
      setEmojiList(data.data.slice(0, 8))
    }
    if (parseInt(localData.difficulty) === 3) {
      setEmojiList(data.data.slice(0, 12))
    }
    if (parseInt(localData.difficulty) === 4) {
      setEmojiList(data.data.slice(0, 16))
    }
  }, [localData])

  return (
    <div className='max-w-[60%] mx-auto grid gap-5' style={{ gridTemplateColumns: `repeat(${Math.sqrt(emojiList.length * 2)}, minmax(0, 1fr))` }}>
      {setEmojiList?.length > 0 && emojiList.map((_, index) => (
        <MemoBlock key={index} data={{ index: index + 1, img: _ }} memoBlockSelected={memoBlockSelected} setMemoBlockSelected={setMemoBlockSelected} />
      ))}
      {setEmojiList?.length > 0 && emojiList.map((_, index) => (
        <MemoBlock key={index} data={{ index: index + 1, img: _ }} memoBlockSelected={memoBlockSelected} setMemoBlockSelected={setMemoBlockSelected} />
      ))}
    </div>
  )
}

export default Board
