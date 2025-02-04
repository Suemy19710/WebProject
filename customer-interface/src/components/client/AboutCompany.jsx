import React from 'react';
import '../../styles/client/AboutCompany.scss';
import pic from '../../assets/about-company.png';

class AboutCompany extends React.Component {
    render() {
        return (
            <>
                <div className="about-company">
                    <div className="about-company-content">
                        <h1 className="title">Công ty Luật Kim Ngọc</h1>
                        <h className="description">
                            Lorem ipsum dolor sit amet. Ut quas internos 33 beatae temporibus et molestiae quisquam non rerum inventore! Et voluptas obcaecati in rerum animi ut odit facilis et assumenda nesciunt qui recusandae quae id voluptates pariatur eos molestiae voluptas. Ut temporibus quas quo consequuntur magni ut numquam doloremque.
                        </h>
                        <br></br>
                        <button className="view-more-introduction">
                            Tổng quan công ty Luật Kim Ngọc
                        </button>
                    </div>
                    <div className="about-company-right">
                        <div className="pic-background">
                            <img src ={pic} className="about-company-pic"/>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default AboutCompany;