import Layout from "./Layout";

const Error = ({ error }) => {
  return (
    <Layout>
      <p>{error}</p>
    </Layout>
  );
};

export default Error;
