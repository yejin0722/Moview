import React from 'react'

import Banner from './Banner/Banner'
import PopularMovieSlide from './PopularMovieSlide/PopularMovieSlide'
import TopRatedMovieSlide from './TopRatedMovieSlide/TopRatedMovieSlide'
import UpcomingMovieSlide from './UpcomingMovieSlide/UpcomingMovieSlide'
import NowPlayingMovieSlide from './NowPlayingMovieSlide/NowPlayingMovieSlide'
import { Container } from 'react-bootstrap'
const HomePage = () => {
  const movieSections =
[{
id:'nowPlaying',
title: "현재 상영중인 영화",
description:"지금 극장에서 만나보세요",
component:<NowPlayingMovieSlide/>
},{
id:'popular',
title: "인기영화",
description:"인기있는 영화를 추천합니다.",
component:<PopularMovieSlide/>
},{
id:'topRated',
title: "평점 높은 영화",
description:"많은 사람들에게 사랑받은  영화입니다..",
component:<TopRatedMovieSlide/>
},{
id:'upcomming',
title: "상영 예정 영화",
description:"곧 개봉할 영화들을 소개합니다.",
component:<UpcomingMovieSlide/>
}]
  return (
    <div>
      {/* <Banner></Banner> */}
    <Container>
    {movieSections.map(section=>(
    <div key={section.id}>
      <h2>{section.title}</h2>
      <p>{section.description}</p>
      {section.component}
    </div>
    ))}
    </Container>
    </div>
  )
}

export default HomePage