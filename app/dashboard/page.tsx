import { GetAllUsers } from "@/actions/user.actions";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getAllProducts } from "@/lib/dataFetchers";
import { IndianRupee, PartyPopper, ShoppingBag } from "lucide-react";
import React from "react";

const DashBoardPage = async () => {
  const totalProducts = (await getAllProducts()).length;
  const totalUsers = (await GetAllUsers()).length;

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Card className="border-r-8 border-b-8 border-emerald-500">
          <CardHeader className="flex items-center justify-between flex-row pb-2 px-5">
            <CardTitle className="text-3xl font-extrabold">
              Totat Revenue
            </CardTitle>
            <IndianRupee className="h-4 w—4 text-green-500" />
          </CardHeader>
          <CardContent className="text—xs text—muted-foreground">
            <p className="text-2xl font-bold">₹ 100,000</p>
            <p className="text-xs text-muted-foreground">
              Based on 100 Charges
            </p>
          </CardContent>
        </Card>
        <Card className="border-r-8 border-b-8 border-blue-500">
          <CardHeader className="flex items-center justify-between flex-row pb-2 px-5">
            <CardTitle className="text-3xl font-extrabold">
              Totat Sales
            </CardTitle>
            <ShoppingBag className="h-4 w—4 text-blue-500" />
          </CardHeader>
          <CardContent className="text—xs text—muted-foreground">
            <p className="text-2xl font-bold">₹ 100,000</p>
            <p className="text-xs text-muted-foreground">Based on 100 Sales</p>
          </CardContent>
        </Card>
        <Card className="border-r-8 border-b-8 border-amber-500">
          <CardHeader className="flex items-center justify-between flex-row pb-2 px-5">
            <CardTitle className="text-3xl font-extrabold">
              Total Products
            </CardTitle>
            <PartyPopper className="h-4 w—4 text-amber-500" />
          </CardHeader>
          <CardContent className="text—xs text—muted-foreground">
            <p className="text-2xl font-bold">{totalProducts}</p>
            <p className="text-xs text-muted-foreground">products created</p>
          </CardContent>
        </Card>
        <Card className="border-r-8 border-b-8 border-indigo-500">
          <CardHeader className="flex items-center justify-between flex-row pb-2 px-5">
            <CardTitle className="text-3xl font-extrabold">
              Totat Users
            </CardTitle>
            <PartyPopper className="h-4 w—4 text-muted-foreground border-indigo-500" />
          </CardHeader>
          <CardContent className="text—xs text—muted-foreground">
            <p className="text-2xl font-bold">{totalUsers}</p>
            <p className="text-xs text-muted-foreground">
              Total Users signed up{" "}
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3 mt-10">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>Transactions</CardTitle>
            <CardDescription>
              Recent transactions from your store
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="">
          <CardHeader>
            <CardTitle>Recent Sales </CardTitle>
            <CardDescription>Recent Sales from your store</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-5">
            <div className="flex items-center gap-4 dark:bg-blue-900 bg-blue-500 py-2 px-2 sm:px-3 rounded-md ">
              <Avatar className="hidden sm:flex size-9">
                <AvatarFallback>IS</AvatarFallback>
              </Avatar>
              <div className="grid gap-1 text-white">
                <p className="">Ishak Shekh</p>
                <span className="text-xs text-white/60">
                  shekhishak90@gmail.com
                </span>
              </div>
              <p className="ml-auto font-medium text-white">+ ₹564</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default DashBoardPage;
