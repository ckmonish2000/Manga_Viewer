import { IBooks } from '@models/books';
import React from 'react';
import { IContext } from '@models/RootContext';
import { IChapter } from '@models/chapters';

const initChapter = {
  id: -1,
title: "",
book: {
    id: -1,
    title: "",
    chapter_ids: [],
},
chapter_index: -1,
pages: [],
}

const init = {
  books:[],
  currentBook:null,
  setCurrentBook:(v:number) =>{},
  chapter:initChapter,
  setChapter:(v:IChapter)=>{},
  currentChapId:0, 
  setCurrentChapId:(v:number)=>{},
}

const RootContext = React.createContext<IContext>(init);

export default RootContext;