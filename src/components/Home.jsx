import "../styles/home.css";
import { GiBookshelf } from "react-icons/gi";
import Header from "./Header";

function Home() {
  return (
    <section className="home">
      {/* <Header /> */}
      <div className="container">
        <div className="up">
          <GiBookshelf className="logo" />
          <h1>Your Online Bookshelf</h1>
        </div>
        <div className="down">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
            blanditiis sunt unde vero magni, quod dicta ad omnis sed! Velit, et.
            Non, magnam dicta. Quaerat numquam expedita id possimus minus!
          </p>
          <button>Start</button>
        </div>
      </div>
    </section>
  );
}

export default Home;
