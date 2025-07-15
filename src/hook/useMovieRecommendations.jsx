import { useQuery } from '@tanstack/react-query';
import api from '../utils/api'; // 공통 axios 인스턴스 사용

const fetchMovieRecommendations = (movieId) => {
  return api.get(`/movie/${movieId}/recommendations`, {
    params: {
      language: 'ko-KR',
    },
  });
};

export const useMovieRecommendations = (movieId) => {
  return useQuery({
    queryKey: ['movie-recommendations', movieId],
    queryFn: () => fetchMovieRecommendations(movieId),
    enabled: !!movieId,
  });
};