import { Link } from 'react-router-dom';
import style from './Link-to.module.scss';

export default function LinkTo(props: Props) {
  return (
    <div className={style.link}>
      <Link to={props.to}>{props.children}</Link>
    </div>
  );
}

interface Props {
  to: string;
  children?: React.ReactNode;
}
