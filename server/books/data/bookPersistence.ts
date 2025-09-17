import { BookProvider } from "./bookProvider.ts";
import { BookEntity } from "../domain/bookEntity.ts";
import { BookRepository } from "../domain/bookRepository.ts";

export class BookPersistence implements BookRepository {
  async getAllBooks() {
    const { data, error } = await BookProvider.from("books").select("*");
    if (error) throw new Error(error.message);

    return data
  }

  async checkoutBook(book: BookEntity) {
    const { error } = await BookProvider
      .from("books")
      .update({ no_of_copies: book.no_of_copies - 1 })
      .eq("id", book.id);

    if (error) throw new Error(error.message);
  }
}
