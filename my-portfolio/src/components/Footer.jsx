
import { profile } from '../data/portfolio';

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
