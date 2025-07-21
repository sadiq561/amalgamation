import { useEffect, useState } from "react";
import ProductCard from "./ProductCard.jsx";
import '../../styles/pagination.css';
import Pages from "./Pages.jsx";

const Pagination = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [pageSize, setPageSize] = useState(10);

    const fetchData = async () => {
        const data = await fetch("https://dummyjson.com/products?limit=500");
        const json = await data.json();
        setProducts(json.products);
    }

    const startIndex = currentPage*pageSize;
    const endIndex = startIndex + pageSize;

    useEffect(() => {
        fetchData();
    },[]);

    return <div className="pagination"> 
        <h1 className="product-header">Paginated Information</h1>
        <Pages products={products} pageSize={pageSize} 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        setPageSize={setPageSize}/>
        <div className="product-content">
            {products.slice(startIndex, endIndex).map((product, index) => <ProductCard key={index} product={product} />)}
        </div>
    </div>

}

export default Pagination;