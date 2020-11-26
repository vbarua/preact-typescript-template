import "tailwindcss/tailwind.css"
import { h, FunctionalComponent } from "preact"

import { Counter } from "./components/Counter"

const App: FunctionalComponent = () => {
  return (
    <div className="p-2">
      <h1 className="text-center text-5xl font-bold">
        Hello, World!
      </h1>
      <ul className="pt-4">
        <li className="pt-2"><Counter /></li>
        <li className="pt-2"><Counter /></li>
        <li className="pt-2"><Counter /></li>
      </ul>
    </div>
  )
}

export default App
