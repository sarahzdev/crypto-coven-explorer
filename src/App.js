import './App.css';
import { createClient } from 'urql';
import { useEffect, useState } from 'react';

const API_URL = "https://api.thegraph.com/subgraphs/name/sazhang/sz-crypto-coven";

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
  url: API_URL
});

function App() {
  const [tokens, setTokens] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await client.query(fillerQuery).toPromise();
    setTokens(response.data.tokens);
  }

  return (
    <div className="App">
      <div className="container">
        <h1 className="h1">Find your coven</h1>
        <div className="card-wrapper">
          {
            tokens.map((token, index) => (
              <div key={token.id} className="card">
                <img className="card__image" src={token.image} alt={token.name}></img>
                <h2>{token.name}</h2>
                <p>{token.description}</p>
                <div className="card__signs">
                  <span>{token.sun}</span>
                  &nbsp;&middot;&nbsp;
                  <span>{token.moon}</span>
                  &nbsp;&middot;&nbsp;
                  <span>{token.rising}</span>
                </div>
                <a href={token.externalURL}>Learn more</a>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
