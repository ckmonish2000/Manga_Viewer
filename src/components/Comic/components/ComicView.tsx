import { useContext } from 'react';
import RootContext from "@components/App/RootContext";
import { IContext } from "@models/RootContext";
import { IPage } from '@models/chapters';
import actions from '@api/books';
import { Image, InvisbleButton, Relative } from '../styles';
import { IComicCompProps } from '@models/comic';

const ComicView = ({currentPgId, setcurrentPgId}:IComicCompProps)=>{
  const {books,setCurrentBook,currentBook,setChapter,chapter,currentChapId,setCurrentChapId} = useContext<IContext>(RootContext)
  const pages:IPage[] = chapter.pages
  const chapterData =  books[books?.findIndex(v=>v?.id === currentBook)]
  
  const Next = async()=>{
    const nextChapId = chapterData?.chapter_ids.indexOf(currentChapId) + 1
    if(currentPgId+1<pages.length){
      setcurrentPgId(currentPgId+1)
    }else if(nextChapId<chapterData?.chapter_ids.length){
      const v = chapterData?.chapter_ids[nextChapId]
      setCurrentChapId(v)
      const chapter = await actions.getChapterDetails(v)
      setCurrentChapId(v)
      setChapter(chapter.data)
      setcurrentPgId(0)
  }
}

  const Prev = async()=>{
    const indexOfChapId = chapterData?.chapter_ids.indexOf(currentChapId) 
  
    if(currentPgId>0){
    setcurrentPgId(currentPgId-1)
  }else if(indexOfChapId-1>=0){
    const v = chapterData?.chapter_ids[indexOfChapId-1]
    setCurrentChapId(v) 
    const chapter = await actions.getChapterDetails(v)
    setCurrentChapId(v)
    setChapter(chapter.data)
    setcurrentPgId(0)
  }}

  return (
    <Relative>
    <InvisbleButton pos="left" onClick={Next}>next</InvisbleButton>

    <InvisbleButton pos="right" onClick={Prev}>prev</InvisbleButton>

    <Image src={pages[currentPgId]?.image?.file}/>
    </Relative>
  )
}

export default ComicView
