import React from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'

const MyPage = () => {
  return (
    <div>
      <Container style={{textAlign: "center", marginTop: "50px"}}>
        <h2 className='strong'>Moview</h2>
        <p>Profile</p>
        <Row className="align-items-center">
          <Col md={6}>
            <p><strong className='strong'>unknown</strong> 님, 반갑습니다!</p>
            <img src="/images/avatar.jpg" alt="avatar" style={{ width: '200px', borderRadius: '50%' }} />
            <div className="mt-3">
              <p className='mypageLoginBtn'>로그인 하고, 더 많은 기능을 이용해보세요!</p>
              <Button variant="success" style={{marginBottom: "20px"}}>프로필 수정</Button>
            </div>
          </Col>
          <Col md={6} style={{ padding: "50px 0", borderRadius: "10px"}}>
            <h4>내 평가 기록</h4>
            <div className='mypage-rating-wrap'>
              <div className="mypage-rating">
                <p>🎬 평균 영화점수</p>
                <strong>0%</strong>
              </div>
              <div className="mypage-rating">
                <p>📺 평균 리뷰점수</p>
                <strong>0%</strong>
              </div>
            </div>
          </Col>
        </Row>
        <div className='mypage-detail'>
          <h4>가장 많이 감상한 장르</h4>
          <p>아직 감상한 영화가 없습니다. 로그인하고 영화를 감상해보세요.</p>
          <h4>관심 목록</h4>
          <p>관심목록에 등록된 영화가 없습니다.</p>
          <h4>최근 리뷰</h4>
          <p>작성한 리뷰가 없습니다.</p>
          <h4>최근 감상 목록</h4>
          <p>최근에 감상한 영화가 없습니다.</p>
        </div>
      </Container>
    </div>
  )
}

export default MyPage
