这是个maven 项目，直接部署就可以了，或者你改成web也行，因为里面不涉及其他的东西，仅仅是js和html而已。[我的博文地址](https://blog.csdn.net/weixin_40295575/article/details/84142678)

最近闲时一直在尝试好玩的东西，百度AI开发平台也玩过还几次了，之前有尝试做文字转语音，挺好的，用在小程序播放新闻阅读，美滋滋，这次就用他们的人脸检测，其实我有在做实时检测的，但是还没完善又想发博客，所以，写在页面的请求是最快速的。

在此感谢一下[js调用本地摄像头截图并用ajax上传至后台服务器完成交互](https://blog.csdn.net/Rachel_ruiqiu/article/details/78614920?locationNum=5&fps=1)这篇博客，省去了我写前端的痛苦。这评分还是挺准的，因为我丑   哈哈哈。我就不放上我的链接了，毕竟写在前端，暴露出来了，被知道就不好了，[项目地址]()

实现思路
- 去百度IA开发平台申请应用，拿到你appid、秘钥等，这里是简单的操作，可以直接拿两要素去生成access_token，我会将我代码中的这部分删除掉，补上你即可看到实现效果
```js
  $.ajax({
            type: 'POST',
            url: 'https://aip.baidubce.com/rest/2.0/face/v3/detect?access_token=这里填写你生成的东西',
            data: {
                "image" : imgdata,
                "face_field" : "face_shape,face_type,age,beauty,gender",
                "image_type" : "BASE64"
            },
            dataType: 'json',
            contentType: 'application/x-www-form-urlencoded',
            success: function(res){
                var age = res.result.face_list[0].age;
                var beauty = res.result.face_list[0].beauty;
                var sex = res.result.face_list[0].gender.type==="male"?"男":"女";
                var probability = res.result.face_list[0].gender.probability * 100;
                probability = probability + "%";
                alert("检测成功");
                jQuery("#age").val(age);
                jQuery("#beauty").val(beauty);
                jQuery("#sex").val(sex);
                jQuery("#maybe").val(probability);

            },
```
![百度开发平台](https://img-blog.csdnimg.cn/20181116165823126.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MDI5NTU3NQ==,size_16,color_FFFFFF,t_70)


[百度Ai开发平台的文档](https://ai.baidu.com/docs#/Face-API/top)

效果图如下
![在这里插入图片描述](https://img-blog.csdnimg.cn/20181116170857452.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MDI5NTU3NQ==,size_16,color_FFFFFF,t_70)
![我觉得很正确，因为我丑哈哈哈](https://img-blog.csdnimg.cn/20181116171052665.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MDI5NTU3NQ==,size_16,color_FFFFFF,t_70)

真的要好好学会看文档，十分重要

以下就是我做的密谋东西，主要是在后台，更加安全，也更好，用到了OpenCV等，还在完善中。。。。
![在这里插入图片描述](https://img-blog.csdnimg.cn/2018111617034877.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MDI5NTU3NQ==,size_16,color_FFFFFF,t_70)
