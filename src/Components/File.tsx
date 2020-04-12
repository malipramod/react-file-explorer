import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from "@fortawesome/free-solid-svg-icons";

interface FileProps {
    title: string
}
const File: React.SFC<FileProps> = ({ title }) => (
    <ul>
        <FontAwesomeIcon icon={faFile} /> {title}
    </ul>
)

export default File;