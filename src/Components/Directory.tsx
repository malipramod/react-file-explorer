import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faFolderPlus, faCopy } from "@fortawesome/free-solid-svg-icons";
import DirectoryModel from '../Model/DirctoryModel';
import File from './File';
import '../App.css';

/**
 * Props recieved by Directory component 
 * Directory: Current Directory
 * toggleVisiblity(id): Shows/Hides directory
 * createDir(id): Creates Directory
 * createFile(id): Creates a file
 */
interface DirectoryProps {
    directory: DirectoryModel;
    toggleVisiblity: (id: string) => void;
    createDir: (id: string) => void;
    createFile: (id: string) => void;
}

/**
 * Displays Directory or File component depending on type 
 * Reuses same component to child directories and File Component
 * @param DirectoryProps See interface #15
 */
const Directory: React.SFC<DirectoryProps> = ({ directory, toggleVisiblity, createDir, createFile }) => (
    <ul className='RemoveListStyle'>
        <li className="Pointer" >
            <span onClick={() => toggleVisiblity(directory.id)}>
                <FontAwesomeIcon icon={faFolder} /> <b>{directory.title}</b>
            </span> &nbsp;            
            <FontAwesomeIcon title="Create new Directory" icon={faFolderPlus} onClick={()=>createDir(directory.id)}/>&nbsp;
            <FontAwesomeIcon title="Crete new File" icon={faCopy} onClick={()=>createFile(directory.id)}/>
        </li>
        <div className={directory.isExpanded ? 'Expanded' : 'NotExpanded'}>
            {directory.children.map(dir => dir.isDirectory ?
                <Directory
                    key={dir.id}
                    directory={dir}
                    toggleVisiblity={toggleVisiblity}
                    createDir={createDir}
                    createFile={createFile}
                /> :
                <File key={dir.id} title={dir.title} />)}
        </div>
    </ul>
)

export default Directory;
