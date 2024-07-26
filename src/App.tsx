import "./App.css";
import Particles from "./components/magicui/particles";

function App() {
  return (
    <div className="h-[100vh]">
      <div className="relative bg-neutral-950 flex h-full w-full flex-col items-center justify-center overflow-hidden md:shadow-xl">
        <span className="pointer-events-none bg-clip-text text-center text-8xl font-semibold leading-none text-transparent">
          Particles
        </span>
        <Particles
          className="absolute inset-0"
          quantity={100}
          ease={80}
          color="#ffffff"
          refresh
        />
      </div>
    </div>
  );
}

export default App;
