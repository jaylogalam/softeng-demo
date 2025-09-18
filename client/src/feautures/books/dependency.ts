import { BookPersistence } from "./data/bookPersistence";
import { GetAllBooks } from "./domain/bookUsecase";
abstract class BookDependencies {
    public abstract boo
}

class BookDependency {
  bookRepository = new BookPersistence();
  getAllBooks = new GetAllBooks(this.bookRepository);
}

export const bookDependency = new BookDependency();
