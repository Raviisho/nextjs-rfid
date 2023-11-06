"use client"
import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import Table from "./components/Table/Table";

const useClientData = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch("http://localhost:3000/api/clients");

        if (!result.ok) {
          throw new Error(`HTTP error! Status: ${result.status}`);
        }

        const jsonResult = await result.json();
        setClients(jsonResult);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { clients, loading, error };
};

const ClientesPage = () => {
  const { clients, loading, error } = useClientData();

  if (loading) {
    return <div>Cargando clientes...</div>; // Show a loading indicator while fetching data
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>; // Show an error message if data fetch fails
  }

  return (
    <>
      <div className="m-5 overflow-x-auto shadow-md sm:rounded-lg">
        <SearchBar />
        <Table clients={clients} />
      </div>
    </>
  );
};

export default ClientesPage;