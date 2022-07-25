import styled from "styled-components";
import { useRef, useEffect } from "react";
const Input = styled.input`
  border: none;
  outline: none;
`;

export default function Line({
  type,
  data,
  onCommand,
  onEnter,
  autoFocus,
  onChange,
  onFocus,
  i,
  onBlur,
  onDelete,
  onArrow,
  toFocus,
  onSpace,
}) {
  const inputRef = useRef(null);
  useEffect(() => {
    if (inputRef.current !== null && toFocus) {
      inputRef.current.focus();
    }
  }, [toFocus]);
  switch (type) {
    case "text":
      return (
        <Input
          ref={inputRef}
          value={data}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              onEnter();
            }
          }}
          onKeyDown={(e) => {
            if (e.key === "/") {
              onCommand(e);
            } else if (e.key === "Backspace") {
              onDelete(e);
            } else if (e.key === "ArrowUp" || e.key === "ArrowDown") {
              onArrow(e.key);
            } else if (e.keyCode === 32) {
              onSpace();
            }
          }}
          autoFocus={autoFocus}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={(e) => {
            onChange(e, i);
          }}
          style={{ fontSize: "20px" }}
          placeholder="입력해주세요"
        />
      );
    case "title1":
      return (
        <Input
          ref={inputRef}
          value={data}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              onEnter();
            }
          }}
          onKeyDown={(e) => {
            if (e.key === "/") {
              onCommand(e);
            } else if (e.key === "Backspace") {
              onDelete(e);
            } else if (e.key === "ArrowUp" || e.key === "ArrowDown") {
              onArrow(e.key);
            } else if (e.keyCode === 32) {
              onSpace();
            }
          }}
          autoFocus={autoFocus}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={(e) => {
            onChange(e, i);
          }}
          style={{ fontSize: "36px", fontWeight: 700 }}
          placeholder="입력해주세요"
        />
      );
    case "title2":
      return (
        <Input
          ref={inputRef}
          value={data}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              onEnter();
            }
          }}
          onKeyDown={(e) => {
            if (e.key === "/") {
              onCommand(e);
            } else if (e.key === "Backspace") {
              onDelete(e);
            } else if (e.key === "ArrowUp" || e.key === "ArrowDown") {
              onArrow(e.key);
            } else if (e.keyCode === 32) {
              onSpace();
            }
          }}
          autoFocus={autoFocus}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={(e) => {
            onChange(e, i);
          }}
          style={{ fontSize: "32px", fontWeight: 600 }}
          placeholder="입력해주세요"
        />
      );
    case "title3":
      return (
        <Input
          ref={inputRef}
          value={data}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              onEnter();
            }
          }}
          onKeyDown={(e) => {
            if (e.key === "/") {
              onCommand(e);
            } else if (e.key === "Backspace") {
              onDelete(e);
            } else if (e.key === "ArrowUp" || e.key === "ArrowDown") {
              onArrow(e.key);
            } else if (e.keyCode === 32) {
              onSpace();
            }
          }}
          autoFocus={autoFocus}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={(e) => {
            onChange(e, i);
          }}
          style={{ fontSize: "26px", fontWeight: 600 }}
          placeholder="입력해주세요"
        />
      );
    default:
      return <span>{type} added</span>;
  }
}
