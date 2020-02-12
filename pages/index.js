import "~/styles/index.scss";
import {useState, createRef} from 'react';
import classNames from 'classnames';
import AboutPanel from "~/components/AboutPanel";
import IndexPanel from "~/components/IndexPanel";
import SocialLinks from "~/components/SocialLinks";
import SkillsPanel from "~/components/SkillsPanel";
import ExperiencePanel from "~/components/ExperiencePanel";
import FinalPanel from "~/components/FinalPanel";

const Index = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const aboutRef = createRef();
    const skillsRef = createRef();
    const experienceRef = createRef();
    const contactRef = createRef();
    const scrollToRef = (ref) => {
        window.scrollTo(0, ref.current.offsetTop);
    }

    return (
        <div id='page-wrapper'>

            <div className='left-panel desktop-only'>
                <a href='https://www.linkedin.com/in/adam-galtrey-b48ab3109/' target='_blank' rel='noopener'>
                    <img className='head-shot fade-in-anim' src='/headshot.png' alt='Headshot Logo'/>
                </a>

                <SocialLinks className={'social-icons fade-in-anim-2-left'}/>
            </div>

            <div className='main-panel'>

                <div className='nav-container'>

                    <img className='mobile-only head-shot-mobile fade-in-anim' src='/headshot.png' alt='Headshot Logo'/>

                    <button
                        className={classNames("fade-in-anim burger-menu hamburger hamburger--spring mobile-only-burger", {'is-active': menuOpen})}
                        onClick={() => setMenuOpen(!menuOpen)}
                        type="button"
                    >
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </button>

                    <nav className='fade-in-anim-desktop-only' aria-expanded={menuOpen}>
                        <ul>
                            <li onClick={() => scrollToRef(aboutRef)}>About</li>
                            <li onClick={() => scrollToRef(skillsRef)}>Skills</li>
                            <li onClick={() => scrollToRef(experienceRef)}>Experience</li>
                            <li onClick={() => scrollToRef(contactRef)}>Contact</li>
                        </ul>
                    </nav>
                </div>

                <IndexPanel/>

                <AboutPanel ref={aboutRef}/>

                <SkillsPanel ref={skillsRef}/>

                <ExperiencePanel ref={experienceRef}/>

                <FinalPanel ref={contactRef}/>

                <SocialLinks className={'mobile-footer'}/>

            </div>

        </div>
    );
}

export default Index;