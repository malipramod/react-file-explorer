import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faFolder, faFile } from "@fortawesome/free-solid-svg-icons";
import DirectoryModel from '../Model/DirctoryModel';
import '../App.css'

/**
 * Data model for Preview
 * directory: selected directory and it's children
 * workingDirectoryId: Currently opened directory(Preview)
 * openDirectory(id): Opens a sub-directory
 * goBack(): Go to parent directory
 */
interface PreviewProps {
    directory: Array<DirectoryModel>;
    workingDirectoryId:string;
    openDirectory: (id: string) => void;
    goBack: () => void;
}

/**
 * Directory Preview Component
 * @param PreviewProps See #14 
 */
const Preview: React.SFC<PreviewProps> = ({ directory, workingDirectoryId, openDirectory, goBack }) => {
    return (
        <div>
            {
                workingDirectoryId !== "0" ? <div >
                    <FontAwesomeIcon size="lg" title="Back" className="ActionButton" icon={faArrowLeft} onClick={() => goBack()} />&nbsp;                    
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