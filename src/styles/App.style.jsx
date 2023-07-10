import { styled } from "styled-components";

export const StyleLayout = styled.div`
    margin: 8px;
`

//여기서부터 버튼 css
export const ButtonCol = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const AllButtonContainer = styled.div`
    display: flex;
    gap: 10px;
`

export const AllButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;

    color: ${({ $textColor }) => $textColor};

    background-color: ${({ $color }) => $color};
    border: none;

    ${({ $size, $color }) => {
        switch ($size) {
            case "mini":
                return 'width: 100px; height: 40px;';
            case "medium":
                return 'width: 130px; height: 45px;';
            case "large":
                return `
                    width: 200px;
                    height: 50px;
                    font-weight: 600;
                    background-color: white;
                    border: 3px solid;
                    border-color: ${$color};
                `;
            default:
                return '';
        }
    }}

    padding: 1px 6px;


    border-radius: 8px;

    cursor: pointer;
    
    &:active{
        filter: brightness(90%);
    }

`

//여기서부터 input css

export const InputRow = styled.div`
    display: flex;
    gap: 30px;
`

export const AllInput = styled.input`
    width: 200px;
    height: 40px;
    padding: 1px 12px;

    border-radius: 8px;
    border: 1px solid rgb(221, 221, 221);

`

//여기서부터 modal css

export const ModalBackground = styled.div`
    display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
`

export const ModalContainer = styled.div`
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  
  position: fixed;
  top: 50%;
  left: 50%;
  transform : translate(-50%, -50%);

  width: 400px;
  height: 200px;
  padding: 20px;

  background-color: white;

  border-radius: 10px;
`;

export const TWoButtonContainer = styled.div`
    display: flex;
    gap: 8px;

    position: absolute;
    right: 10px;
    bottom: 10px;
`

export const XMarkButton = styled.button`
    position: absolute;
    top: 10px;
    right: 20px;

    width: 40px;
    height: 40px;

    border: 1px solid rgb(221, 221, 221);
    border-radius: 100%;
    cursor: pointer;
`

// 여기서부터 select css

export const SelectContainer = styled.div`
    width: 100%;
    height: 200px;

    margin-top: 50px;

    border: 3px solid rgb(221, 221, 221);

    overflow: hidden;
`

export const SelectRow = styled.div`
    display: flex;
    gap: 10px;
`

export const SelectItemContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const SelectButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 40px;
    width: 300px;
    border: 1px solid rgb(221, 221, 221);
    border-radius: 12px;
    background-color: rgb(255, 255, 255);

    padding: 0 28px;
`
export const SelectList = styled.div`
    position: ${({ $selectPosition }) => $selectPosition};
    z-index: 1000;

    display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
    margin-top: ${({ $selectPosition }) => ($selectPosition === "absolute" ? "40px" : "0px")};
    width: 300px;
    border: 1px solid rgb(221, 221, 221);
    border-radius: 10px;

    > :first-child {
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
    
    > :last-child {
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    
`


export const SelectItem = styled.div`
    display: flex;
    align-items: center;

    background-color: white;
    height: 30px;

    padding-left: 10px;

    &:hover {
        filter: brightness(90%);
    };

`

export const SelectBackground = styled.div`
    display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
`

