import React from 'react'
import { Button, Container } from 'react-bootstrap'

const NotFoundPage = () => {

  return (
    <div style={{marginTop: "55px",}}>
      <Container>
        <div className='wrap-404'>
          <h1 className='text404'>404</h1>
          <div className="img404">
            <img src="/images/404page.png" alt="404이미지" />
          </div>
          <div className="desc404">
            <p>이런... 찾으시는 페이지가 없습니다</p>
            <p style={{fontSize: "20px", fontWeight: "100"}}>홈으로 돌아가거나 다른 길을 찾아보세요.</p>
          </div>
          <Button variant="warning">Go Home</Button>
        </div>
      </Container>
    </div>
  )
}

export default NotFoundPage