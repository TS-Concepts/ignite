import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4orrxnk0ti401ywet526fd4/master',
    cache: new InMemoryCache()
})