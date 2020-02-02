import "~/styles/index.scss";

const Index = () => (
    <div id='page-wrapper'>
        {/*<h1>This is a H1 Block</h1>*/}
        {/*<h2>This is a H2 Block</h2>*/}
        {/*<h3>This is a H3 Block</h3>*/}
        {/*<p>This is a standard paragraph.</p>*/}
        {/*<br/>*/}
        {/*<h1 className='font-dark'>This is a H1 Block Dark</h1>*/}
        {/*<h2 className='font-dark'>This is a H2 Block Dark</h2>*/}
        {/*<h3 className='font-dark'>This is a H3 Block Dark</h3>*/}
        {/*<p>This is a standard paragraph with dark font.</p>*/}
        {/*<br/>*/}
        {/*<h1 className='highlight-red'>This is a H1 Block Highlighted</h1>*/}
        {/*<h2 className='highlight-red'>This is a H2 Block Highlighted</h2>*/}
        {/*<h3 className='highlight-red'>This is a H3 Block Highlighted</h3>*/}
        {/*<p>This is a <span className='highlight-red'>standard paragraph</span> with highlighted font.</p>*/}

        <div className='left-panel'>
            <img className='head-shot' src='/headshot.png'/>

            <div className='social-icons'>
                <img src='/social/sm/github.png'/>
                <img src='/social/sm/linkedin.png'/>
                <img src='/social/sm/stackoverflow.png'/>
                <img src='/social/sm/instagram.png'/>
            </div>
        </div>

        <div className='main-panel'>

            <div className='page-panel'>

                <div className='centered'>
                    <div className='hero-text'>
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