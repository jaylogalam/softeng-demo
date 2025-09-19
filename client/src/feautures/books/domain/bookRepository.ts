import { BookEntity } from "./bookEntity.ts";

export abstract class BookRepository {
  public abstract getAllBooks(): Promise<BookEntity[]>;
  abstract checkoutBook(book: BookEntity): Promise<void>;
  abstract returnBook(book: BookEntity): Promise<void>;
}
