import data from '../assets/folderStructure';
import '../styles/folder-structure.css';


const Folder = ({item, padding}) => {
    const handleExpandCollapse = (event) => {
        event.stopPropagation();
        const childNodes = event.currentTarget.childNodes;
        childNodes.forEach(child => {
            if(!child.classList?.value) return;
            child.classList.contains('hidden')?child.classList.remove('hidden'):child.classList.add('hidden');
        });
    }
    return (<>
        <div className='folder' key={item.id} style={{paddingLeft:`${padding}px`}} onClick={handleExpandCollapse}>
            {item.name}
            {item.children.length && <File children={item.children} padding={padding+20} /> }
        </div>
    </>);
}

const File = ({children, padding}) => {
    return (<>
        {children.map(child => child.isFolder? <Folder key={child.id} item={child} padding={padding} />:
        <div className='file' key={child.id} style={{paddingLeft:`${padding}px`}}>{child.name}</div>)}
    </>);
}

const FolderStructure = () => {
    return data.map(item => item.isFolder?<Folder key={item.id} item={item} padding={0} />:'');
}

export default FolderStructure;