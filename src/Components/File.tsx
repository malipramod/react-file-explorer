import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from "@fortawesome/free-solid-svg-icons";

/**
 * Model for File component
 * title: Name of the file
 */
interface FileProps {
    title: string
}

/**
 * Displays file with icon
 * @param FileProps See #9 
 */
const File: React.SFC<FileProps> = ({ title }) => (
    <ul>
        <FontAwesomeIcon icon={faFile} /> {title}
    </ul>
)

export default File;