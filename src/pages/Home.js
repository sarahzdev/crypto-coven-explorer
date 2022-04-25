import { Link } from "react-router-dom";
import Header from "../components/Header";

function Home() {
  return (
    <div className="font-serif w-full h-screen bg-zinc-800 text-zinc-400 flex flex-col">
      <Header />
      <div className="grow flex flex-wrap md:flex-nowrap md:grid-cols-2 w-full">
        <div className="w-full flex items-center justify-center p-4">
          <Link to="/by-sign">
            <h1 className="text-4xl text-center">
              Browse witches by astrological sign
            </h1>
          </Link>
        </div>
        <div className="w-full flex items-center justify-center p-4">
          <Link to="/by-appearance">
            <h1 className="text-4xl text-center">
              Browse witches by appearance
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
