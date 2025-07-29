import React, { useState } from 'react'
import { Container } from 'react-bootstrap'

const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('아이디:', id);
    console.log('비밀번호:', password);

    if (id === 'abc' && password === '123') {
      alert('로그인 성공!');
    } else {
      alert('아이디 또는 비밀번호가 올바르지 않습니다.');
    }
  };
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
          <button className='login-btn' onClick={handleLogin}>LOGIN</button>
          <button className='kakao-login-btn' onClick={() => alert('카카오 로그인 기능은 현재 구현중입니다.')}>
          <img src="https://wiki1.kr/images/thumb/7/7f/%E3%88%9C%EC%B9%B4%EC%B9%B4%EC%98%A4_%EB%A1%9C%EA%B3%A0.png/200px-%E3%88%9C%EC%B9%B4%EC%B9%B4%EC%98%A4_%EB%A1%9C%EA%B3%A0.png" alt="" width={25} />
          카카오 계정으로 로그인
        </button>
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