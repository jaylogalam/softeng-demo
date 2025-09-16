import type { Book } from "../entities/book";

export abstract class BookRepository {
    abstract checkoutBook(): Promise<Book>;
}