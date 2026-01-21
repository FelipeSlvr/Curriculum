import { EnvelopeFill } from 'react-bootstrap-icons';

const Email = () => {
  const handleClick = () => {
    window.location.href = 'mailto:felipeslvr@icloud.com';
  };

  return (
    <EnvelopeFill
      size={35}
      onClick={handleClick}
      className="cursor-pointer text-foreground"
    />
  );
};

export default Email;