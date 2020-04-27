
/**
 * Directoy Data Model
 * id: unique id for file/directory
 * title: name of directory or file
 * isDirectory: file or directory identifier (true = Directory, false = file)
 * isExapnded: If Directory, is it exapnaded or collapsed.
 * chidren: If file there chidrent will be [], for Directory it may or may not contains sub directory/children
 */
export default interface DirectoryModel {
    id: string;
    title: string;
    isDirectory: boolean;
    isExpanded?: boolean;
    children: Array<DirectoryModel>;
}