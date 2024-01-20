import { RouterProvider } from "react-router-dom";
import { routes } from "./Router/routes";
import { Provider } from "react-redux";
import { store } from "./Global/Store";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={routes} />
      </Provider>
    </div>
  );
};

export default App;
