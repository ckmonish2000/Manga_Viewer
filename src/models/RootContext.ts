import { IBooks } from './books';
import { IChapter } from './chapters';

export interface IContext{
  books:Array<IBooks>,
  currentBook:number|null;
  setCurrentBook:(v:number) => void;
  chapter:IChapter,
  setChapter:(v:IChapter)=>void,
  currentChapId:number, 
  setCurrentChapId:(v:number) => void
}