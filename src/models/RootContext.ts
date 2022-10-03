import { IBooks } from './books';

export interface IContext{
  books:Array<IBooks>,
  currentBook:number|null;
  setCurrentBook:(v:number) => void;
}