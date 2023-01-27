export const Avatar = (props) => {
  console.log(props.userData);
  return <div>{props.userData.name}</div>;
};
