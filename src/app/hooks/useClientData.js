import React, { useEffect, useState } from "react";

export const useClientData = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch("http://190.225.121.163/api/clients");

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
