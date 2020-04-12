import DirectoryModel from '../Model/DirctoryModel';

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

export const openDirectory = (id: string, previewDirectoryData: Array<DirectoryModel>):any =>{
    return previewDirectoryData.filter(dir => dir.id === id)[0].children;  
}
