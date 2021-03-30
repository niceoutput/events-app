import classes from './errorAlert.module.css';

function ErrorAlert(props) {
  return <div className={classes.alert}>{props.children}</div>;
}

export default ErrorAlert;
