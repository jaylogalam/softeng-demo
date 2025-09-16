import type { Book } from "../entities/bookEntity";

export abstract class BookRepository {
    abstract showBooks(): Promise<Book[]>;
}