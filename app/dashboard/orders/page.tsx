import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";

const OrdersPage = () => {
  return (
    <Card>
      <CardHeader className="px-7">
        <CardTitle className="sm:text-4xl text-2xl font-extrabold">
          Orders
        </CardTitle>
        <CardDescription>Recent orders from your store</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Amouont</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">
                <p>Ishak Shekh</p>
                <span className="hidden md:flex text-sm text-muted-foreground">
                  shekhishak90@gmail.com
                </span>
              </TableCell>
              <TableCell>Sale</TableCell>
              <TableCell>
                <Badge variant="outline">Pending</Badge>
              </TableCell>
              <TableCell>
                <Badge variant="outline">
                  {new Date().toLocaleDateString()}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <p className="text-lg font-bold">₹ 1000</p>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                <p>Ishak Shekh</p>
                <span className="hidden md:flex text-sm text-muted-foreground">
                  shekhishak90@gmail.com
                </span>
              </TableCell>
              <TableCell>Sale</TableCell>
              <TableCell>
                <Badge variant="outline">Pending</Badge>
              </TableCell>
              <TableCell>
                <Badge variant="outline">
                  {new Date().toLocaleDateString()}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <p className="text-lg font-bold">₹ 1000</p>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                <p>Ishak Shekh</p>
                <span className="hidden md:flex text-sm text-muted-foreground">
                  shekhishak90@gmail.com
                </span>
              </TableCell>
              <TableCell>Sale</TableCell>
              <TableCell>
                <Badge variant="outline">Pending</Badge>
              </TableCell>
              <TableCell>
                <Badge variant="outline">
                  {new Date().toLocaleDateString()}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <p className="text-lg font-bold">₹ 1000</p>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                <p>Ishak Shekh</p>
                <span className="hidden md:flex text-sm text-muted-foreground">
                  shekhishak90@gmail.com
                </span>
              </TableCell>
              <TableCell>Sale</TableCell>
              <TableCell>
                <Badge variant="outline">Pending</Badge>
              </TableCell>
              <TableCell>
                <Badge variant="outline">
                  {new Date().toLocaleDateString()}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <p className="text-lg font-bold">₹ 1000</p>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                <p>Ishak Shekh</p>
                <span className="hidden md:flex text-sm text-muted-foreground">
                  shekhishak90@gmail.com
                </span>
              </TableCell>
              <TableCell>Sale</TableCell>
              <TableCell>
                <Badge variant="outline">Pending</Badge>
              </TableCell>
              <TableCell>
                <Badge variant="outline">
                  {new Date().toLocaleDateString()}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <p className="text-lg font-bold">₹ 1000</p>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                <p>Ishak Shekh</p>
                <span className="hidden md:flex text-sm text-muted-foreground">
                  shekhishak90@gmail.com
                </span>
              </TableCell>
              <TableCell>Sale</TableCell>
              <TableCell>
                <Badge variant="outline">Pending</Badge>
              </TableCell>
              <TableCell>
                <Badge variant="outline">
                  {new Date().toLocaleDateString()}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <p className="text-lg font-bold">₹ 1000</p>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                <p>Ishak Shekh</p>
                <span className="hidden md:flex text-sm text-muted-foreground">
                  shekhishak90@gmail.com
                </span>
              </TableCell>
              <TableCell>Sale</TableCell>
              <TableCell>
                <Badge variant="outline">Pending</Badge>
              </TableCell>
              <TableCell>
                <Badge variant="outline">
                  {new Date().toLocaleDateString()}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <p className="text-lg font-bold">₹ 1000</p>
              </TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={4}>Total</TableCell>
              <TableCell className="text-right">$2,500.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </CardContent>
    </Card>
  );
};

export default OrdersPage;
