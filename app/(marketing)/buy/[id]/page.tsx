import { GetProductById } from "@/actions/product.action";
import GoBackBtn from "@/components/resuables/GoBackBtn";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const BuyPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const user = await currentUser();
  if (!user) {
    redirect("/sign-in");
  }

  const id = (await params).id;
  const productData = await GetProductById(id);

  if (!productData) {
    return (
      <div className="h-[70vh] flex items-center justify-center text-2xl sm:text-4xl font-black">
        Product not found
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <GoBackBtn btnText="All Products" herf="/products/all" />

      <div className="grid md:grid-cols-2 gap-8 py-10">
        <Card>
          <CardHeader>
            <CardTitle>{productData.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4 mb-4">
              {productData.images.map((src, index) => (
                <Image
                  key={index}
                  src={src}
                  alt={`${productData.name} image ${index + 1}`}
                  width={200}
                  height={200}
                  className="rounded-lg object-cover"
                />
              ))}
            </div>
            <p className="text-2xl font-bold">
              ₹ {productData.price.toFixed(2)}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Your Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" value={user.fullName ?? ""} readOnly />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={user.emailAddresses[0].emailAddress}
                  readOnly
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={user.phoneNumbers[0].phoneNumber}
                  readOnly
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Shipping Address</Label>
                <Textarea
                  id="address"
                  placeholder="Enter your shipping address"
                  className="min-h-32 resize-none"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input id="city" placeholder="Enter your city" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Input id="state" placeholder="Enter your state" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zipcode">Zip Code</Label>
                  <Input id="zipcode" placeholder="Enter your zip code" />
                </div>
              </div>
              <Button type="submit" className="w-full">
                Complete Purchase
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BuyPage;
