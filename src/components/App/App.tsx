import { useState,useEffect } from 'react'
import actions from "@api/books"
import { IBooks } from '@models/books'
import Comic from '@components/Comic'
import RootContext from './RootContext'
import { IChapter } from '@models/chapters'

const initChapters = {
  id: -1,
  title: "",
  book: {
      id: -1,
      title: "",
      chapter_ids: [],
  },
  chapter_index: -1,
  pages: [],
}

function App() {
  const [books, setBooks] = useState<IBooks[]>([])
  const [currentBook, setCurrentBook] = useState<number|null>(null)
  const [chapter, setChapter] = useState<IChapter>(initChapters)
  const [currentChapId, setCurrentChapId] = useState<number>(0)
  
  const getInitState = async ()=>{
    const booksReq = await actions.getAllBooks()
    const books = booksReq.data
    
    //set books data
    if(books.length > 0) setCurrentBook(books[0].id)
    setBooks(books)
    //set chapters
    const chapterReq = await actions.getChapterDetails(books[0].chapter_ids[0])
    const chapter = chapterReq.data
    if(chapter.pages.length>0) setCurrentChapId(chapter.id)
    setChapter(chapter)

  }

  useEffect(() => {
    getInitState()
  }, [])
  
  return (
    <RootContext.Provider value={{books,currentBook,setCurrentBook,chapter,setChapter,currentChapId, setCurrentChapId}}>
      <Comic/>
    </RootContext.Provider>
  )
}

export default App
