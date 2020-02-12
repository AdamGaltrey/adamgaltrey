import {forwardRef} from 'react';
import {title, experienceList} from '~/locale/experience';

const ExperiencePanel = forwardRef((props, ref) => (
    <div className='page-panel' ref={ref}>

        <div className='centered'>

            <div className='experience-contents'>
                <h1 className='panel-title'>{title}</h1>

                <div className='experience-items'>

                    {
                        experienceList.map(item => {
                            const {company, role, tenure, icon, experience} = item;
                            return (
                                <div className='experience-item' key={`company-${company}`}>
                                    <div className='experience-header'>
                                        <img src={icon} alt={`Experience : ${company}`}/>
                                        <div className='experience-header-title'>
                                            <h2>{company}</h2>
                                            <span>{role}</span>
                                            <span className='font-dark'>{tenure}</span>
                                        </div>
                                    </div>
                                    <div className='experience-body'>
                                        {experience.map(
                                            (lineItem, index) =>
                                                <p
                                                    key={`${company}-${index}`}
                                                    dangerouslySetInnerHTML={{__html: lineItem}}
                                                />
                                        )}
                                    </div>
                                </div>
                            );
                        })
                    }

                </div>


            </div>
        </div>

    </div>
));

export default ExperiencePanel;