import { ApolloClient, InMemoryCache } from "@apollo/client";

export const useApolloClient = () => {
    const client = new ApolloClient({
        uri: "https://graphql-pokemon2.vercel.app",
        cache: new InMemoryCache(),
    });
    return client
}