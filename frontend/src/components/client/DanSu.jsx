import React, {useState, useEffect} from 'react'; 
import '../../styles/client/DanSu.scss'; 
const DanSu = () => {
    const [content, setContent] = useState(''); 
    useEffect(() => {
        const fetchContent = async () => {
        console.time('loadData'); 

            try {
                const response = await fetch('https://luatkimngoc-vn.onrender.com/api/dan-su');
                console.timeEnd('loadData'); 
                const data = await response.json();
                if (response.ok && data.length > 0) {
                    setContent(data[0].content); 
                } else {
                    setContent('<p>Chưa có nội dung nào được đăng.</p>');
                }
            } catch (error) {
                console.error('Error fetching content:', error);
                setContent('<p>Lỗi khi tải nội dung.</p>');
            }
        };

        fetchContent();
    }, []);
    return(
        <div className="danSu-container">
            <div className="danSu-device">
                <div className="container-header">
                    <div className="container-header-bg"></div>
                    <div className="container-header-content">
                        <h1>Dân Sự</h1>
                    </div>
                </div>
                <div className="container-body">
                    <div className="container-body-bg"></div>
                    <div className="container-body-content">
                        <div className="content">
                           <div dangerouslySetInnerHTML={{__html: content}}></div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DanSu; 