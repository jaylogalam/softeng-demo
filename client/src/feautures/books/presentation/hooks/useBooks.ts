import type { BookModel } from "../../data/bookModel";
import { BookPersistence } from "../../data/bookPersistence";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useBooks = () => {
  const repository = new BookPersistence();

  const { data: books, status: booksStatus, error: booksError } = useQuery({
    queryKey: ["books"],
    queryFn: () => repository.getAllBooks(),
  });

  const { mutate: checkout, status: checkoutStatus, error: checkoutError } = useMutation({
    mutationFn: (book: BookModel) => repository.checkoutBook(book),
  })

  return {
    books,
    booksStatus,
    booksError,
    checkout,
    checkoutStatus,
    checkoutError
  };
};
