import { BookEntity } from "../domain/bookEntity.ts";
import { BookRepository } from "../domain/bookRepository.ts";
import { BookModel } from "./bookModel.ts";

export class BookPersistence implements BookRepository {
  async getAllBooks() {
    const response = await fetch("http://localhost:5000/", {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch books");
    }

    const data = await response.json();
    return data.map((json: any) => BookModel.fromJson(json));
  }

  async checkoutBook(book: BookEntity) {}

  async returnBook(book: BookEntity) {}
}
