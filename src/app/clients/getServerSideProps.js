import getClients from "../../../libs/getClients";

export async function getServerSideProps() {
  const clients = await getClients();

  return {
    props: { clients },
  };
}
