import { useRouter } from "next/router";
import styled from "styled-components";
import colors from "../lib/colors.json";
import { BsBook } from "react-icons/bs";

const Container = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  box-sizing: border-box;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;

  .title {
    font-weight: 600;
    font-size: 20px;
  }

  .bottom {
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    right: 0;
    padding: 5px 10px;
  }

  .more {
    cursor: pointer;
    color: gray;
  }

  ul {
    list-style: none;
    width: 100%;
    height: 100%;
  }

  li {
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    column-gap: 10px;
    cursor: pointer;
  }
`;

export default function Card({ title, list }) {
  const router = useRouter();

  return (
    <>
      <Container>
        <div className="top">
          <span className="title">{title}</span>
        </div>
        <div className="list">
          <ul>
            {list ? (
              list?.map((item, i) => (
                <li key={i}>
                  <BsBook size={24} />
                  {item?.title}
                </li>
              ))
            ) : (
              <li>이곳에 표시됩니다.</li>
            )}
          </ul>
        </div>
        <div className="bottom">
          <span
            className="more"
            onClick={() => router.push("/editor/1010?title=hello")}
          >
            더보기
          </span>
        </div>
      </Container>
    </>
  );
}
