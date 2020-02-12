import {string} from 'prop-types';

const SocialLinks = ({className}) => (
    <div className={className}>
        <a href='mailto:adam.galtrey@gmail.com'>
            <img className='social' src='/social/sm/email.png' alt='Email'/>
        </a>

        <a href='https://github.com/AdamGaltrey' target='_blank' rel='noopener'>
            <img className='social' src='/social/sm/github.png' alt='Github'/>
        </a>

        <a href='https://www.linkedin.com/in/adam-galtrey-b48ab3109/' target='_blank' rel='noopener'>
            <img className='social' src='/social/sm/linkedin.png' alt='Linkedin'/>
        </a>
        <a href='https://stackoverflow.com/users/5182868/adam' target='_blank' rel='noopener'>
            <img className='social' src='/social/sm/stackoverflow.png' alt='Stack Overflow'/>
        </a>
        <a href='https://www.instagram.com/adamgaltrey/' target='_blank' rel='noopener'>
            <img className='social' src='/social/sm/instagram.png' alt='Instagram'/>
        </a>
    </div>
);

SocialLinks.propTypes = {
    className: string.isRequired
};

export default SocialLinks;