import * as React from "react"
import { ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client"
import {
  ChakraProvider,
  Box,
  Text,
  theme,
} from "@chakra-ui/react"
import FilmList from "./components/film/FilmList"


const apolloClient = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
})

export const App: React.FC = () => (
  <ApolloProvider client={apolloClient} >
  <ChakraProvider theme={theme}>
   <FilmList />
  </ChakraProvider>
  </ApolloProvider>
)
