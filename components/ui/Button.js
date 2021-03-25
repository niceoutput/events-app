import Link from 'next/link';
import classes from './Button.module.css';

const Button = (props) => {
  const { children, link } = props;

  return (
    <Link href={link}>
      <a className={classes.btn}>{children}</a>
    </Link>
  );
};

export default Button;
