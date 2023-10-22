import Avatar from "react-avatar";

const SimpleAvatar = ({ name, size }) => {
  return (
    <Avatar
      name={name}
      size={size}
      round
      className="text-xl font-bold"
      color="#E54065"
    />
  );
};

export default SimpleAvatar;
