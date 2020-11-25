import 'tailwindcss/tailwind.css';
import { FunctionalComponent, h } from 'preact';

const App: FunctionalComponent = () => {
    return (
        <div class="p-2">
            <h1 class="text-center text-5xl font-bold">
                Hello, World!
            </h1>
            <div class="pt-2">
                <button
                    class="
                        bg-blue-400 hover:bg-red-700
                        justify-center
                        rounded-lg shadow-md
                        py-2 px-4 te"
                >Say Hello</button>
            </div>
       </div>
    );
}

export default App;
