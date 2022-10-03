import RootContext from '@components/App/RootContext'
import { IContext } from '@models/RootContext'
import {useContext} from 'react'
import { Button, Column, Row } from './styles'
import { IBooks } from '@models/books';

export const Comic = () => {
  const {books,setCurrentBook,currentBook} = useContext<IContext>(RootContext)
  const {chapter_ids} = books[books.findIndex(v=>v.id === currentBook)]
  
  return (
    <Column>
    {/* header */}
    <Row>
    {books?.map((val:IBooks)=>{
      const {title,id} = val;
      const activate = ()=>setCurrentBook(val.id)
      return <>
      <Button key={id} onClick={activate} active={id===currentBook}>{title}</Button>
      </>
    })}
    </Row>
  
    <br/>
    {/* pagination */}
    <Row>
    {chapter_ids.map(v=><Button paging>{v}</Button>)}
    </Row>
    </Column>
  )
}
