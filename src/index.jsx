import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import App from "./App";
import { RootProvider } from "./context/root.context";
import store from "./redux/store";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <RootProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </RootProvider>
  </QueryClientProvider>
);
