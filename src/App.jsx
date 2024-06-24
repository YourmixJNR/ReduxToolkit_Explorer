import { BrowserRouter } from "react-router-dom";
import RootRouter from "./routes";
import { PersistGate } from "redux-persist/integration/react";
// Css
import "./App.css";
import { Provider } from "react-redux";
import store, { persistor } from "./store";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <RootRouter />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
