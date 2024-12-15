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
  background: var(--background-gradient);
`;

const Contents = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 20px;
  padding: 40px 30px;
  background: var(--background-light);
  border-radius: 20px;
  box-shadow: 0 10px 25px var(--shadow-color);
  backdrop-filter: blur(10px);

  @media (max-width: 1280px) {
    max-width: 380px;
    padding: 35px 25px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 30px 20px;
  }

  @media (max-width: 480px) {
    padding: 25px 15px;
  }

  .heading {
    font-size: 28px;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 30px;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 24px;
      margin-bottom: 25px;
    }

    @media (max-width: 480px) {
      font-size: 22px;
      margin-bottom: 20px;
    }
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (max-width: 480px) {
      gap: 15px;
    }

    label {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 8px;
      font-size: 14px;
      color: var(--text-secondary);
      font-weight: 500;

      @media (max-width: 480px) {
        gap: 6px;
        font-size: 13px;
      }

      input {
        padding: 12px 16px;
        border: 2px solid var(--border-color);
        border-radius: 12px;
        font-size: 16px;
        transition: all 0.2s ease;

        @media (max-width: 768px) {
          padding: 10px 14px;
          font-size: 15px;
        }

        @media (max-width: 480px) {
          padding: 8px 12px;
          font-size: 14px;
        }

        &:focus {
          outline: none;
          border-color: var(--primary-color);
          box-shadow: 0 0 0 4px var(--focus-shadow);
        }
      }
    }

    button {
      margin-top: 10px;
      padding: 14px;
      border: none;
      border-radius: 12px;
      background: var(--primary-gradient);
      color: white;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: transform 0.2s ease, box-shadow 0.2s ease;

      @media (max-width: 768px) {
        padding: 12px;
        font-size: 15px;
      }

      @media (max-width: 480px) {
        padding: 10px;
        font-size: 14px;
      }

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px var(--shadow-color);
      }

      &:active {
        transform: translateY(0);
      }
    }
  }

  a {
    display: block;
    text-align: center;
    margin-top: 20px;
    color: var(--primary-color);
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    transition: color 0.2s ease;

    @media (max-width: 480px) {
      margin-top: 15px;
      font-size: 13px;
    }

    &:hover {
      color: var(--secondary-color);
    }
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
