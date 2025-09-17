import { BookEntity } from "../domain/bookEntity.ts";
import { BookRepository } from "../domain/bookRepository.ts";

export class GetAllBooks {
  repository: BookRepository
    constructor(repository: BookRepository) {
    this.repository = repository
  }

  async execute(): Promise<BookEntity[]> {
    return await this.repository.getAllBooks();
  }
}
