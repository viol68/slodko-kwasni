import styled from "styled-components";

export const Navigation = (props) => {
  console.log("lubie placki");
  return (
    <StyledWrapper>
      <div>Home</div>
      <div>Work</div>
      <div>About</div>
    </StyledWrapper>
  );
};
const StyledWrapper = styled("div")(() => ({
  position: "absolute",
  top: 0,
  right: 30,
}));
