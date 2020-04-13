import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faFolder, faFile } from "@fortawesome/free-solid-svg-icons";
import DirectoryModel from '../Model/DirctoryModel';
import '../App.css'

interface PreviewProps {
    directory: Array<DirectoryModel>;
    workingDirectoryId:string;
    openDirectory: (id: string) => void;
    goBack: (id: string) => void;
}

const Preview: React.SFC<PreviewProps> = ({ directory, workingDirectoryId, openDirectory, goBack }) => {
    return (
        <div>
            {
                workingDirectoryId !== "0" ? <div >
                    <FontAwesomeIcon size="lg" title="Back" className="ActionButton" icon={faArrowLeft} onClick={() => goBack(workingDirectoryId)} />&nbsp;                    
                </div> : null
            }
            <div className="Preview">
                {directory && directory.length > 0 ?
                    directory.map(dir =>
                        <div key={dir.id} className={`Directory ${dir.isDirectory ? "Pointer" : ""}`}>
                            {
                                dir.isDirectory ?
                                    <div onClick={() => openDirectory(dir.id)}>
                                        <FontAwesomeIcon size="2x" icon={faFolder} /> {dir.title}
                                    </div> :
                                    <div>
                                        <FontAwesomeIcon size="2x" icon={faFile} /> {dir.title}
                                    </div>
                            }&nbsp;
                            
                        </div>
                    ) : "Directory is empty"}
            </div>
        </div>
    )
}

export default Preview;