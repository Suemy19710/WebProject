import React from 'react';
import '../../styles/client/TinTucCard.scss';
import event from  '../../assets/event.png';

class TinTucCard extends React.Component{
    render() {
        return (
            <div className="container-card">
                <div className="title">
                    <h1>Khi nào cần tìm luật sư? </h1>
                    <div className="time-post">
                        <i class="fa-regular fa-clock"></i>
                        <div className="date">27/10/2015</div>
                    </div>
                </div>
                <div className="body">
                    <div className="img">
                        <img src={event}/>
                    </div>
                    <div className="body-description">
                       Theo quan điểm của hầu hết người dân Việt Nam thì khi nào đưa ra Tòa án thì mới cần đến sự trợ giúp của luật sư, nhưng đối với tôi thì không hoàn toàn đồng tình với quan điểm đó đối vời hầu hết các sự việc nếu chúng ta biết luật và làm đúng luật thì sẽ không để lại nhưng hậu quả về sau tôi đơn cử như trường hợp của anh Nguyễn Văn Trình ở Bến Tre bắt trôm mà bị tuyên phạt 6 tháng từ treo. vậy khi nào thì cần luật sư tư vấn pháp luật để đảm bảo quyên lợi cho mình và không gây ra những hậu quả đáng tiếc về sau:
khi bạn cần soạn thảo một hợp đồng, một di trúc thừa kế, một dao kèo....
bắt đầu có tranh chấp sẩy ra thì hay liên hệ ngay với luật sư để được tư vấn phương án ứng sử phù hợp dể tránh sau này mình bị thiệt hại  vì những lỗi đó.
khi khởi kiện hoặc khi bạn là người bj kiện
khi ban đang băn khoan về các vần đề của luật pháp..

     Những nước phát triển thì một gia đình để có một luật sư tư vấn riêng, khi họa đình làm bất cứ việc gì thì việc đầu tiên là họa hỏi luật sư vấn đề đó làm như thế nào để đảm bảo quyền lợi cho họa về sau này, đồng thời biết rõ quy đinh của pháp luật về vấn đề đó. Tôi  đơn cử như trường hợp anh bảo vệ trong vụ án thẩm mỹ viện Cát Tường chỉ vì không biết luật mà phải nhận mực án như vậy .....
      Chúng ta là nhưng người văn minh sống trong xã hội văn minh nên sống và làm việc theo pháp luật là điều đầu tiên mà chúng ta cần phải làm
                    </div>
                </div>
            </div>
        )
    }
}
export default TinTucCard;