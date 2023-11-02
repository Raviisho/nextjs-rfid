"use client";
import { useEffect, useState, Suspense } from "react";
import SearchBar from "./components/searchbar";
import Table from "./components/Table/table";

export default function ClientesPage() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("http://190.225.121.163:3000/api/clients");
      const jsonResult = await result.json();
      setClients(jsonResult);
    };
    fetchData();
  }, []);

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
