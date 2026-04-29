import { EnvelopeFill } from 'react-bootstrap-icons';

const Email = ({ asIcon }: { asIcon?: boolean }) => {
  if (asIcon) {
    return <EnvelopeFill size={24} className="text-foreground shrink-0" />;
  }

  return (
    <EnvelopeFill
      size={35}
      onClick={() => { window.location.href = 'mailto:felipeslvr@icloud.com'; }}
      className="cursor-pointer text-foreground"
    />
  );
};

export default Email;