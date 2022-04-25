import { useState } from "react";
import { useQuery } from "urql";
import Error from "../components/Error";
import Layout from "../components/Layout";
import Loading from "../components/Loading";
import SignListbox from "../components/SignListbox";

const signs = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Capricorn",
  "Aquarius",
  "Pisces",
];

const SignsQuery = `
  query {
    tokens(first: 10) {
      id
      tokenID
      tokenURI
      externalURL
      image 
      name
      sun 
      moon 
      rising
    }
  }
`;

function AstrologicalChartExplorer() {
  const [sun, setSun] = useState("");
  const [moon, setMoon] = useState("");
  const [rising, setRising] = useState("");

  const [result, reexecuteQuery] = useQuery({
    query: SignsQuery,
  });

  const { data, fetching, error } = result;

  if (fetching) return <Loading />;
  if (error) return <Error />;

  const tokens = data.tokens;

  return (
    <Layout>
      <h1 className="text-4xl text-center text-zinc-300 mt-16">
        Browse witches by astrological sign
      </h1>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-8 my-8">
        <SignListbox
          signs={signs}
          label={"☼ Sun:"}
          sign={sun}
          setSign={setSun}
        ></SignListbox>
        <SignListbox
          signs={signs}
          label={"☾ Moon:"}
          sign={moon}
          setSign={setMoon}
        ></SignListbox>
        <SignListbox
          signs={signs}
          label={"↑ Rising:"}
          sign={rising}
          setSign={setRising}
        ></SignListbox>
      </div>
      <div className="flex flex-wrap justify-center">
        {tokens.map((token, index) => (
          <div
            key={token.id}
            className="border border-zinc-700 rounded-md w-full max-w-xs p-4 m-4 shadow-md"
          >
            <h2 className="text-xl text-center mb-4">{token.id}</h2>
            <img
              className="w-full mb-4"
              src={token.image}
              alt={token.name}
            ></img>
            <h2 className="text-xl text-center uppercase mb-2">{token.name}</h2>
            <div className="text-center mb-4">
              <span>☼&nbsp;{token.sun}&nbsp;</span>
              &nbsp;&middot;&nbsp;
              <span>☾&nbsp;{token.moon}&nbsp;</span>
              &nbsp;&middot;&nbsp;
              <span>↑&nbsp;{token.rising}&nbsp;</span>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default AstrologicalChartExplorer;
