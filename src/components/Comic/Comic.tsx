import {useContext,useState} from 'react'
import RootContext from '@components/App/RootContext'
import { IContext } from '@models/RootContext'
import { IBooks } from '@models/books';
import actions from "@api/books"
import { Button, Column, Image, InvisbleButton, Relative, Row } from './styles'
import { IPage } from '@models/chapters';
import Header from './components/Header';
import ChapterPagination from './components/ChapterPagination';
import ComicView from './components/ComicView';

export const Comic = () => {
  const [currentPgId, setcurrentPgId] = useState(0)
  const {books,setCurrentBook,chapter} = useContext<IContext>(RootContext)
  const pages:IPage[] = chapter.pages

  return (
    <Column>
    {/* Comics Index*/}
    <Header setcurrentPgId={setcurrentPgId}/>
    <br/>
    {/* Chapter Pagination */}
    <ChapterPagination setcurrentPgId={setcurrentPgId}/>
    <br/>
    <ComicView currentPgId={currentPgId} setcurrentPgId={setcurrentPgId}/>
    <br/>
    <Row>{currentPgId+1}/{pages.length}</Row>
    </Column>
  )
}


