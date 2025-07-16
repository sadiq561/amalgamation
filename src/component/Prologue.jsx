import '../styles/prologue.css';
import { useState } from 'react';
import ImageViewer from './ImageViewer';

const items = [{name:"Image Viewer", id:"ImgViewer"}, {name:"Folder Structure", id:"FolderStr"}];

const Prologue = function () {
    const [module, setModule] = useState('prologue');

    const navigateToModule = (event) => {
        const className = event.currentTarget.classList.value.replaceAll('tile ','')
        setModule(className);
    }

    const isActiveClass = (context) => {
        return context === module;
    }
    
    return (<>
        <div className={`prologue ${isActiveClass('prologue')?'':'hidden'}`} >
            {items.map((item,i) => <div key={item.id} className={`tile ${item.id}`} onClick={navigateToModule}>{item.name}</div>)}
        </div>
        <button className={`back-button ${isActiveClass('prologue')?'hidden':''}`} onClick={()=>setModule('prologue')}>Back</button>
        <div className={`module ${isActiveClass('ImgViewer')?'':'hidden'} ImgViewer`} key='ImgViewer'>
            <ImageViewer />    
        </div>
       
        
    </>);
}

export default Prologue;