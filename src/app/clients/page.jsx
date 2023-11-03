import { Suspense } from "react";
import SearchBar from "./components/searchbar";
import Table from "./components/Table/table";

export default function ClientesPage({ clients }) {
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


export async function getServerSideProps() {
  const response = await fetch("http://127.0.0.1:3000/api/clients");

  if (!response.ok) {
    return {
      notFound: true,
    };
  }

  const clients = await response.json();

  return {
    props: {
      clients,
    },
  };
}