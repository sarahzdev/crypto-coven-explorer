import { createClient } from "urql";
import { useEffect, useState } from "react";
import Header from "../components/Header";

const API_URL =
  "https://api.thegraph.com/subgraphs/name/sazhang/sz-crypto-coven";

const fillerQuery = `
  query {
    tokens(first: 6) {
      id
      tokenID
      tokenURI
      externalURL
      image 
      name 
      description
      type 
      sun 
      moon 
      rising
    }
  }
`;

const client = createClient({
  url: API_URL,
});

function AspectExplorer() {
  const [tokens, setTokens] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await client.query(fillerQuery).toPromise();
    setTokens(response.data.tokens);
  }

  return (
    <div className="font-serif bg-zinc-800 text-zinc-400">
      <Header />
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
    </div>
  );
}

export default AspectExplorer;
