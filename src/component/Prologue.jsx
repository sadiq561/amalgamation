import '../styles/prologue.css';
import { useState } from 'react';
import ImageViewer from './ImageViewer';
import FolderStructure from './FolderStructure';
import ProgressBar from './ProgressBar';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

const items = [{name:"Image Viewer", id:"ImgViewer",component:<ImageViewer />},
    {name:"Folder Structure", id:"FolderStr",component:<FolderStructure />},
    {name:"Progress Bar", id:"ProgressBar",component:<ProgressBar />}];

const Prologue = function () {
    const [module, setModule] = useState('prologue');
    const navigate = useNavigate();
    const location = useLocation();

    const navigateToModule = (event) => {
        const className = event.currentTarget.classList.value.replaceAll('tile ','')
        setModule(className);
        navigate(`/${className === 'prologue'?'':className}`);
    }
    
    const goToPrologue = () => {
        setModule('prologue');
        location.pathname = '/';
        navigate('/');
    }

    return (
        <Routes>
            <Route path='/' element={<div key={module} className={`prologue`} >
                <h1 className="header">Sadiq's Apps</h1>
                {items.map((item,i) => <div key={item.id} className={`tile ${item.id}`} onClick={navigateToModule}>{item.name}</div>)}
            </div>} />
            {items.map((item) => 
                <Route path={`/${item.id}`} element={<div >
                    <button  className={`back-button`} onClick={goToPrologue}>Back</button>        
                    <div className={`module ${item.id}`} key={item.id}>
                        {item.component}  
                    </div>
                </div>} />)}
        </Routes>
    );
}

export default Prologue;