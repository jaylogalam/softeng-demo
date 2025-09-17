import type { Book } from "../entities/book";

export interface BookRepository {
    showAllBook(): Promise<Book[]>;
    checkoutBook(): Promise<Book>;
}