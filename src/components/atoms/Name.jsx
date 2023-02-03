import styled from "styled-components";

// Grumcio
export const Name = (props) => {
  console.log(props.userData);
  return (
    <StyledWraper>
      <StyledDot />
      {props.userData.name}
    </StyledWraper>
  );
};
const StyledWraper = styled("p")(() => ({
  fontSize: "20px",
  display: "flex",
  gap: "15px",
  position: "absolute",
  top: 0,
  left: 30, // przesuwa od lewej względem całej str, nawet jak tam scrolujesz
}));
const StyledDot = styled("div")(() => ({
  backgroundColor: "rgb(255,89,37)",
  width: "30px",
  height: "30px",
  borderRadius: "50%",
}));
