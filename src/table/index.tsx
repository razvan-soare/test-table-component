import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";

export default function DemoPage() {
  const data: Payment[] = [
    {
      id: "728ed52f",
      brand: "a",
      amount: 100,
      status: "pending",
      email: "m1@example.com",
    },
    {
      id: "728ed52f",
      brand: "a",
      amount: 100,
      status: "pending",
      email: "m2@example.com",
    },
    {
      id: "728ed52f",
      brand: "b",
      amount: 100,
      status: "pending",
      email: "m3@example.com",
    },
    {
      id: "728ed52f",
      brand: "b",
      amount: 100,
      status: "pending",
      email: "m4@example.com",
    },
    {
      id: "728ed52f",
      brand: "c",
      amount: 100,
      status: "pending",
      email: "m5@example.com",
    },
    {
      id: "728ed52f",
      brand: "c",
      amount: 100,
      status: "pending",
      email: "m6@example.com",
    },
    {
      id: "728ed52f",
      brand: "d",
      amount: 100,
      status: "pending",
      email: "m5@example.com",
    },
    {
      id: "728ed52f",
      brand: "d",
      amount: 100,
      status: "pending",
      email: "m6@example.com",
    },
    {
      id: "728ed52f",
      brand: "z",
      amount: 100,
      status: "pending",
      email: "m5@example.com",
    },
    {
      id: "728ed52f",
      brand: "z",
      amount: 100,
      status: "pending",
      email: "m6@example.com",
    },
    {
      id: "728ed52f",
      brand: "z",
      amount: 100,
      status: "pending",
      email: "m5@example.com",
    },
    {
      id: "728ed52f",
      brand: "z",
      amount: 100,
      status: "pending",
      email: "m6@example.com",
    },
  ];

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
