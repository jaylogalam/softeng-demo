export class Book {
    public id: string;
    public title: string;
    public author: string;
    public category: string;

    constructor(id: string, title: string, author: string, category: string) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.category = category;
    }
}