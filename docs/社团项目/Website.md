# 社团网站
社团网站

### 网站设计

### 服务器搭建
#### IP与域名
活动室的网络具有独立IP地址，但由于学校网络中心对校内IP地址架设网站的限制，无法直接用于架设网站。使用校内IP地址进行网络搭建需要向学校进行报备。之前曾经走过流程但由于当时网站未搭建完成等原因没有下文。可能需要重新申请。

### 网站文件管理
#### 上传文件
在代码根目录下找到docs文件夹，可以自由添加文件夹或者文件。
##### 添加文件夹

在docs文件夹中自行添加文件夹并命名，新建_category_.json文件，可以从其他文件夹中复制过来。里面内容如下：


```jsx title="_category_.json"
{
  "label": "test",  // 导航项或侧边栏项的名称，会显示在导航栏或侧边栏上。
  "position": 4,    // 在导航栏中的位置。数字越小，越靠前。适用于导航栏（非侧边栏）时使用。
  "link": {
    "type": "generated-index",  // 表示链接到一个自动生成的索引页面。Docusaurus 会自动为该目录生成一个索引页，列出该目录下的所有文档。
    "description": "简单实现"  // 这是该自动生成索引页面的描述文字，通常显示在页面顶部，简要说明该页面的内容。
  }
}
```

根据自己的需要，自行修改文件内容。

##### 在文件夹下添加文件

找到目标文件夹，自行添加.md文件。

##### 在文件夹同级目录下添加文件

在docs文件夹中添加.md文件，并在文件开头添加如下代码，数字代表在导航栏中的位置，数字越小，越靠前。

```位置说明"
---
sidebar_position: 1 
---
```

##### 修改文件

找到需要修改的文件，直接替换。

##### 插入图片

若文档中需要插入图片，请将图片放到static/img文件夹中，并按照下面格式引用。

```jsx title="图片引用"
{
  <img src="/hg-docusaurus-public-deoloy-github/img/inv1.png" width="50%" />
}
```


### 上传或者修改完后，进行网站部署

在根目录下输入终端命令：yarn deploy。

如果yarn命令部署报错的话，可以用如下方法再次执行：
```jsx title="网站部署"
{
  GIT_USER=hatexue USE_SSH=true yarn deploy 
}
```

注意：第一次使用上面这个命令就好，后面直接使用yarn deploy命令就好！