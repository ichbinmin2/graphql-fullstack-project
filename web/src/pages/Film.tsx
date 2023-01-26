import { Box, Spinner, Text } from '@chakra-ui/react';
import React from 'react';
import { useParams } from 'react-router-dom';
import CommonLayout from '../components/CommonLayout';
import { useFilmQuery } from '../generated/graphql';

interface FilmPageParams {
  [key: string]: string | undefined; // 명시적 속성의 모든 타입을 가지고 있어야 함
  filmId: string;
}

function Film(): React.ReactElement {

  const {filmId} = useParams<FilmPageParams>();

  const { data, loading, error} = useFilmQuery({
    variables: { filmId : Number(filmId)}
  });

  return (
  <CommonLayout>
    {loading && <Spinner />}
    {error && <Text>페이지를 표시할 수 없습니다.</Text>}
    <Box><pre>{JSON.stringify(data, null, 2)}</pre></Box>
  </CommonLayout>);
}

export default Film;