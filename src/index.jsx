import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
<<<<<<<<< Temporary merge branch 1
=========

import { QueryClient, QueryClientProvider } from "react-query";
>>>>>>> 4bb246c1c15fd19bcd1b58e6d4189592a2576f13
import { RootProvider } from "./context/root.context";
import store from "./redux/store";
>>>>>>>>> Temporary merge branch 2

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RootProvider>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Provider>
  </RootProvider>
);
