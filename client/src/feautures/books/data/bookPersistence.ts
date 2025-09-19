import axios from "axios";
import { BookEntity } from "../domain/bookEntity.ts";
import { BookRepository } from "../domain/bookRepository.ts";
import { BookModel } from "./bookModel.ts";

export class BookPersistence implements BookRepository {
  async getAllBooks() {
    return axios.get<BookModel[]>("http://localhost:5000/").then(res => res.data);
  }

  async checkoutBook(book: BookEntity) {
    axios.post("http://localhost:5000/checkout", book);
  }

  async returnBook(book: BookEntity) {
    // Return book code
    // ...
  }
}
