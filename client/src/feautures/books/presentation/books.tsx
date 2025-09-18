import { Card } from "@/components/card";
import type { BookEntity } from "../domain/bookEntity";
import { Label } from "@/components/label";
import { Button } from "@/components/button";
import { useState } from "react";

function Books(books: BookEntity[]) {
  const [loading, setLoading] = useState(true);

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
                  <Button onClick={() => () => { }}>Checkout</Button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default Books