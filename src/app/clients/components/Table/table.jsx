import { Suspense } from "react";
import TableBody from "./bodyTable";
import TableHeader from "./headerTable";

export default function Table({ clients }) {
  return (
    <>
      <table className="px-1 w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <TableHeader />
        <tbody>
          {clients.map((client) => (
            <TableBody client={client} key={client.id} />
          ))}
        </tbody>
      </table>
    </>
  );
}
