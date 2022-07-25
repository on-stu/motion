import NavBar from "./NavBar";
import styled from "styled-components";
import { useRouter } from "next/router";
import colors from "../lib/colors.json";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.gray};
  .innerContainer {
    min-height: 100vh;
    width: 100%;
    height: 100%;

    ${(props) => props.max === "false" && "max-width: 1024px;"}
  }
  .footer {
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 10px;
    color: gray;
  }
  .button {
    color: gray;
    cursor: pointer;
  }
`;

export default function Layout({ children }) {
  const router = useRouter();
  //console.log(router.pathname);
  return (
    <Container max={"false"}>
      {/* {router.pathname !== "/" && !router.pathname.includes("editor") && (
        // <NavBar />
      )} */}
      <div className="innerContainer">{children}</div>
      <div className="footer">
        <span className="button">서비스소개</span>
        <span>|</span>
        <span className="button">개인정보처리방침</span>
        <span>|</span>
        <span className="button">회사소개</span>
        <span>|</span>
        <span className="button">문의하기</span>
        <span>|</span>
        <span className="button">&copy; TutoReal</span>
      </div>
    </Container>
  );
}
