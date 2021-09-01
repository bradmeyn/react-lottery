import "./styles.css";
import Lottery from "./components/Lottery";

export default function App() {
  return (
    <div className="App">
      <Lottery numBalls={6} maxNum={50} />
    </div>
  );
}
