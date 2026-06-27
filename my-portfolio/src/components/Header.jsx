// experience one was missed from me 
// const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];
const navItems = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];


function Header() {
  return (
    <header className="header">
      <a href="#home" className="logo">
        Abdul Basit<span>.</span>
      </a>

      <nav className="nav">
        {navItems.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`}>
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;
