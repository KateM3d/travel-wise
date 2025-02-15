import { Link } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import styles from "./Home.module.css";

const Home: React.FC = () => {
  return (
    <main className={styles.homepage}>
      <Nav />
      <section>
        <h1>
          You travel the world.
          <br />
          TravelWise keeps track of your adventures.
        </h1>
        <h2>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>
        <Link to="/app" className="cta">
          Start tracking now
        </Link>
      </section>
    </main>
  );
};

export default Home;
