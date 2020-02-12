import {title, tagline, contact} from '~/locale/final';
import {forwardRef} from 'react';

const FinalPanel = forwardRef((props, ref) => (
    <div className='page-panel full-panel' ref={ref}>

        <div className='centered'>
            <div className='hero-text-single fade-in-anim-2'>
                <h1 className='mb-50' dangerouslySetInnerHTML={{__html: title}}/>
                <p className='font-dark headline'>
                    {tagline}
                </p>
            </div>

            <a href='mailto:adam.galtrey@gmail.com' className='btn-thin mt-50 fade-in-anim-2'>
                {contact}
            </a>

        </div>

    </div>
));

export default FinalPanel;