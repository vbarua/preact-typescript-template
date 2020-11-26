import "tailwindcss/tailwind.css";
import { h, FunctionalComponent } from "preact";

import { Counter } from "./components/Counter";

const App: FunctionalComponent = () => {
  return (
      <div class="p-2">
          <h1 class="text-center text-5xl font-bold">
              Hello, World!
          </h1>
          <ul class="pt-4">
              <li class="pt-2"><Counter /></li>
              <li class="pt-2"><Counter /></li>
              <li class="pt-2"><Counter /></li>
          </ul>
      </div>
  );
}

export default App;
