import { ROUTE_PATH } from '../config/router.config';
import LinkTo from '../UI/link-to/Link-to';

export default function Header() {
  return (
    <header>
      <div className="flex place-content-between px-6">
        <h2>Bach</h2>
        <div className="flex gap-6">
          <LinkTo to={`${ROUTE_PATH.AUTH}/${ROUTE_PATH.LOG_IN}`}>Log In</LinkTo>
          <LinkTo to={`${ROUTE_PATH.AUTH}/${ROUTE_PATH.SIGN_UP}`}>Sign Up</LinkTo>
        </div>
      </div>
    </header>
  );
}
