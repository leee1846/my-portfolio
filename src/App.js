import PageRouter from "./pages/PageRouter";
import { GlobalStyle } from "./style/GlobalStyle";
import { Provider } from "react-redux";
import { store } from "./store/cartoonReducer";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <PageRouter />
    </Provider>
  );
}

export default App;
