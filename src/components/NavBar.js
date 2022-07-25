import { useRouter } from "next/router";
import styled from "styled-components";
import { AiOutlineUser } from "react-icons/ai";
const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  height: 100px;
  align-items: center;
  width: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 0px 100px;
  justify-content: space-between;
  img {
    width: 100px;
  }
  .right {
    display: flex;
    column-gap: 10px;
    align-items: center;
  }
  @media screen and (max-width: 1024px) {
    padding: 0px 20px;
  }
`;

export default function NavBar() {
  const router = useRouter();
  // console.log(router);
  return (
    <Nav>
      <img src="/vercel.svg" />
      <div className="right">
        <span>안녕하세요, 김민수님</span>
        <AiOutlineUser size={24} />
      </div>
    </Nav>
  );
}
