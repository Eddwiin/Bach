import LinkTo from './../UI/link-to/Link-to';

export default function Header() {
  return (
    <header>
      <div className="flex place-content-between px-6">
        <h2>Bach</h2>
        <div className="flex gap-6">
          {/* <LinkTo to=''>Sign Up</LinkTo>
          <LinkTo to=''>Log In</LinkTo> */}
        </div>
      </div>
    </header>
  )
}
