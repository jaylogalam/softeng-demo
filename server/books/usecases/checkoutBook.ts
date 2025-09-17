import { BookPersistence } from "../data/bookPersistence.ts";
import { BookProvider } from "../data/bookProvider.ts";
import { BookEntity } from "../domain/bookEntity.ts";

const checkoutBook = new BookPersistence

exports.checkoutBook = async (book: BookEntity) => {
  try {
    checkoutBook.checkoutBook(book)
  } catch {
    
  }
}