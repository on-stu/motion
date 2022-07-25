import styled from "styled-components";
import colors from "../lib/colors.json";
import { Dispatch, FC, SetStateAction, useEffect } from "react";

type ContainerProps = {
  top: number;
  left: number;
};

const Container = styled.div<ContainerProps>`
  .innerContainer {
    position: absolute;
    top: ${(props) => props.top}px;
    left: ${(props) => props.left}px;
    width: 200px;
    min-height: 100px;
    height: fit-content;
    max-height: 150px;
    background-color: white;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    box-sizing: border-box;
    overflow-y: scroll;
  }

  .active {
    animation-duration: 500ms;
    animation-name: showup;
  }

  .unknown {
    width: 100%;
    min-height: 100px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: gray;
  }

  .list {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    box-sizing: border-box;
    padding: 10px;
  }

  input {
    width: 100%;
    border: none;
    outline: none;
    color: gray;
  }

  ul {
    list-style: none;
    width: 100%;
    padding: 0px 10px;
    display: flex;
    flex-direction: column;
    row-gap: 4px;
  }

  li {
    width: 100%;
    box-sizing: border-box;
    padding: 4px 2px;
    cursor: pointer;
  }
  li:hover {
    background-color: ${colors.gray};
  }

  @keyframes showup {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

type CommandMenuProps = {
  visible: boolean;
  top: number;
  left: number;
  options: string[];
  command: string;
  setCommand: Dispatch<SetStateAction<string>>;
};

const CommandMenu: FC<CommandMenuProps> = ({
  visible,
  top,
  left,
  options,
  command,
  setCommand,
}) => {
  useEffect(() => {
    if (options.length > 0) {
      setCommand(options[0]);
    }
  }, [options]);

  return (
    <>
      {visible && (
        <Container top={top} left={left}>
          <div className={visible ? "innerContainer active" : "innerContainer"}>
            {options.length === 0 ? (
              <div className="unknown">알 수 없는 명령어</div>
            ) : (
              <div className="list">
                <input value={command} readOnly />
                <ul>
                  {options.map((option, i) => (
                    <li key={i}>{option}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Container>
      )}
    </>
  );
};

export default CommandMenu;
