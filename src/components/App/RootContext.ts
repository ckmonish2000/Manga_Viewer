import { IBooks } from '@models/books';
import React from 'react';
import { IContext } from '@models/RootContext';

const init = {
  books:[],
  currentBook:null,
  setCurrentBook:(v:number) =>{}
}

const RootContext = React.createContext<IContext>(init);

export default RootContext;