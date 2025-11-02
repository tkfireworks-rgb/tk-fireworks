import { NavLink } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import logo from '../assets/logo.png';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="TK Fireworks Logo" className="logo" />
        <h1 className="title">TK Fireworks 🎆</h1>
      </div>
      <nav className="nav">
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/about" className="nav-link">About</NavLink>
        <NavLink to="/contact" className="nav-link">Contact</NavLink>
      </nav>
      <LanguageSwitcher />
    </header>
  );
}

