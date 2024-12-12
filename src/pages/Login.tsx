import styled from "styled-components";
import Wrap from "../components/Wrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { login } from "../api";

const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Contents = styled.div`
  width: 100%;
  height: 40vh;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  .heading {
    font-size: 25px;
    font-weight: 900;
  }
  form {
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    label {
      height: 25%;
      width: 65%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    button {
      margin-top: 10px;
      cursor: pointer;
    }
  }
  a{
    text-decoration: underline;
    color: #000;
  }
`;

const Login = (): JSX.Element => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<any>("");
  const {register, handleSubmit, reset, formState:{errors}} = useForm();

  const onSubmit = (data:any) =>{
    setUserName(data.userName);
    setPassword(data.password);
    reset();
  };

  useEffect(()=>{
    if(userName&&password) {
      (async()=>{
        try {
          const response = await login(userName, password);
          setMessage("로그인에 성공하셨습니다");
        } catch(error) {
          setMessage("아이다나 비밀번호가 틀렸습니다.");
        }
      })()
    }
  }, [userName, password]);
  console.log(message);

  return (
    <Wrap>
      <Container>
        <Contents>
          <div className="heading">로그인</div>
          {message && (
            <div style={{ 
              color: message === "로그인에 성공하셨습니다" ? "green" : "red",
              marginBottom: "10px",
              textAlign: "center"
            }}>
              {message}
            </div>
          )}
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>
              아이디
              <input type="text" {...register("userName", {required:"아이디는 필수입니다."})}/>
            </label>
            <label>
              비밀전호
              <input type="password" {...register("password", {required:"비밀번호호는 필수입니다."})}/>
            </label>
            <button>로그인</button>
          </form>
          <div className="accession_wrap">
            <div className="accession">
              <Link to={"/accession"}>회원가입</Link>
            </div>
          </div>
        </Contents>
      </Container>
    </Wrap>
  );
};
export default Login;
