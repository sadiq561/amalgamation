import '../../styles/pagination.css'
const Pages = ({products, pageSize, setCurrentPage, currentPage, setPageSize}) => {
    const pageSizes = [10, 20, 30, 50]
    const totalPages = Math.ceil(products.length/pageSize);

    const handlePageClick = (event) => {
        const pageNumber = Number(event.currentTarget.value);
        setCurrentPage(pageNumber);
    }

    const handleNextClick = () => {
        setCurrentPage(prev => prev + 1);
    }

    const handlePrevClick = () => {
        setCurrentPage(prev => prev - 1);
    }

    const handlePageSizeChange = (event) => {
        const n = Number(event.target.value);
        const startIndex = pageSize*currentPage; 
        setPageSize(n);
        setCurrentPage(Math.floor(startIndex/n));
    }

    return (<>
        <div className="product-pages">
            <button disabled={currentPage===0} 
            className="page-button"
            onClick={handlePrevClick}>Prev</button>
            {[...Array(totalPages).keys()].map((n) => <button key={n} 
                            className={`page-button ${currentPage === n?'active':''}`}
                            onClick={handlePageClick}
                            value={n}>{n + 1}</button>)}
            <button disabled={currentPage===totalPages - 1}
             className="page-button"
             onClick={handleNextClick}>Next</button>
             <div className="page-size">Page Size
                <select className="page-select" onChange={handlePageSizeChange}>
                    {pageSizes.map(n=><option key={n} value={n}>{n}</option>)}
                </select>
            </div>
        </div>
    </>)
}

export default Pages;