import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { Input } from "@/components/input";
import { Label } from "@/components/label";

function CheckoutPage() {
  return (
    <Card className="flex flex-col gap-2 p-8 w-1/6">
      <Label className="text-2xl"> Checkout Page </Label>
      <div className="flex flex-col gap-4">
        <Label className="font-normal mb-4">
          Please fill out the form below
        </Label>
        <div className="flex flex-col gap-2">
          <Label>Book Title</Label>
          <Input placeholder="Enter book title" />
        </div>
        <div className="flex flex-col gap-2">
          <Label>Author</Label>
          <Input placeholder="Enter author name" />
        </div>
      </div>
      <Button type="submit" className="mt-4">
        Checkout
      </Button>
    </Card>
  );
}

export default CheckoutPage;
