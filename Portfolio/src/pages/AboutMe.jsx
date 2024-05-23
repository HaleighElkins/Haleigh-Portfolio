import profliePic from '../assets/images/portfolio-pic.jpg';



export default function AboutMe() {
    return(
    <div className="container pt-4 about-me-container">
        <h2>About Me</h2>
        <div id='about-me'>
            <div className='cal-3 mb-4'>
                {/* Profile Pic */}
                <img 
                src={profliePic}
                alt='Haleigh Elkins'
                className='img-fluid profile-picture'
                id='profile-pic'
                />
            </div>
    <p className='paragraph'>
        {/* Welcome */}
        Welcome to my portfolio! Here you&#39ll find my resume, a collection of small projects, and information about me. Feel free to explore and don&#39t hesitate to reach out through the contact section.
    </p>
    <p className='paragraph'>
        {/* About me */}
        Hi there! I&#39m Haleigh, a 31-year-old tech enthusiast living in beautiful Colorado with my two adorable golden retrievers. I&#39m on the exciting journey of transitioning into a new career in programming. Currently, I&#39m about to complete a fullstack coding bootcamp, which has ignited my passion for all things tech.

        I love diving deep into how computers work and am constantly amazed by the endless possibilities of coding. My next adventure? Exploring the world of cybersecurity through further education.

        When I&#39m not coding or learning about new technologies, you can find me exploring the great outdoors with my furry companions or tinkering with the latest gadgets. I&#39m thrilled about the future and can&#39t wait to make my mark in the tech world. Let&#39s connect and see what we can create together!
    </p>
    <p className='paragraph'>
        {/* Thank yous */}
        Thank you for visiting my portfolio! I hope you enjoyed exploring my projects and learning a bit about me. If you have any questions, ideas, or just want to connect, feel free to reach out through the contact section. I&#39m excited about the future and look forward to the possibilities ahead!
    </p>
        </div>
    </div>
    );
}