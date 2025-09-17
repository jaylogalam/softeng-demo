import { PostgrestError } from "@supabase/supabase-js";
import { BookEntity } from "./bookEntity.ts";

export abstract class BookRepository {
  abstract getAllBooks(): Promise<BookEntity[] | PostgrestError>;
  abstract checkoutBook(book: BookEntity): Promise<void | PostgrestError>;
}
