import React from 'react';
 // import {Link} from 'react-router-dom';
 import '../../styles/client/TopNavigation.scss';
 import phone from '../../assets/phone.png';
 import mail from '../../assets/mail.png';
 import map from '../../assets/map-pin.png';
 import '@fortawesome/fontawesome-free/css/all.min.css';
 
 class TopNavigation extends React.Component {
     render() {
         return (
             <header>
                 <nav className="headerClass">
                     <div className="nav-left">
                         <span className="phone-contact">
                             <img src={phone} alt="Phone Icon"/>
                             <span className="text">0912345678</span>
                         </span>
                         <span className="mail-contact">
                             <img src={mail} alt="Mail Icon"/>
                             <span className="text">luatkimngoc@gmail.com</span>
                         </span>
                         <span className="map-contact">
                             <img src={map} alt="Search Icon"/>
                             <span className="text">luatkimngoc</span>
                         </span>  
                     </div>
                     <div className="nav-right">
                         <button className="btn-search"><i class="fas fa-search"></i></button>
                         <input className="input-search" type="text" placeholder="Từ khóa tìm kiếm.."/>
                     </div>
                 </nav>
             </header>
         )
     }
 }
 
 export default TopNavigation;