import React from 'react';
import '../../styles/client/Header.scss';
import {Link, NavLink, Navigate} from "react-router-dom";
import logo from '../../assets/logo.png'
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';

 
class Header extends React.Component {
    state = {
        redirectToCardPage: false,
        // dropdownOpen: false,
    };
    handleLogo = () => {
        this.setState({redirectToCardPage: true});
    };

    // toggleDropDown = () => {
    //     this.setState(prevState => ({
    //         dropdownOpen: !prevState.dropdownOpen,
    //     }));
    // };
    // closeDropDown = () =>{
    //     this.setState({ dropdownOpen: false });
    // }
    render() {
        if (this.state.redirectToCardPage) {
            return <Navigate to ="/" activeClassName="active" exact="true"/>;
        }
        return (
            <div className="topnav">
                <div class="topnav-left">
                    <img src={logo} alt="Logo" onClick={() => this.handleLogo()} />
                </div>
                <div class="topnav-right">
                    <NavLink to="/" activeClassName="active" exact="true">
                        Trang chủ
                    </NavLink>
                    <NavLink to="/gioi-thieu/y-nghia" activeClassName="active">
                        Giới thiệu
                    </NavLink>  
                    <NavLink to="/dich-vu" activeClassName="active">
                        Dịch vụ
                    </NavLink>  
                    <NavLink to="/tin-tuc" activeClassName="active">
                        Tin tức & Sự kiện
                    </NavLink> 
                    <NavLink to="/so-huu-tri-tue" activeClassName="active">
                        Sở hữu trí tuệ
                    </NavLink>
                    <NavLink to="/dan-su" activeClassName="active">
                        Dân sự
                    </NavLink>
                    <NavLink to="/hinh-su" activeClassName="active">
                        Hình sự
                    </NavLink>
                    <NavLink to="/hanh-chinh" activeClassName="active">
                        Hành chính
                    </NavLink> 
                    {/* <div className="dropdown-phapLuat">
                        <button className="dropbtn"
                                onClick={this.toggleDropDown}
                        >
                            <div>Các lĩnh vực pháp luật</div>
                            <i class="fa fa-caret-down"></i>
                        </button>
                        {this.state.dropdownOpen && (
                            <div className="dropdown-content" onClick={this.closeDropDown}>
                                <NavLink to="/so-huu-tri-tue" activeClassName="active">
                                    Sở hữu trí tuệ
                                </NavLink>
                                <NavLink to="/dan-su" activeClassName="active">
                                    Dân sự
                                </NavLink>
                                <NavLink to="/hinh-su" activeClassName="active">
                                    Hình sự
                                </NavLink>
                                <NavLink to="/hanh-chinh" activeClassName="active">
                                    Hành chính
                                </NavLink>
                            </div>
                        )}
                    </div> */}
                    <NavLink to="/lien-he" activeClassName="active">
                        Liên hệ
                    </NavLink>  

                </div>
             </div>
        )
    }
}
 export default Header;