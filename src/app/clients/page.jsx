"use client"
import SearchBar from "./components/searchbar";
import Table from "./components/Table/table";
import { useClientData } from "../hooks/useClientData";


const ClientesPage = () => {
  const { clients, loading, error } = useClientData();

  return (
    <>
    { loading &&  <div>Cargando clientes...</div> }
    { error && <div>Error fetching data: {error.message}</div> }
      <div className="m-5 overflow-x-auto shadow-md sm:rounded-lg">
        <SearchBar />
        <Table clients={clients} />
      </div>
    </>
  );
};

export default ClientesPage;