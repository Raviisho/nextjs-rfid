import SearchBar from "../../../components/searchbar";
import Table from "../../../components/Table/table";
import getClients from "../../../libs/getClients";

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

export async function getServerSideProps() {
  const clients = await getClients();

  return {
    props: { clients },
  };
}

export default ClientesPage;