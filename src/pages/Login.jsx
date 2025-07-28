import React from 'react'
import { Container,Button } from 'react-bootstrap'

const Login = () => {
  return (
    <div>
      <Container>
        <h2 className='moview'>Moview</h2>
        <h5 className='moview-login'>로그인</h5>
        <div className='moview-form'>
          <div className='moview-title'>아이디</div>
          <input type="id" placeholder='아이디를 입력하세요.' />
          <div className='moview-title'>비밀번호</div>
          <input type="password" placeholder='비밀번호를 입력하세요.' />
          <p style={{marginTop:"10px"}}>아이디 · 비밀번호 찾기</p>
          <button className='login-btn'>LOGIN</button>
          <button className='kakao-login-btn'><img src="https://wiki1.kr/images/thumb/7/7f/%E3%88%9C%EC%B9%B4%EC%B9%B4%EC%98%A4_%EB%A1%9C%EA%B3%A0.png/200px-%E3%88%9C%EC%B9%B4%EC%B9%B4%EC%98%A4_%EB%A1%9C%EA%B3%A0.png" alt="" width={25} /> 카카오 계정으로 로그인</button>
        </div>
        <div className='login-sns'>
          <i className="bi bi-google"></i>
          <i className="bi bi-instagram"></i>
          <i className="bi bi-twitter-x"></i>
          <i className="bi bi-facebook"></i>
        </div>
        <div className='moview'>
          <p style={{color: "#fff", marginTop: "-20px"}}>Moview 계정이 없다면?</p>
          <p style={{color: "#DC3545"}}>신규 회원가입 하러가기</p>
        </div>
      </Container>
    </div>
  )
}

export default Login