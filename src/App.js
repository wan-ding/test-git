import CircleComponents from "./components/CircleComponents";
import MainCircle from "./components/MainCircle";
import SquareComponents from "./components/SquareComponents";
import styles from "./components/menu.module.css";

export default function App() {
  return (
    <div className="flex flex-col">
      <header>
      <div>
      <div className="mb-4">
        <CircleComponents />
      </div>
      </div>
      </header>

      <main>
      <div>
      <div>
        <SquareComponents />
      </div>
      </div>
      </main>

    </div>

  );
}
