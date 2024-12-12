import styled from "styled-components";
import Wrap from "../components/Wrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { postRegister } from "../api";

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

const Accession = ():JSX.Element => {

  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [massage, setMassage] = useState<any>("");


  const {register, handleSubmit, reset, formState:{errors},} = useForm();

  const onSubmit = (data:any) => {
    setUserName(data.userName);
    setPassword(data.password);
    reset();
  };

  useEffect(()=>{
    if (userName&&password) {
      (async()=> {
        try {
          const response = await postRegister(userName, password);
          setMassage(response);
        } catch(error) {
          setMassage("fail");
        }
      })()
    }
  }, [userName&&password]);

  console.log(massage);

  return <Wrap>
    <Container>
        <Contents>
          <div className="heading">회원가입</div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>
              아이디
              <input type="text" {...register("userName", {required:"아이디는 필수 입니다"})}/>
            </label>
            <label>
              비밀전호
              <input type="password" {...register("password", {required:"비밀전호는 필수 입니다"})}/>
            </label>
            <button>회원가입</button>
          </form>
          <div className="accession_wrap">
            <div className="accession">
              <Link to={"/"}>로그인</Link>
            </div>
          </div>
        </Contents>
      </Container>
  </Wrap>;
};

export default Accession;