import { useContext } from 'react';
import RootContext from "@components/App/RootContext";
import { IBooks } from "@models/books";
import { IContext } from "@models/RootContext";
import actions  from '@api/books';
import { Button, Row } from "../styles";
import { IComicCompProps } from '@models/comic';

const Header = ({setcurrentPgId}:IComicCompProps)=>{
  const {books,setCurrentBook,currentBook,setChapter,chapter,currentChapId,setCurrentChapId} = useContext<IContext>(RootContext)

  return(
    <Row>
    {books?.map((val:IBooks)=>{
      const {title,id} = val;
      
      const activate = async()=>{
        setCurrentBook(val.id)
        // switch chapter ID when you change book
        const chapterReq = await actions.getChapterDetails(val.chapter_ids[0])
        const chapter = chapterReq.data
        if(chapter.pages.length>0) setCurrentChapId(chapter.id)
        setChapter(chapter)

        setcurrentPgId(0)
      }
      return <>
      <Button key={id} onClick={activate} active={id===currentBook}>{title}</Button>
      </>
    })}
    </Row>
  )
}

export default  Header