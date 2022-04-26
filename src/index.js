import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createClient, Provider } from "urql";

const API_URL =
  "https://api.thegraph.com/subgraphs/name/sarahzdev/crypto-coven-api";

const client = createClient({
  url: API_URL,
});

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider value={client}>
    <App tab="home" />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
