import Routes from "./routes";

import { StateProvider } from "./context/StateContext";
import reducer, { initialState } from "./context/StateReducer";

function App() {
  return (
    <>
      <StateProvider initialState={initialState} reducer={reducer}>
        <Routes />
      </StateProvider>
    </>
  );
}

export default App;
