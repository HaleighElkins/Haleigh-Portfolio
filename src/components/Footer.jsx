import githubLogo from '../assets/svg/github.svg';
import linkedLogo from '../assets/svg/linkedin.svg';

export default function Footer() {
    const socialLinks = [
      { url: 'https://www.linkedin.com/in/haleigh-elkins-9b38792b7/', logo: linkedLogo, alt: "LinkedIn logo", className: "logo linkedIn" },
      { url: 'https://github.com/HaleighElkins', logo: githubLogo, alt: "Github logo", className: "logo github" }
    ];
  
    return (
      <div className="container-fluid text-center p-4">
        {socialLinks.map((link, index) => (
          <a key={index} className="m-4" href={link.url} target="_blank" rel="noopener noreferrer">
            <img src={link.logo} className={link.className} alt={link.alt} />
          </a>
        ))}
      </div>
    );
  }
  