<%--
  Created by IntelliJ IDEA.
  User: 郑文海
  Date: 2018/11/16
  Time: 9:21
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>在线人脸检测</title>
    <link rel="stylesheet" href="css/style.css">
    <script src="js/jquery-3.2.1.min.js"></script>
    <script src="js/video.js"></script>
</head>
<body>
<div class="uploadimg-group">
    <img src="" id="uploadimg">
    <button class="loadbtn">上传图片</button>
    <button class="uploadbtn">发送检测</button>
</div>
<div class="video_port" id="video_port">
    <video id="video" width="400" height="300"></video>
    <canvas id="vi_canver" width="400" height="300" hidden></canvas>
    <p class="picturebtn">
        <button id="screenshots" class="screenshots">截取图像</button>
        <span class="myshu"></span>
        <button id="close" class="closecamera">关闭摄像头</button>
    </p>
</div>
<div class="txt">
    <label>颜值测评报告</label><br><br>
    <label>年纪:<input id="age"/></label><br><br>
    <label>颜值打分:<input id="beauty"/></label><br><br>
    <label>性别:<input id="sex"/></label><br><br>
    <label>性别可能:<input id="maybe"/></label><br><br>

</div>
</body>
</html>
