import { gql, useQuery } from "@apollo/client";
import React from "react";

const FILMS_QUERY = gql`
  query ExampleQuery {
    films {
      id
      title
      subTitle
    }
  }
`;

export default function FilmList(): JSX.Element {
  const { data, loading, error} = useQuery(FILMS_QUERY);

  if(loading) return <p> ... loading </p>;
  if(error) return <p> {error.message}</p>;

  return <pre>{JSON.stringify(data, null, 2)}</pre>
}