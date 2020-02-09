import {forwardRef} from 'react';
import {title, description} from '~/locale/about';

const SkillsPanel = forwardRef((props, ref) => (
    <div className='page-panel' ref={ref}>

        <div className='centered'>
            <div className='skills-contents'>
                Skills can go in here
            </div>
        </div>

    </div>
));

export default SkillsPanel;