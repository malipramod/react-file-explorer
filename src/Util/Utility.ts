import DirectoryModel from '../Model/DirctoryModel';

/**
 * Toggles directory's visiblity in Directory Tree
 * @param id unique directoryId that need to be hidden/shown
 * @param directoryData Current state of the directory data
 */
export const toggleVisiblity = (id: string, directoryData: Array<DirectoryModel>) => {
    directoryData.forEach((d: DirectoryModel) => {
        if (d.id === id) {
            d.isExpanded = !d.isExpanded;
            return d;
        } else {
            toggleVisiblity(id, d.children);
        }
    });
    return directoryData;
}

/**
 * Create file or directory
 * @param id Unique directoryId
 * @param directoryData Currnet Directory state
 * @param title Name of the directory/file to be created
 * @param isDirectory true = directory, false = file
 */
export const createDirFile = (id: string, directoryData: Array<DirectoryModel>, title: string, isDirectory: boolean) => {
    directoryData.forEach((d: DirectoryModel) => {
        if (d.id === id) {
            let newDir: DirectoryModel = {
                id: Date.now().toString(),
                title: title,
                isDirectory: isDirectory,
                isExpanded: false,
                children: []
            };
            d.children.push(newDir);
            return d;
        } else {
            createDirFile(id, d.children, title, isDirectory);
        }
    });
    return directoryData;
}

/**
 * Opens directory 
 * @param id Unique directoryId
 * @param previewDirectoryData Current directory state of preview UI
 */
export const openDirectory = (id: string, previewDirectoryData: Array<DirectoryModel>):any =>{
    return previewDirectoryData.filter(dir => dir.id === id)[0].children;  
}
