import './styles.css';
import {ReactComponent as YoutubeIcon} from './youtube.svg'
import {ReactComponent as LinkedinIcon} from './linkedin.svg'
import {ReactComponent as InstagramIcon} from './instagram.svg'
function Footer() {
    return (
       <footer className="main-footer">
           App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
           <div className="footer-icons">
               <a href="https://www.youtube.com/channel/UCLb2-10lVX0-rMyGXC0iacA" target="_new"></a>
               <a href="https://www.linkedin.com/in/victor-luiz-3913271a7/" target="_new"></a>
               <a href="https://www.instagram.com/victiz_/" target="_new"></a>
               <InstagramIcon />
               <LinkedinIcon />
               <YoutubeIcon />
           </div>
       </footer>
    )
}

export default Footer;