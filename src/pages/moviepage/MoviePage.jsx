import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { usePopularMoviesQuery } from '../../hook/usePopularMoviesQuery';
import { useSearchMovieQuery } from '../../hook/useSearchMovieQuery';
import { Container, Row, Col, Spinner, Alert } from 'react-bootstrap';
import MovieCard from '../homepage/MovieCard/MovieCard';

const MoviePage = () => {
  //1. 키워드 가져오기
  const [query] = useSearchParams();
  const keyword = query.get("keyword");
  //4. 컴포넌트 렌더링되면 인기영화 보여주기
  useEffect(()=>{
    if(popularData){
      console.log('무비 페이지에서 인기영화 확인',popularData);
    }
  })
  //5. 경고창에 띄워주기
  useEffect(()=>{
    if(keyword){

    }
  })

  // 2. keyword 없으면 인기 영화 데이터
  const { data: popularData, isLoading: isPopularLoading, isError: isPopularError, error: popularError } = usePopularMoviesQuery({
    enabled: !keyword, // keyword 없을 때만 실행
  });

  // 3. keyword가 있으면 검색 결과
  const { data: searchData, isLoading: isSearchLoading, isError: isSearchError, error: searchError } = useSearchMovieQuery(keyword, {
    enabled: !!keyword, // keyword 있을 때만 실행
  });

  // 데이터 선택
  const movieList = keyword ? searchData?.data?.results : popularData?.data?.results;

  if (isSearchLoading || isPopularLoading) return <Spinner animation="border" variant="primary" />;
  if (isSearchError) return <Alert variant="danger">{searchError.message}</Alert>;
  if (isPopularError) return <Alert variant="danger">{popularError.message}</Alert>;

  return (
    <Container className="my-5">
      <h3 className="mb-4">
        {keyword ? `"${keyword}" 검색 결과` : '인기 영화'}
      </h3>
      <Row>
        {movieList?.length > 0 ? (
          movieList.map((movie) => (
            <Col key={movie.id} xs={6} md={4} lg={3} className="mb-4">
              <MovieCard movie={movie} />
            </Col>
          ))
        ) : (
          <p>결과가 없습니다.</p>
        )}
      </Row>
    </Container>
  );
};

export default MoviePage;
