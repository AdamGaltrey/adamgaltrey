import {title, tagline, contact} from '~/locale/index';

const IndexPanel = () => (
    <div className='page-panel first-panel'>

        <div className='centered'>
            <div className='hero-text fade-in-anim-2'>
                <h1 className='mb-50' dangerouslySetInnerHTML={{__html: title}} />
                <h3 className='font-dark'>
                    {tagline}
                </h3>
            </div>

            <a href='mailto:adam.galtrey@gmail.com' className='btn-thin mt-50 fade-in-anim-2'>
                {contact}
            </a>

        </div>

    </div>
);

export default IndexPanel;