### There are only a few layers obviously, why the PSD file will be so big?

***
There are just a few layers, do not add any big picture, but the PSD files are unexpectedly big, And computers are often overloaded, even you can not preview the PSD file.

In fact you can see the culprit:

```
「 File 」——「 File Info... 」——「 Row Data 」
```

![rdf:li](http://or1yzhu6r.bkt.clouddn.com/WechatIMG205.png)

The data showed by the picture is the history of image operation data, which is called metadata. There are probably tens of thousands of the data that we did not use. The similar metadata is also available in the layers.
There are some script code or tools on the Internet, which only clean up the outermost metadata, without much effect.<br>
ENMetadataCleaner can help you clean up the metadata completely.


#### Instructions

* [Download the zip](https://github.com/yyued/ENMetadataCleaner/archive/master.zip);
* Open the PSD file that you need to clean up the metadata in Photoshop;
* 『File』 >>> 『Scripts』 >>> 『Browse...』;
* Select the ENMetadataCleaner.jsx;
* Wait a moment;
* Finish clean up.

#### Description
* The waiting time depends on your file size and computer configuration, which typically takes a few minutes.
* It is worth.


```
---------------- 中英文分割线 ------------------
```


### 明明只有几个图层 PSD 文件总是动不动以 G 为单位？

***
明明就几个图层，并没有引入什么大型图片，但是 PSD 文件却异常巨大，而且用起来经常卡顿，甚至在 Mac 下都无法正常预览。<br>
很多人被这个问题困扰过。<br>
发 psd 文件的时候都会开始怀疑人生，怀疑资源中是不是混入了什么不干净的(jiàn)东(guǐ)西(lé)🌚。
罪魁祸首其实看得见摸得着：

```
「 文件 」——「 文件简介 」——「 原始数据 」
```

![rdf:li](https://pic3.zhimg.com/v2-7de17a5467833e87f67e8996c565307e_b.png)

图片展示的这堆东西，是被保存在文档中的历史图像的操作数据，被称为元数据，有数千行之多，并且子图层中也存在，可以说是子子孙孙，无穷匮也。
网上有一些脚本代码或者工具，只清除了最外层的数据，并没有什么太大的效果，ENMetadataCleaner 是个能够完全清除操作信息的脚本。


#### 使用方法

* [下载 zip 包](https://github.com/yyued/ENMetadataCleaner/archive/master.zip)；
* 在 Photoshop 中打开需要瘦身的 PSD 文件；
* 菜单栏在选择 『文件』 >>> 『脚本』 >>> 『浏览』；
* 选择 zip 包解压后得到的 ENMetadataCleaner.jsx；
* 喝杯咖啡，回来；
* 保存文件，完成。

#### 说明
* 等待时间跟你的文件大小和电脑配置有关，一般都需要几分钟。
* 脚本执行完毕后你就可以看到源文件变得超级小，实测 900M 变成 10M+ 。
* Mac 系统的预览效果也出来了，操作起来也不卡了，腰好腿好精神好。






