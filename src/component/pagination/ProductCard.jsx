const ProductCard = ({product}) => {
    return (<div className="product-card" key={product.id}>
        <img src={product.thumbnail} alt={product.title} className="product-img"/>
        <span className="product-title">{product.title}</span>
    </div>);
}

export default ProductCard;