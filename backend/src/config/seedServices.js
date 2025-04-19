const mongoose = require('mongoose');
const ServiceModel = require('../models/DichVuModel');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const services = [
  {
    name: 'Tư vấn luật doanh nghiệp (thành lập, giải thể, thay đổi đăng ký kinh doanh, hợp đồng…)',
    content: '<p>Chi tiết về tư vấn luật doanh nghiệp...</p>',
    category: 'tư vấn pháp lý',
  },
  {
    name: 'Tư vấn luật đất đai, bất động sản (mua bán, chuyển nhượng, thừa kế, tranh chấp…)',
    content: '<p>Chi tiết về tư vấn luật đất đai...</p>',
    category: 'tư vấn pháp lý',
  },
  {
    name: 'Tư vấn luật hôn nhân & gia đình (ly hôn, tranh chấp tài sản, quyền nuôi con, chế độ tài sản…)',
    content: '<p>Chi tiết về tư vấn luật hôn nhân...</p>',
    category: 'tư vấn pháp lý',
  },
  {
    name: 'Tư vấn luật lao động (hợp đồng lao động, sa thải, bảo hiểm xã hội, tranh chấp lao động…)',
    content: '<p>Chi tiết về tư vấn luật lao động...</p>',
    category: 'tư vấn pháp lý',
  },
  {
    name: 'Tư vấn luật thuế và tài chính (kê khai thuế, xử lý tranh chấp thuế, tối ưu thuế doanh nghiệp…)',
    content: '<p>Chi tiết về tư vấn luật thuế...</p>',
    category: 'tư vấn pháp lý',
  },
  {
    name: 'Tư vấn luật sở hữu trí tuệ (đăng ký nhãn hiệu, bản quyền, xử lý vi phạm…)',
    content: '<p>Chi tiết về tư vấn luật sở hữu trí tuệ...</p>',
    category: 'tư vấn pháp lý',
  },
  {
    name: 'Tư vấn luật bảo hiểm (bảo hiểm xã hội, bảo hiểm nhân thọ, tranh chấp bảo hiểm…)',
    content: '<p>Chi tiết về tư vấn luật bảo hiểm...</p>',
    category: 'tư vấn pháp lý',
  },
  {
    name: 'Tư vấn luật giao thông (tai nạn giao thông, xử phạt vi phạm hành chính…)',
    content: '<p>Chi tiết về tư vấn luật giao thông...</p>',
    category: 'tư vấn pháp lý',
  },
  {
    name: 'Tư vấn luật hành chính (khiếu nại, tố cáo, thủ tục cấp giấy phép…)',
    content: '<p>Chi tiết về tư vấn luật hành chính...</p>',
    category: 'tư vấn pháp lý',
  },
  // Dịch vụ đại diện pháp lý
  {
    name: 'Đại diện đàm phán hợp đồng, giải quyết tranh chấp thương mại',
    content: '<p>Chi tiết về đại diện đàm phán...</p>',
    category: 'đại diện pháp lý',
  },
  {
    name: 'Đại diện khách hàng trong các vụ kiện dân sự, hình sự, hành chính',
    content: '<p>Chi tiết về đại diện kiện tụng...</p>',
    category: 'đại diện pháp lý',
  },
  {
    name: 'Đại diện trước cơ quan nhà nước (tòa án, công an, thuế, sở hữu trí tuệ…)',
    content: '<p>Chi tiết về đại diện cơ quan nhà nước...</p>',
    category: 'đại diện pháp lý',
  },
  {
    name: 'Đại diện làm việc với ngân hàng, tổ chức tín dụng, đối tác kinh doanh',
    content: '<p>Chi tiết về đại diện ngân hàng...</p>',
    category: 'đại diện pháp lý',
  },
  // Dịch vụ tranh tụng tại tòa án
  {
    name: 'Luật sư bào chữa trong các vụ án hình sự',
    content: '<p>Chi tiết về bào chữa hình sự...</p>',
    category: 'tranh tụng tại tòa án',
  },
  {
    name: 'Luật sư đại diện trong các vụ án dân sự (tranh chấp hợp đồng, thừa kế, đất đai…)',
    content: '<p>Chi tiết về đại diện dân sự...</p>',
    category: 'tranh tụng tại tòa án',
  },
  {
    name: 'Luật sư bảo vệ quyền lợi trong các vụ án hành chính (khiếu kiện quyết định hành chính…)',
    content: '<p>Chi tiết về bảo vệ hành chính...</p>',
    category: 'tranh tụng tại tòa án',
  },
  {
    name: 'Luật sư tham gia tố tụng trong các vụ án lao động, kinh tế, thương mại',
    content: '<p>Chi tiết về tố tụng lao động...</p>',
    category: 'tranh tụng tại tòa án',
  },
  // Dịch vụ soạn thảo và rà soát hợp đồng, văn bản pháp lý
  {
    name: 'Soạn thảo hợp đồng thương mại, hợp đồng lao động, hợp đồng thuê nhà…',
    content: '<p>Chi tiết về soạn thảo hợp đồng...</p>',
    category: 'soạn thảo và rà soát hợp đồng, văn bản pháp lý',
  },
  {
    name: 'Rà soát, đánh giá rủi ro pháp lý của hợp đồng',
    content: '<p>Chi tiết về rà soát hợp đồng...</p>',
    category: 'soạn thảo và rà soát hợp đồng, văn bản pháp lý',
  },
  {
    name: 'Soạn thảo đơn từ pháp lý (đơn khởi kiện, đơn khiếu nại, tố cáo, yêu cầu thi hành án…)',
    content: '<p>Chi tiết về soạn thảo đơn từ...</p>',
    category: 'soạn thảo và rà soát hợp đồng, văn bản pháp lý',
  },
  // Dịch vụ pháp lý cho doanh nghiệp
  {
    name: 'Thành lập, giải thể, mua bán, sáp nhập doanh nghiệp',
    content: '<p>Chi tiết về pháp lý doanh nghiệp...</p>',
    category: 'pháp lý cho doanh nghiệp',
  },
  {
    name: 'Xây dựng điều lệ công ty, nội quy lao động, quy chế hoạt động',
    content: '<p>Chi tiết về điều lệ công ty...</p>',
    category: 'pháp lý cho doanh nghiệp',
  },
  {
    name: 'Hỗ trợ pháp lý cho doanh nghiệp trong quá trình hoạt động',
    content: '<p>Chi tiết về hỗ trợ pháp lý...</p>',
    category: 'pháp lý cho doanh nghiệp',
  },
  {
    name: 'Dịch vụ luật sư nội bộ (theo tháng, theo vụ việc)',
    content: '<p>Chi tiết về luật sư nội bộ...</p>',
    category: 'pháp lý cho doanh nghiệp',
  },
  // Dịch vụ hỗ trợ thủ tục hành chính
  {
    name: 'Đăng ký kinh doanh, giấy phép đầu tư, giấy phép lao động cho người nước ngoài',
    content: '<p>Chi tiết về đăng ký kinh doanh...</p>',
    category: 'hỗ trợ thủ tục hành chính',
  },
  {
    name: 'Đăng ký nhãn hiệu, bản quyền, sáng chế',
    content: '<p>Chi tiết về đăng ký nhãn hiệu...</p>',
    category: 'hỗ trợ thủ tục hành chính',
  },
  {
    name: 'Cấp sổ đỏ, chuyển mục đích sử dụng đất, thủ tục sang tên sổ đỏ',
    content: '<p>Chi tiết về sổ đỏ...</p>',
    category: 'hỗ trợ thủ tục hành chính',
  },
  // Dịch vụ Luật sư Riêng cho Cá nhân
  {
    name: 'Chi tiết',
    content: '<p>Chi tiết về luật sư riêng cá nhân...</p>',
    category: 'Luật sư Riêng cho Cá nhân',
  },
  // Dịch vụ Luật sư Riêng cho Doanh nghiệp
  {
    name: 'Chi tiết',
    content: '<p>Chi tiết về luật sư riêng doanh nghiệp...</p>',
    category: 'Luật sư Riêng cho Doanh nghiệp',
  },
];

async function seedServices() {
  try {
    await ServiceModel.deleteMany({});
    await ServiceModel.insertMany(services);
    console.log('Services inserted successfully');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error inserting services:', error);
    mongoose.connection.close();
  }
}

seedServices();