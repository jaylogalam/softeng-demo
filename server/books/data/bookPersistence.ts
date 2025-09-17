import { BookProvider } from "./bookProvider.ts";
import { BookEntity } from "../domain/bookEntity.ts";
import { BookRepository } from "../domain/bookRepository.ts";

export class BookPersistence implements BookRepository {
  async getAllBooks() {
    const { data, error } = await BookProvider.from("books")
      .select("*")
      .order("title");
    if (error) throw new Error(error.message);

    return data;
  }

  async checkoutBook(book: BookEntity) {
    const { data, error } = await BookProvider.from("books")
      .select("no_of_copies")
      .eq("title", book.title)
      .single();

    if (error) throw new Error(error.message);

    if (data.no_of_copies <= 0) {
      throw new Error("not available");
    }

    await BookProvider.from("books")
      .update({ no_of_copies: data.no_of_copies - 1 })
      .eq("title", book.title);
  }
}
