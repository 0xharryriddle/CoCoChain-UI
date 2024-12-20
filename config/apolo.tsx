import { ApolloClient, InMemoryCache } from "@apollo/client"
import * as constants from "@/utils/constants.util"

export const client = new ApolloClient({
    uri: constants.SUBGRAPH_ENDPOINT,
    cache: new InMemoryCache()
})