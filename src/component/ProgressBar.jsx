import '../styles/progress.css';
import { useEffect, useState } from 'react';

const Progress = ({progress}) => {
    const [animatedProgress, setAnimatedProgress] = useState(0);

    useEffect(()=>{
        setTimeout(()=>setAnimatedProgress(progress), 100);
    },[progress]);

    return (<div key={progress} className="outer-div">
        <div className="inner-div" title={`${progress}%`}
        style={{
            transform:`translateX(${animatedProgress-100}%)`,
            color: animatedProgress>4?'white':'black'
            }}>{`${animatedProgress}%`}</div>
    </div>);
}

const ProgressBar = () => {
    const bars = [1, 5, 10, 25, 50, 75, 100];
    return bars.map((progress) => <Progress key={progress} progress={progress} />);
}

export default ProgressBar;