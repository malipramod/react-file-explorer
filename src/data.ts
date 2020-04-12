import DirectoryModel from './Model/DirctoryModel';

export const directoryTreeData: Array<DirectoryModel> = [{
    "id": "0",
    "title": "root",
    "isDirectory": true,
    "isExpanded": true,
    "children": [
        {
            "id": "00",
            "title": "src",
            "isDirectory": true,
            "isExpanded": true,
            "children": [
                {
                    "id": "10",
                    "title": "App.tsx",
                    "isDirectory": false,
                    "isExpanded": false,
                    "children":[]
                },
                {
                    "id": "11",
                    "title": "App.css",
                    "isDirectory": false,
                    "isExpanded": false,
                    "children":[]
                },
                {
                    "id": "12",
                    "title": "data.json",
                    "isDirectory": false,
                    "isExpanded": false,
                    "children":[]
                },
                {
                    "id": "13",
                    "title": "Components",
                    "isDirectory": true,
                    "isExpanded": false,
                    "children":[
                        {
                            "id": "20",
                            "title": "Directory.tsx",
                            "isDirectory": false,
                            "isExpanded": false,
                            "children":[]
                        },
                        {
                            "id": "21",
                            "title": "DirectoryTree.tsx",
                            "isDirectory": false,
                            "isExpanded": false,
                            "children":[]
                        },
                        {
                            "id": "22",
                            "title": "File.tsx",
                            "isDirectory": false,
                            "isExpanded": false,
                            "children":[]
                        }
                    ]
                },
                {
                    "id": "14",
                    "title": "Model",
                    "isDirectory": true,
                    "isExpanded": false,
                    "children":[{
                        "id": "14",
                        "title": "DirectoryMode.ts",
                        "isDirectory": false,
                        "isExpanded": false,
                        "children":[]
                    }]
                },
                {
                    "id": "15",
                    "title": "Util",
                    "isDirectory": true,
                    "isExpanded": false,
                    "children":[
                        {
                            "id": "15",
                            "title": "Utility.ts",
                            "isDirectory": false,
                            "isExpanded": false,
                            "children": []
                        }
                    ]
                }
            ]
        },
        {
            "id": "01",
            "title": "public",
            "isDirectory": true,
            "isExpanded": false,
            "children":[
                {
                    "id": "011",
                    "title": "favicon.ico",
                    "isDirectory": false,
                    "isExpanded": false,
                    "children": []
                },
                {
                    "id": "012",
                    "title": "index.html",
                    "isDirectory": false,
                    "isExpanded": false,
                    "children": []
                },
                {
                    "id": "013",
                    "title": "manifest.json",
                    "isDirectory": false,
                    "isExpanded": false,
                    "children": []
                },
                {
                    "id": "014",
                    "title": "robots.txt",
                    "isDirectory": false,
                    "isExpanded": false,
                    "children": []
                }
            ]
        },
        {
            "id": "02",
            "title": "node_modules",
            "isDirectory": true,
            "isExpanded": false,
            "children":[]
        }
    ]
}]