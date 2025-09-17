import { useEffect, useState } from "react";
import { Card } from "./components/card";
import { Label } from "./components/label";
import { Button } from "./components/button";

interface Book {
  id: string;
  title: string;
  author: string;
}

export default function BooksList() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  const checkout = async (book: Book) => {
    const res = await fetch("http://localhost:5000/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book),
    });

    if (!res.ok) {
      const error = await res.json();

      if (error.error == "not available") {
        alert("This book is not available right now");
      }
      else {
        alert("An error occured\n" + error.error);
      }
    }
  };

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch((err) => {
        alert("An error occured\n" + err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <Card className="w-[600px] p-6 h-[50rem] overflow-y-auto">
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <div className="p-4 border-0 justify-between flex border-b-2 first:border-t-2 last:border-b-0">
              <div className="flex flex-col">
                <Label className="text-xl">{book.title}</Label>
                <Label className="font-normal text-md">{book.author}</Label>
              </div>
              <div>
                <div className="items-center flex gap-4 h-full">
                  <Label>Avalable copies: {book.no_of_copies}</Label>
                  <Button onClick={() => checkout(book)}>Checkout</Button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}
