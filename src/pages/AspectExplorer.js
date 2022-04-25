import { useQuery } from "urql";
import Error from "../components/Error";
import Layout from "../components/Layout";
import Loading from "../components/Loading";

const TraitsQuery = `
  query {
    tokens(first: 6) {
      id
      tokenID
      tokenURI
      externalURL
      image 
      name
    }
  }
`;

function AspectExplorer() {
  const [result, reexecuteQuery] = useQuery({
    query: TraitsQuery,
  });

  const { data, fetching, error } = result;

  if (fetching) return <Loading />;
  if (error) return <Error />;

  const tokens = data.tokens;

  return (
    <Layout>
      <h1 className="text-4xl text-center">Browse witches by appearance</h1>
      <div className="flex flex-wrap justify-center">
        {tokens.map((token, index) => (
          <div key={token.id} className="w-full max-w-xs p-4">
            <img className="w-full" src={token.image} alt={token.name}></img>
            <h2>{token.name}</h2>
            <a href={token.externalURL}>Learn more</a>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default AspectExplorer;
