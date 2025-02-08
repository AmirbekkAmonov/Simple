import styled from "styled-components";

const Header2 = styled.header`
  padding: 20px 0;
`;
const Padding = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
`;
const Circle = styled.div`
  border-radius: 50%;
  width: 32px;
  height: 32px;
  background: radial-gradient(
    62.11% 62.11% at 21.15% 86.06%,
    #4fd1c5 0%,
    #81e6d9 25.87%,
    #338cf5 100%
  );
`;
const Register = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
`;
const Button = styled.button`
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.25px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    background-color: ${(props) => (props.$rang ? "transparent" : "#191919")};
    color: ${(props) => (props.$rang ? "#666666" : "#EFEFEF")};
    padding: 10px;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;

    &:hover { 
        background-color: ${(props) => (props.$rang ? "#EFEFEF" : "#191919ef")};
        color: ${(props) => (props.$rang ? "#191919" : "#EFEFEF")};
    }
`;
function Header() {
    return (
        <Header2>
            <div className="container">
                <Padding>
                    <a href="#"><Circle></Circle></a>
                    <Register>
                        <Button $rang>Sign in</Button>
                        <Button>Sign up <img src="./assets/icons/Path.svg" alt="" /></Button>
                    </Register>
                </Padding>
            </div>
        </Header2>
    );
}

export default Header;
