import React from 'react';
import Directory from './Directory';
import Preview from './Preview';
import DirectoryModel from '../Model/DirctoryModel';
import { toggleVisiblity, createDirFile, openDirectory } from '../Util/Utility';
import '../App.css';

interface OwnProps {
    directory: Array<DirectoryModel>
}

interface OwnState {
    directoryState: Array<DirectoryModel>;
    previewDirectoryState: Array<DirectoryModel>;
    workingDirectoryId: string;
    directoryHistoy: Array<Array<DirectoryModel>>;
}

class DirectoryTree extends React.Component<OwnProps, OwnState> {
    constructor(props: any) {
        super(props);
        this.state = {
            directoryState: this.props.directory,
            previewDirectoryState: this.props.directory,
            workingDirectoryId: "0",
            directoryHistoy: []
        }
        this.toggleVisiblity = this.toggleVisiblity.bind(this);
        this.createDir = this.createDir.bind(this);
        this.createFile = this.createFile.bind(this);
        this.openDirectory = this.openDirectory.bind(this);
        this.goBack = this.goBack.bind(this);
    }

    toggleVisiblity(id: string) {
        const updatedDirectoryState = toggleVisiblity(id, this.state.directoryState);
        this.setState({ directoryState: updatedDirectoryState });
    }

    createDir(id: string) {
        const dirName = prompt("Directory Name");
        if (!dirName) {
            alert('Please provide directory name');
            return;
        }
        const updatedDirectoryState = createDirFile(id, this.state.directoryState, dirName, true);
        this.setState({ directoryState: updatedDirectoryState })
    }
    
    createFile(id: string) {
        const fileName = prompt("File Name");
        if (!fileName) {
            alert('Please provide file name');
            return;
        }
        const updatedDirectoryState = createDirFile(id, this.state.directoryState, fileName, false);
        this.setState({ directoryState: updatedDirectoryState });
    }

    goBack(id: string) {
        const clonedArray = [...this.state.directoryHistoy]
        const [previousHistoy] = clonedArray.splice(-1);
        const restOfHistory = clonedArray.splice(-1, 1);
        this.setState({ previewDirectoryState: previousHistoy, workingDirectoryId: id, directoryHistoy: restOfHistory });

    }

    openDirectory(id: string) {
        let clonedDirectoryHistoy = [...this.state.directoryHistoy]
        clonedDirectoryHistoy.push(this.state.previewDirectoryState);

        this.setState({ directoryHistoy: clonedDirectoryHistoy, workingDirectoryId: id }, () => {
            const updatedPreviewDirectoryState: Array<DirectoryModel> = openDirectory(id, this.state.previewDirectoryState);
            this.setState({ previewDirectoryState: updatedPreviewDirectoryState });
        })
    }

    render() {
        return (
            <div className="Container">
                <div className="Fixed">
                    <ul>
                        {
                            this.state.directoryState.map((dir: DirectoryModel) =>
                                <Directory
                                    key={dir.id}
                                    directory={dir}
                                    toggleVisiblity={this.toggleVisiblity}
                                    createDir={this.createDir}
                                    createFile={this.createFile}
                                />)
                        }
                    </ul>
                </div>
                <div className="FlexItem">
                    <Preview
                        directory={this.state.previewDirectoryState}
                        workingDirectoryId={this.state.workingDirectoryId}
                        openDirectory={this.openDirectory}
                        goBack={this.goBack}
                    />
                </div>
            </div>
        )
    }
}

export default DirectoryTree;
