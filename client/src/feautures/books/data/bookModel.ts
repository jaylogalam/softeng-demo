import { BookEntity } from "../domain/bookEntity";

export class BookModel extends BookEntity {
  constructor(id: number, title: string, author: string, no_of_copies: number) {
    super(id, title, author, no_of_copies);
  }

  // Convert from JSON → BookModel
  static fromJson(json: any): BookModel {
    return new BookModel(
      Number(json.id),
      json.title ?? "",
      json.author ?? "",
      Number(json.no_of_copies) ?? 0
    );
  }
}
