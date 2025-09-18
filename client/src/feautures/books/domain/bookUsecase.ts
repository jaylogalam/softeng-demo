import { BookRepository } from "../domain/bookRepository";
import { BookEntity } from "../domain/bookEntity";

export class GetAllBooks {
  private repository: BookRepository;
    constructor(repository: BookRepository) {
      this.repository = repository;
  }

  async execute(): Promise<BookEntity[]> {
    return this.repository.getAllBooks();
  }
}