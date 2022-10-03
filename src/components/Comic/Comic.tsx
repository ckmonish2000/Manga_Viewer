import {useContext,useState} from 'react'
import RootContext from '@components/App/RootContext'
import { IContext } from '@models/RootContext'
import { IBooks } from '@models/books';
import actions from "@api/books"
import { Button, Column, Row } from './styles'
import { IPage } from '@models/chapters';

export const Comic = () => {
  const [currentPgId, setcurrentPgId] = useState(0)
  const {books,setCurrentBook,currentBook,setChapter,chapter,currentChapId,setCurrentChapId} = useContext<IContext>(RootContext)
  const chapterData =  books[books?.findIndex(v=>v?.id === currentBook)]
  const pages:IPage[] = chapter.pages

  console.log(pages[currentPgId].image.file)
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
    {/* chapter pagination */}
    <Row>
    {chapterData?.chapter_ids.map((v)=><Button paging active={v===currentChapId} onClick={async ()=>{
      const chapter = await actions.getChapterDetails(v)
      setCurrentChapId(v)
      setChapter(chapter.data)
      }}>{v}</Button>)}
    </Row>
    
    <img src={pages[currentPgId].image.file}/>
    

    </Column>
  )
}
