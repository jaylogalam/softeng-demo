export class BookEntity {
  id: number;
  title: string;
  author: string;
  no_of_copies: number;

  constructor(id: number, title: string, author: string, no_of_copies: number) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.no_of_copies = no_of_copies;
  }
}
