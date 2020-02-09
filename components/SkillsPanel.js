import {forwardRef} from 'react';
import {title, skills} from '~/locale/skills';

const currentYear = new Date().getFullYear();

const SkillsPanel = forwardRef((props, ref) => (
    <div className='page-panel' ref={ref}>

        <div className='centered'>

            <div className='skills-contents'>
                <h1 className='highlight-red'>{title}</h1>
                <div className='skills-cards'>

                    {
                        skills
                            .sort((s1, s2) => s2.experience - s1.experience)
                            .map(skill => (
                            <div className='skills-card' key={`skill-${skill.title}`}>
                                <img src={skill.icon}/>
                                <div className='skills-prof'>
                                    <span>{skill.title}</span>
                                    <span className='font-dark'>{skill.experience} Year{skill.experience > 1 && 's'}</span>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>

    </div>
));

export default SkillsPanel;