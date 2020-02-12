import {forwardRef} from 'react';
import {title, skills} from '~/locale/skills';

const secondarySkills = [
    'Docker',
    'Kubernetes',
    'AWS',
    'Git',
    'Jenkins',
    'Postgres',
    'Terraform',
    'Hibernate',
    'Maven',
    'MySQL',
    'MongoDB',
    'Linux',
    'Spinnaker',
    'Kibana',
    'Grafana',
    'Elastic_Search',
    'Prometheus',
    'Jager',
    'Redis',
    'Bootstrap',
    'Angular',
    'GraphQL',
    'Jest',
    'Redux'
];

const SkillsPanel = forwardRef((props, ref) => (
    <div className='page-panel spaced' ref={ref}>

        <div className='centered'>

            <div className='skills-contents'>
                <h1 className='panel-title'>{title}</h1>
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
                <p style={{textAlign: 'left'}}>Here's a more comprehensive list of a number of technologies and tools I have experience
                    with. Covering all areas of the technology stack, from dockerised containers and orchestration systems, to monitoring
                    stacks and CI/CD tool chains.</p>
                <div className='skills-image-icons'>
                    {
                        secondarySkills.map(skill => (
                            <div className='skill-icon' key={skill}>
                                <img src={`/skills/secondary/sm/${skill.toLowerCase()}.png`} alt={skill.replace(/_/g, ' ')}/>
                                <span className='font-dark'>{skill.replace(/_/g, ' ')}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>

    </div>
));

export default SkillsPanel;