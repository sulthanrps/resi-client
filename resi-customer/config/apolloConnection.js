import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    // uri : 'https://orchestrator-resi.herokuapp.com/',
    uri : 'https://orchetrator-resi.herokuapp.com/',
    cache : new InMemoryCache()
})

export default client