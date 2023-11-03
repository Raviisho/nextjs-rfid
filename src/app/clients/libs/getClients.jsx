export default async function getClients() {
  const response = await fetch("http://127.0.0.1:3000/api/clients");

  if (!response.ok) {
    throw new Error("failed to fetch clients");
  }

  return await response.json();
}
