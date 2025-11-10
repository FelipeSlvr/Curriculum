import { EnvelopeFill } from 'react-bootstrap-icons';

const Email = () => {
  const handleClick = () => {
    window.location.href = 'mailto:felipeslvr@icloud.com';
  };

  return (
    <EnvelopeFill
      size={35}
      onClick={handleClick}
      style={{ cursor: 'pointer', color: 'white'}}
    />
  );
};

export default Email;