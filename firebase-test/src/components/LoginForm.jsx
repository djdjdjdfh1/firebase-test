import React, { useState } from 'react'

import { auth } from '../database/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import LoginComp from '../features/LoginComp';
import JoinComp from '../features/JoinComp';

export default function LoginForm() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(null);

    const onEmailLogin = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            setUser(
                {
                    uid : user.uid,
                    email : user.email,
                    displayName : user.displayName,
                }
            )
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            if(errorCode =="auth/email-already-in-use" ) {
                alert('동일한 이메일이 있습니다');
            }
            else if (errorCode == "auth/weak-password") {
                alert('비밀번호를 6자리이상 적어주세요')
            }
        });
      }

      const onClickLogin = () => {
        // async와 await 를 이용하여 파이어베이스메소드 사용
        // 비동기함수로 만들기 
        async function getLogin(){
            // 오류가 날 가능성이 있는 모든 코드를 try 에작성
            try{
                const userCredential = await signInWithEmailAndPassword(auth, email,password);
                const user= userCredential.user;
                console.log(user);
                setUser(
                    {
                        uid : user.uid,
                        email : user.email,
                        displayName : user.displayName,
                    }
                )
                navigate('/main');
            }
            catch(error) {
                console.log(error.code, error.message)
                if ( error.code == "auth/user-not-found" || 
                        error.code == "auth/wrong-password" ) {
                        navigate('/');
                }
            }
        }
        getLogin();
      }


  return (
    <div>
        <h3>로그인 또는 회원가입페이지 입니다</h3>
        <form>
            <label htmlFor="">이메일</label>
            <input type="email" required
                onChange={(e)=>{setEmail(e.target.value)}}
                value={email}
            />
            <br />
            <label htmlFor="">비밀번호</label>
            <input type="password" required
                onChange={(e)=>{setPassword(e.target.value)}}
                value={password}
            />
            <br />
            <JoinComp onClick={ onEmailLogin }>회원가입</JoinComp>
            <LoginComp onClick={ onClickLogin }>로그인</LoginComp>
        </form>
    </div>
  )
}
