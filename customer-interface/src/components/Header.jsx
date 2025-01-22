import React from 'react';

class Header extends React.Component {
    render() {
        return (
           <>
                <Header className="header">
                    <div className = "logo">
                        <img/>
                    </div>
                    <div className="contact-info">
                        <span>📞 0912345678</span>
                        <span>📧 luatkimngoc@gmail.com</span>
                        <span>📍 luatkimngoc</span>                    
                    </div>
                </Header>
           </>
        )
    }
}

export default Header;