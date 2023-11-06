// Importa las bibliotecas necesarias
import SearchBar from "./components/searchbar";
import Table from "./components/Table/table";

// Define la función de la página (antes de cualquier exportación)
function ClientesPage({ clients }) {
  return (
    <>
      <div className="m-5 overflow-x-auto shadow-md sm:rounded-lg">
        <SearchBar />
        <Table clients={clients} />
      </div>
    </>
  );
}

// Exporta la función de la página
export default ClientesPage;

// Incorpora la función getServerSideProps para recuperar los datos
export async function getServerSideProps() {
  // Aquí recuperas los datos antes de la renderización de la página
  const clients = await getClients();

  return {
    props: { clients },
  };
}
