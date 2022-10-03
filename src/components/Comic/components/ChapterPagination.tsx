import { useContext } from 'react';
import RootContext from "@components/App/RootContext"
import { IContext } from "@models/RootContext"
import { Button, Row } from "../styles"
import actions from '@api/books';
import { IComicCompProps } from '@models/comic';

const ChapterPagination = ({setcurrentPgId}:IComicCompProps)=>{
  const {books,setCurrentBook,currentBook,setChapter,chapter,currentChapId,setCurrentChapId} = useContext<IContext>(RootContext)
  const chapterData =  books[books?.findIndex(v=>v?.id === currentBook)]

  return (
    <Row>
    {chapterData?.chapter_ids.map((v)=><Button paging active={v===currentChapId} onClick={async ()=>{
      const chapter = await actions.getChapterDetails(v)
      setCurrentChapId(v)
      setChapter(chapter.data)
      setcurrentPgId(0)
      }}>{v}</Button>)}
    </Row>
  )
}

export default ChapterPagination