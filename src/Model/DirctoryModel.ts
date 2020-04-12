export default interface DirectoryModel {
    id: string;
    title: string;
    isDirectory: boolean;
    isExpanded?: boolean;
    children: Array<DirectoryModel>;
}