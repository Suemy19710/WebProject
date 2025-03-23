import React, {useState, useEffect} from 'react'; 
import '../../styles/client/TinTuc.scss'; 
import news1 from '../../assets/news1.jpg';

const TinTuc = () => {
    const newsItem = {
        image: news1, 
        date: '20/05/2024', 
        title: 'A pandemic may cause life insurance coverage', 
        excerpt: 'In the aftermath of the Covid epidemic, life insurance firms have been more cautious and have tightened ', 
    };

    const newsItems = Array(20).fill(newsItem).map((item, index) => ({
        ...item, 
        id: index + 1, 
    })); 

    // paginiation state

    const [currentPage, setCurrentPage] = useState(1); 
    const itemsPerPage = 8; 
    const totalPages = Math.ceil(newsItems.length/itemsPerPage); 
    const startIndex = (currentPage -1 ) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage; 
    const currentItems = newsItems.slice(startIndex, endIndex); 

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1); 
        }
    }
    const goToNextPage = () => {
        if (currentPage < totalPages){
            setCurrentPage(currentPage + 1); 
        }
    }
    const goToPage = (page) => {
        setCurrentPage(page); 
    }

    // generate array of page numbers 
    const pageNumbers = Array.from({length: totalPages}, (_, index) => index +1); 
    return(
        <div className="tinTuc-container">
                <div className="tinTuc-device">
                    <div className="container-header">
                        <div className="container-header-bg"></div>
                        <div className="container-header-content">
                            <h1>Tin tức & Sự kiện </h1>
                        </div>
                    </div>
                    <div className="container-body">
                        <div className="container-body-content">
                            <div className="news__grid">
                                {currentItems.map((item) => (
                                   <div className="news__card" key={item.id}>
                                   <img src={item.image} alt="News 1" />
                                   <p className="news__date">{item.date}</p>
                                   <h3>{item.title}</h3>
                                   <p className="news__excerpt">{item.excerpt}</p>
                                   <i className="fa-solid fa-arrow-right"></i>
                               </div>
                                ))}   
                            </div>
                            <div className="pagination">
                                <button
                                    onClick={goToPreviousPage}
                                    disabled={currentPage === 1}
                                    className="pagination__button"
                                >
                                    Previous
                                </button>
                                <div className="pagination__numbers">
                                    {pageNumbers.map((page) => (
                                        <button
                                        key={page}
                                        onClick={() => goToPage(page)}
                                        className={`pagination__number ${currentPage === page ? 'active' : ''}`}
                                    >
                                        {page}
                                    </button>
                                    ))}
                                </div>
                                <button
                                    onClick={goToNextPage}
                                    disabled={currentPage === totalPages}
                                    className="pagination__button"
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
    
}
export default TinTuc; 