"use client";
import { useEffect, useState, Suspense } from "react";
import SearchBar from "./components/searchbar";
import Table from "./components/Table/table";

export default function ClientesPage() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch("http://localhost:3000/api/clients");
        if (!result.ok) {
          throw new Error('Failed to fetch');
        }
        const jsonResult = await result.json();
        setClients(jsonResult);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle the error, e.g., set an error state, display a message, etc.
      }
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