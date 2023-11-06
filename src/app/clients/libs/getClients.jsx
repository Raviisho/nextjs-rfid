export default async function getClients() {
  const response = await fetch("http://localhost/api/clients");

  if (!response.ok) {
    throw new Error("failed to fetch clients");
  }

  return await response.json();
}
