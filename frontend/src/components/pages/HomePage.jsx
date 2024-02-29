import Featured from "../shared/Featured";
import List from "../shared/List";
import Navbar from "../shared/Navbar";
import "./homepage.scss";

const HomePage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <Featured />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
};

export default HomePage;
