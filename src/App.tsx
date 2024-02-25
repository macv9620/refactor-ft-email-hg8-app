import Routes from "./routes";

import { StateProvider } from "./context/StateContext";
import reducer, { initialState } from "./context/StateReducer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <StateProvider initialState={initialState} reducer={reducer}>
        <Routes />
        <ToastContainer />
      </StateProvider>
    </>
  );
}

export default App;
