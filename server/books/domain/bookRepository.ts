import { BookEntity } from "./bookEntity.ts";

export abstract class BookRepository {
  abstract getAllBooks(): Promise<BookEntity[] | string>;
  abstract checkoutBook(book: BookEntity): Promise<void | string>;
}
