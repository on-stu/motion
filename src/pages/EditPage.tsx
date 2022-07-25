import { useState, useEffect, ChangeEvent, KeyboardEvent } from "react";
import styled from "styled-components";
import { getCursorXY } from "../functions/getCursorXY";
import { checkKor, getConstantVowel } from "../functions/getConstantVowel";
import { getSimilarAttribute } from "../functions/getSimilarAttribute";
import lineTypes from "../lib/lineTypes.json";
import CommandMenu from "../components/CommandMenu";
import Line from "../components/Line";

const Container = styled.div`
  width: 100%;
  nav {
    width: 100%;
    display: flex;
    box-sizing: border-box;
    padding: 20px;
    position: fixed;
    align-items: center;
    left: 0;
    top: 0;
    height: 50px;
    background-color: tomato;
  }
  .EditPage {
    width: 100%;
    margin-top: 50px;
    box-sizing: border-box;
    padding: 32px;
    display: flex;
    flex-direction: column;
    row-gap: 8px;
  }
`;

const allKor = lineTypes.map((line) => line.kor);
const allEng = lineTypes.map((line) => line.eng);

const findCommand = (command: string) => {
  const korIndex = allKor.findIndex((elm) => elm === command);
  const engIndex = allEng.findIndex((elm) => elm === command);
  if (korIndex !== -1) {
    return allEng[korIndex];
  } else if (engIndex !== -1) {
    return allEng[engIndex];
  }
  return false;
};

export default function EditPage() {
  const initialLine = {
    type: "text",
    data: "",
  };
  const [data, setData] = useState([initialLine]);
  const [currentPosition, setCurrentPosition] = useState({ top: 0, left: 0 }); // command box의 position 관리
  const [currentLine, setCurrentLine] = useState(0); // 현재 line index 저장
  const [commandVisible, setCommandVisible] = useState(false); // commandbox 보일지 말지
  const [currentCommandPos, setCurrentCommandPos] = useState(0); // command box 위치 산출할때 selectionEnd 저장
  const [command, setCommand] = useState(""); // command 칠때 쓰는거
  const [options, setOptions] = useState<string[]>([]); //command box에 들어갈 options

  useEffect(() => {
    setOptions([]);
  }, [commandVisible]);

  const onEnter = () => {
    if (!commandVisible) {
      setData((prev) => [...prev, initialLine]);
    } else {
      const type = findCommand(command);
      if (type) {
        const newLine = {
          type,
          data: "",
        };
        if (currentCommandPos !== 0) {
          const currentChange = data.map((d, i) =>
            i === currentLine
              ? { type: d.type, data: d.data.substring(0, currentCommandPos) }
              : d
          );
          setData(currentChange);
          setData((prev) => [...prev, newLine]);
        } else {
          const currentChange = data.map((d, i) =>
            i === currentLine ? newLine : d
          );
          setData(currentChange);
        }
      }
      setCommandVisible(false);
    }
  };

  const onSpace = () => {
    if (commandVisible) {
      setCommand("");
      setCommandVisible(false);
    }
  };

  const onCommand = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { selectionEnd },
    } = e;
    const { x, y } = getCursorXY(e.target, selectionEnd);
    if (selectionEnd !== null) {
      setCurrentCommandPos(selectionEnd);
    }
    const temp = e.target.style.fontSize;
    const fontSize = temp.substr(0, temp.length - 2);
    const fontNum = Number(fontSize);
    setCurrentPosition({ top: y + fontNum + 8, left: x });
    setCommandVisible(true);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    if (commandVisible) {
      const {
        target: { value },
      } = e;
      const newData = data.map((item, i) =>
        i === index ? { type: item.type, data: value } : item
      );
      setData(newData);
      const temp = value.slice(currentCommandPos + 1);
      if (temp.length >= 0) {
        const tempArray = String(temp)?.split("");
        const CVArray = tempArray?.map((each) =>
          checkKor(each) ? getConstantVowel(each) : each
        );
        const CVString = CVArray.join("");
        const tempOptions = getSimilarAttribute(CVString);
        setOptions(tempOptions);
      }
      setCommand(temp);
      if (value.length === currentCommandPos) {
        setCommandVisible(false);
      }
    } else {
      const newData = data.map((item, i) =>
        i === index ? { type: item.type, data: e.target.value } : item
      );
      setData(newData);
    }
  };

  const onDelete = (e: ChangeEvent<HTMLInputElement>) => {
    if (currentLine > 0 && data[currentLine].data.length === 0) {
      e.preventDefault();
      const newData = data.filter((_, i) => i !== currentLine);
      setData(newData);
      setCurrentLine((prev) => prev - 1);
    }
  };

  const onArrow = (keyEvent: KeyboardEvent<HTMLInputElement>) => {
    const key = keyEvent.key;
    if (key === "ArrowUp" && currentLine > 0) {
      setCurrentLine((prev) => prev - 1);
    } else if (key === "ArrowDown" && currentLine < data.length - 1) {
      setCurrentLine((prev) => prev + 1);
    }
  };

  return (
    <>
      <CommandMenu
        visible={commandVisible}
        top={currentPosition.top}
        left={currentPosition.left}
        options={options}
        command={command}
        setCommand={setCommand}
      />

      <Container>
        <nav>title</nav>
        <div className="EditPage">
          {data.map((line, i) => (
            <Line
              key={i}
              i={i}
              type={line.type}
              data={line.data}
              toFocus={currentLine === i ? true : false}
              onEnter={onEnter}
              onCommand={onCommand}
              onDelete={onDelete}
              autoFocus={i === data.length - 1 && true}
              onFocus={() => setCurrentLine(i)}
              onChange={onChange}
              onBlur={() => setCommandVisible(false)}
              onArrow={onArrow}
              onSpace={onSpace}
            />
          ))}
        </div>
      </Container>
    </>
  );
}
