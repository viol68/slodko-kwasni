import styled from "styled-components";

export const Navigation = (props) => {

  return (
    <StyledWrapper>
      <StyledLink>Home</StyledLink>
      <StyledLink>Work</StyledLink>
      <StyledLink>About</StyledLink>
    </StyledWrapper>
  );
};

const StyledWrapper = styled("div")(() => ({
  display: "flex",
  gap:"15px",
  position: "absolute",
  top: 30,
  right: 30,


}));

const StyledLink = styled("div")(() => ({
  ':hover': {
    color:"#3E83FB",
    cursor:"pointer"
  }
}));
