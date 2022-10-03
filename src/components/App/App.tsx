import { useState,useEffect } from 'react'
import actions from "@api/books"
import { IBooks } from '@models/books'
import Comic from '@components/Comic'
import RootContext from './RootContext'


function App() {
  const [books, setBooks] = useState<IBooks[]>([])
  const [currentBook, setCurrentBook] = useState<number|null>(null)
 
  const getInitState = async ()=>{
    const booksReq = await actions.getAllBooks()
    const books = booksReq.data

    if(books.length > 0) setCurrentBook(books[0].id)
    setBooks(books)

  }

  useEffect(() => {
    getInitState()
  }, [])
  
  return (
    <RootContext.Provider value={{books,currentBook,setCurrentBook}}>
      <Comic/>
    </RootContext.Provider>
  )
}

export default App
