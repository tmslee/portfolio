import LinkButton from '../Common/LinkButton';

import "./styles/index.scss";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className='nav-container'>
        <div className='nav-logo'>
          <LinkButton
            text="Thomas Lee"
            onClick={() => {console.log('logo')}}
            style={{}}
          />
        </div>
        <div className="nav-menu">
          <LinkButton
            text="About Me"
            onClick={() => {console.log('about me')}}
            style={{}}
          />
          <LinkButton
            text="Web/ML"
            onClick={() => {console.log('web and ml')}}
            style={{}}
          />
          <LinkButton
            text="Art"
            onClick={() => {console.log('art')}}
            style={{}}
          />
          <LinkButton
            text="Game"
            onClick={() => {console.log('game')}}
            style={{}}
          />
        </div>
        <div className='nav-contact-me'>
         <LinkButton
            text="Contact Me >"
            onClick={() => {console.log('contact me')}}
            style={{}}
          />
        </div>
      </div>
    </nav>
  );
}
