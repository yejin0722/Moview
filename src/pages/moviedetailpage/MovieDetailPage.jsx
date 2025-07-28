import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { BarLoader } from 'react-spinners';
import { useMovieTrailer } from '../../hook/useMovieTrailer';
import { useMovieDetail } from '../../hook/useMovieDetail';
import { useMovieReviews } from '../../hook/useMovieReviews';
import { useMovieCredits } from '../../hook/useMovieCredits';
import { useMovieRecommendations } from '../../hook/useMovieRecommendations';
import {
  Container,
  Row,
  Col,
  Badge,
  Button,
  Modal
} from 'react-bootstrap';
import {
  BsShieldCheck,
  BsExclamationTriangle,
  BsPlayCircle,
  BsClock,
  BsGlobeAmericas,
  BsTranslate
} from 'react-icons/bs';

const MovieDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useMovieDetail(id);
  /* 리뷰 가져오기 */
  const { data: reviewsData } = useMovieReviews(id);
  /* 크레딧 가져오기 */
  const { data: creditsData } = useMovieCredits(id);
  /* 트레일러 가져오기 */
  const { data: trailerData } = useMovieTrailer(id);
  const { data: recommendData } = useMovieRecommendations(id);
  const [currentPage, setCurrentPage] = useState(1);
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (isLoading) return <h2><BarLoader className="loader" /></h2>;
  if (isError) return <h2>{error.message}</h2>;

  const movie = data?.data;
  const trailer = trailerData?.data?.results?.find(
    (vid) => vid.type === 'Trailer' && vid.site === 'YouTube'
  );

  const backdropStyle = {
    backgroundImage: `url(https://media.themoviedb.org/t/p/w1280${movie.backdrop_path})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    position: 'relative',
  };

  return (
    <div>
      <div className="movie-detail-back" style={backdropStyle}>
        <Container>
          <Row className="align-items-center">
            <Col sm={4}>
              <img
                src={`https://media.themoviedb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="img-fluid rounded shadow"
              />
            </Col>
            <Col sm={8} className='ml-5'>
              <h2 className="mb-2">{movie.title}</h2>
              <p>개봉일: {movie.release_date}</p>
              <p>{movie.overview}</p>
              <p>
                {movie.adult ? (
                  <span><BsExclamationTriangle className="me-2" />성인 관람가</span>
                ) : (
                  <span><BsShieldCheck className="me-2" />전체 관람가</span>
                )}
              </p>
              <div className="mb-2">
                <strong>평점:</strong>
                <Badge bg={movie.vote_average >= 7 ? 'success' : 'warning'} className="ms-2">
                  {movie.vote_average.toFixed(1)}
                </Badge>
              </div>
              <div className="mb-2">
                <strong>장르:</strong>{' '}
                {movie.genres?.map((g) => g.name).join(', ')}
              </div>
              <div className="mb-2">
                <strong><BsClock className="me-2" />러닝타임:</strong> {movie.runtime}분
              </div>
              <div className="mb-2">
                <strong><BsGlobeAmericas className="me-2" />국가:</strong>{' '}
                {movie.production_countries?.map((c) => c.name).join(', ')}
              </div>
              <div className="mb-2">
                <strong><BsTranslate className="me-2" />언어:</strong> {movie.original_language?.toUpperCase()}
              </div>
              <div className="mt-4">
                {trailer ? (
                  <Button variant="danger" onClick={handleShow}>
                    <BsPlayCircle className="me-2" />
                    예고편 보기
                  </Button>
                ) : (
                  <p><BsPlayCircle className="me-2" />예고편이 제공되지 않습니다.</p>
                )}
              </div>
            </Col>
          </Row>
        </Container>

        <Modal show={show} onHide={handleClose} size="lg" centered>
          <Modal.Header closeButton>
            <Modal.Title>{movie.title} - 예고편</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {trailer ? (
              <div className="ratio ratio-16x9">
                <iframe
                  src={`https://www.youtube.com/embed/${trailer.key}`}
                  title="YouTube trailer"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <p>예고편을 불러올 수 없습니다.</p>
            )}
          </Modal.Body>
        </Modal>
      </div>
      <Container className='title'>
      <h2>제작/출연</h2>
      <p>{movie.title}의 출연진</p>
      </Container>
      {creditsData?.data?.cast?.length > 0 && (
        <Container className="movie-cast mt-5">
          <h4 className="mb-4">제작진</h4>
          <Row>
            {creditsData.data.crew.slice(0, 4).map((director) => (
              <Col key={director.id} xs={6} sm={4} md={2} className="mb-4 text-center">
                <img
                  src={
                    director.profile_path
                      ? `https://media.themoviedb.org/t/p/w185${director.profile_path}`
                      : 'https://ssl.pstatic.net/sstatic/keypage/outside/scui/cs_common_module/im/no_img_people_206x256_v2.png'
                  }
                  alt={director.name}
                  className="img-fluid rounded shadow-sm"
                  style={{ width: '200px', objectFit: 'cover', background: "#fff" }}
                />
                <div className="mt-2">
                  <strong>{director.name}</strong>
                  <br />
                  <small  style={{color: "#ddd"}}>({director.department})</small>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      )}
      {creditsData?.data?.cast?.length > 0 && (
        <Container className="movie-cast mt-5">
          <h4 className="mb-4">출연배우</h4>
          <Row>
            {creditsData.data.cast.slice(0, 6).map((actor) => (
              <Col key={actor.id} xs={6} sm={4} md={2} className="mb-4 text-center">
                <img
                  src={
                    actor.profile_path
                      ? `https://media.themoviedb.org/t/p/w185${actor.profile_path}`
                      : 'https://ssl.pstatic.net/sstatic/keypage/outside/scui/cs_common_module/im/no_img_people_206x256_v2.png'
                  }
                  alt={actor.name}
                  className="img-fluid rounded shadow-sm"
                  style={{ width: '200px', objectFit: 'cover', background: "#fff" }}
                />
                <div className="mt-2">
                  <strong>{actor.name}</strong>
                  <br />
                  <small style={{color: "#ddd"}}>({actor.character})</small>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      )}
      <Container className='title'>
      <h2>Review</h2>
      <p>영화 감상평을 남겨주세요</p>
      </Container>
      {reviewsData?.data?.results?.length > 0 && (
        <Container className="movie-reviews mt-5">
          <h4 className="mb-4">리뷰</h4>
          {reviewsData.data.results.map((review) => (
            <div key={review.id} className="p-3 mb-3 border rounded bg-light text-dark">
              <h6 className="mb-1">{review.author}</h6>
              <small className="text-muted">작성일: {review.created_at.slice(0, 10)}</small>
              <p className="mt-2">
                {review.content.length > 300 ? review.content.slice(0, 300) + '...' : review.content}
              </p>
            </div>
          ))}
        </Container>
      )}
      {recommendData?.data?.results?.length > 0 && (
        <Container className="movie-recommendations mt-5">
          <h4 className="mb-4">추천 영화</h4>
          <Row>
          {recommendData.data.results.slice(0, 3).map((rec) => (
              <Col key={rec.id} xs={6} sm={4} md={3} className="mb-4 text-center">
                <img
                  src={
                    rec.poster_path
                      ? `https://image.tmdb.org/t/p/w200${rec.poster_path}`
                      : 'https://via.placeholder.com/200x300?text=No+Image'
                  }
                  alt={rec.title}
                  className="img-fluid rounded shadow-sm"
                  style={{ width: '300px', objectFit: 'cover' }}
                />
                <div className="mt-2">
                  <strong>{rec.title}</strong>
                  <br />
                  <small style={{color: "#777"}}>{rec.release_date}</small>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </div>
  );
};

export default MovieDetailPage;
