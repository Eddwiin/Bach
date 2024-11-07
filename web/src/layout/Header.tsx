export default function Header() {
  return (
    <header>
      <div className="flex place-content-between px-6">
        <h2>Bach</h2>
        <div className="flex gap-6">
          <button>Sign Up</button>
          <button>Log In</button>
        </div>
      </div>
    </header>
  )
}
