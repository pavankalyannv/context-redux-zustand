import "./App.css";
import ZustandComponent from "./components/zustand/ZustandComponent";
import ContextComponent from "./components/context/ContextComponent";
import ReduxComponent from "./components/redux/ReduxComponent";

function App() {
  return (
    <div className="flex justify-between w-[100%] h-[100%]">
      <ContextComponent />
      <ZustandComponent />
      <ReduxComponent />
    </div>
  );
}

export default App;
