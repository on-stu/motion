import { useRouter } from "next/router";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 10px;
  form {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
  }
`;

export default function Login() {
  const router = useRouter();
  const onSubmit = (e) => {
    e.preventDefault();
    router.push("/dashboard");
  };
  return (
    <Container>
      <div>TutoReal</div>
      <form onSubmit={onSubmit}>
        <input placeholder="ID" />
        <input placeholder="PASSWORD" />
        <button>회원가입</button>
        <button>로그인</button>
        <button>카카오 로그인</button>
      </form>
    </Container>
  );
}
