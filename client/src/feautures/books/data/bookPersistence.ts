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

  async checkoutBook(book: BookEntity) {
    const response = await fetch("http://localhost:5000/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book),
    });

    if (!response.ok) {
      const error = await response.json();

      if (error.error == "not available") {
        alert("This book is not available right now");
      } else {
        alert("An error occured\n" + error.error);
      }
    }
  }

  async returnBook(book: BookEntity) {
    // Return book code
    // ...
  }
}
