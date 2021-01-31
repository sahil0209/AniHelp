import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const client = new ApolloClient({
	uri: "https://anihelp-server.herokuapp.com/graphql",
	cache: new InMemoryCache(),
});

ReactDOM.render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>,
	document.getElementById("root")
);
reportWebVitals();
