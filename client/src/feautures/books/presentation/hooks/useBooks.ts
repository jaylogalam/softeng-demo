import { useEffect, useState } from "react";
import { BookPersistence } from "../../data/bookPersistence";
import { BookModel } from "../../data/bookModel";

export const useBooks = () => {
  const [books, setBooks] = useState<BookModel[]>();
  const [loading, setLoading] = useState<boolean>(false);

  const repository = new BookPersistence();

  useEffect(() => {
    repository.getAllBooks().then((data) => {
      setBooks(data);
      setLoading(false);
    });
  }, []);

  return {
    books,
    loading,
  };
};
