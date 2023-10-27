import { Suspense } from "react";
import SearchBar from "./components/searchbar";
import Table from "./components/Table/table";

async function loadClients() {
  const res = await fetch("http://localhost:3000/api/clients");
  return await res.json();
}

export default async function ClientesPage() {
  const clients = await loadClients();
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
