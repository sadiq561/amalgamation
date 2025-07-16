
import { useEffect, useState } from "react";

const data = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcxFzaLt4zNFLeLSZvnFHZqXCbcyM8k8GZsQ&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQLATyZoJPWJn_beC_ajy7f1UM5NaL7kWWQg&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsx7rxjKkQdlDXk3gOSN_iG9tPYIQ55JSgeQ&s'
];

const ImageViewer = () => {
    const [index, setIndex] = useState(0);

    const handleNextClick = () => {
        setIndex((index+1)%data.length);
    }

    const handlePreviousClick=() => {
        setIndex(!index?data.length-1:index-1);
    }

    useEffect(() => {
        const timer = setTimeout(()=> {
           // handleNextClick();
        }, 2000);
       return () => {clearTimeout(timer)};
    }, [index]);

    return (<div className="image-container">
        <button onClick={handlePreviousClick}>Previous</button>
        {data.map((url,i) => <img key={i} className= {index!==i?'hidden':''} src={url} />)}
        <button onClick={handleNextClick}>Next</button>
    </div>);
}

export default ImageViewer;