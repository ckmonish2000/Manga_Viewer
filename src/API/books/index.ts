import client from "@api/Client"
import { IBooks } from "@models/books"
import { IChapter } from "@models/chapters"

export default {
  getAllBooks:async()=>await client.get<Array<IBooks>>("http://18.177.140.79:8080/books/"),
  getBookDetails:async(id:number)=>await client.get<IBooks>(`http://18.177.140.79:8080/books/${id}/`),
  getChapterDetails:async(chapter_ids:number)=>await client.get<IChapter>(`http://18.177.140.79:8080/chapters/${chapter_ids}/`),
}