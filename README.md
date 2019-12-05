### 生成当前目录的目录树JSON

1. 调用过程 

console.log(JSON.stringify(generateDirectories(__dirname), null, '\t'))

2. 调用结果
```javascript

[
  {
    "name": "D:\\code\\node\\l-traverse-directories\\index.js",
    "tag": "file"
  },
  {
    "name": "D:\\code\\node\\l-traverse-directories\\package.json",
    "tag": "file"
  },
  {
    "name": "D:\\code\\node\\l-traverse-directories\\src",
    "tag": "dir",
      "children": [
        {
          "name": "D:\\code\\node\\l-traverse-directories\\src\\src.txt",
          "tag": "file"
        }
      ]
  }
]
```