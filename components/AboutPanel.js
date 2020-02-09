import {forwardRef} from 'react';
import {title, description} from '~/locale/about';

const AboutPanel = forwardRef((props, ref) => (
    <div className='page-panel' ref={ref}>

        <div className='centered'>
            <div className='about-contents'>
                <div className='left-pane'>
                    <h1 className='highlight-red'>{title}</h1>
                    {
                        description.map((content, index) => <p key={`about-${index}`} dangerouslySetInnerHTML={{__html: content}} />)
                    }
                </div>
                <div className='right-pane'>
                    <a href='https://www.linkedin.com/in/adam-galtrey-b48ab3109/' target='_blank' rel='noopener'>
                        <img src='/headshot400.jpg'/>
                    </a>
                </div>
            </div>
        </div>

    </div>
));

export default AboutPanel;