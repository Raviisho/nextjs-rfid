import SearchBar from "../../../components/searchbar";
import Table from "../../../components/Table/table";
import { getServerSideProps } from "./getServerSideProps"; // Importa la función

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

export { getServerSideProps }; // Exporta la función
export default ClientesPage;
