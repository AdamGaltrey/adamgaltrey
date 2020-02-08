import "~/styles/index.scss";
import {useState} from 'react';
import classNames from 'classnames';

const Index = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div id='page-wrapper'>

            <div className='left-panel desktop-only'>
                <img className='head-shot fade-in-anim' src='/headshot.png'/>

                <div className='social-icons fade-in-anim-2-left'>
                    <img className='social' src='/social/sm/github.png'/>
                    <img className='social' src='/social/sm/linkedin.png'/>
                    <img className='social' src='/social/sm/stackoverflow.png'/>
                    <img className='social' src='/social/sm/instagram.png'/>
                </div>
            </div>

            <div className='main-panel'>

                <div className='nav-container'>

                    <img className='mobile-only head-shot-mobile fade-in-anim' src='/headshot.png'/>

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
                            <li>About</li>
                            <li>Skills</li>
                            <li>Experience</li>
                            <li>Projects</li>
                        </ul>
                    </nav>
                </div>

                <div className='page-panel first-panel'>

                    <div className='centered'>
                        <div className='hero-text fade-in-anim-2'>
                            <h1 className='mb-50'>Hey, I'm <span className='highlight-red'>Adam Galtrey</span></h1>
                            <h3 className='font-dark'>
                                I’m a full stack developer based in London, UK with a passion for building high quality websites and
                                applications.
                            </h3>
                        </div>

                        <a href='mailto:adam.galtrey@gmail.com' className='btn-thin mt-50 fade-in-anim-2'>
                            Contact Me
                        </a>

                    </div>

                </div>

                <div className='page-panel'>

                    <div className='centered'>
                        <div className='hero-text fade-in-anim-2'>
                            <h1 className='mb-30'>This is <span className='highlight-red'>Panel 2</span></h1>
                        </div>
                    </div>

                </div>

                <div className='mobile-footer'>
                    <img className='social' src='/social/sm/github.png'/>
                    <img className='social' src='/social/sm/linkedin.png'/>
                    <img className='social' src='/social/sm/stackoverflow.png'/>
                    <img className='social' src='/social/sm/instagram.png'/>
                </div>

            </div>

        </div>
    );
}

export default Index;