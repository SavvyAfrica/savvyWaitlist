import type { NextPage } from "next";
import Header from "../features/general/header/header";

const Home: NextPage = () => {
  return (
    <div className="w-full border-2">
      <Header />
    </div>
  );
};

export default Home;
