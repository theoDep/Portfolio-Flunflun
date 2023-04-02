export default function Navbar() {
  return (
    <nav className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Flunflun Portfolio</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="#home">Accueil</a>
          </li>
          <li>
            <a href="#projects">Mes projets</a>
          </li>
          <li>
            <a href="#aboutme">A propos</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
