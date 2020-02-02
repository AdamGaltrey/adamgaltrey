import "~/styles/index.scss";

const Index = () => (
    <div id='page-wrapper'>

        <div className='left-panel'>
            <img className='head-shot fade-in-anim' src='/headshot.png'/>

            <div className='social-icons fade-in-anim-2-left'>
                <img src='/social/sm/github.png'/>
                <img src='/social/sm/linkedin.png'/>
                <img src='/social/sm/stackoverflow.png'/>
                <img src='/social/sm/instagram.png'/>
            </div>
        </div>

        <div className='main-panel'>

            <nav className='fade-in-anim'>
                <ul>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Experience</li>
                    <li>Projects</li>
                </ul>
            </nav>

            <div className='page-panel'>

                <div className='centered'>
                    <div className='hero-text fade-in-anim-2'>
                        <h1 className='mb-30'>Hey, I'm <span className='highlight-red'>Adam Galtrey</span></h1>
                        <h3>
                            I’m a full stack developer based in London, UK with a passion for building high quality websites and
                            applications.
                        </h3>
                    </div>
                </div>

            </div>

        </div>

    </div>
);

export default Index;