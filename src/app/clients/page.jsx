import { Suspense } from "react";
import getClients from "./libs/getClients";
import SearchBar from "./components/searchbar";
import Table from "./components/Table/table";

export default async function ClientesPage() {
  const clients = await getClients();

  return (
    <>
      <div className="m-5 overflow-x-auto shadow-md sm:rounded-lg">
        <SearchBar />
        <Suspense fallback={<div>Cargando clientes...</div>}>
          <Table clients={clients} />
        </Suspense>
      </div>
    </>
  );
}
