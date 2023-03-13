import styled from "styled-components";

// Grumcio
export const Name = (props) => {
  return (
    <StyledWraper>
      <StyledDot />
      {props.userData.name}
    </StyledWraper>
  );
};


const StyledWraper = styled("div")(() => ({
  display: "flex",
  fontSize: "20px",
  gap: "15px",
  position: "absolute",
  top: 30,
  left: 50, // przesuwa od lewej względem całej str, nawet jak tam scrolujesz
}));

const StyledDot = styled("div")(() => ({
  backgroundColor: "rgb(255,89,37)",
  width: "30px",
  height: "30px",
  borderRadius: "50%",
}));
