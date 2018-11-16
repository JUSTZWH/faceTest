$(document).ready(function(){
    // 这里设置一个全局变量， 作为图像base64
    var imgdata = null;
    $('.loadbtn').click(function(){
        jQuery('.video_port').show();
        function $(elem) {
            return document.querySelector(elem);
        };

        var canvas = document.getElementById("vi_canver");
        var context = canvas.getContext("2d");
        var video = $('#video'),
            screen = $('#screenshots'),
            close = $('#close'),
            mediaStream;

        //打开摄像头主要用到下面的getUserMedia方法，用来将获取到的媒体流传入video标签中
        navigator.mediaDevices.getUserMedia({
            video: true
        }).then(function(stream) {
            // 这里面写成功的回调函数
            console.log(stream);
            mediaStream = typeof stream.stop === 'function' ? stream : stream.getTracks()[1];
            video.src = (window.URL || window.webkitURL).createObjectURL(stream);
            video.play();
        }).catch(function(error) {
            // 这里是失败的回调
            console.log(error);
        })
        // 这里截取图片的原理为截取video画面中的当前帧，然后使用canvas中drawImage方法将内容绘至canvas中
        screen.addEventListener('click', function() {
            context.drawImage(video, 0, 0, 400, 300);
            var type = 'jpeg';
            //在这里我直接将canvas中的内容转化为base64格式，传入到需要显示的img中
            imgdata = canvas.toDataURL(type)
            jQuery("#uploadimg").attr("src",imgdata);
        }, false);
        // 关闭摄像头
        close.addEventListener('click', function() {
            mediaStream && mediaStream.stop();
            jQuery('.video_port').hide();
        }, false);
    });

    $('.uploadbtn').click(function(){
        imgdata = imgdata.split(',')[1];
        $.ajax({
            type: 'POST',
            url: 'https://aip.baidubce.com/rest/2.0/face/v3/detect?access_token=这里改成你的秘钥',
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
            error: function(data){
                alert('失败，请重试');
            }
        })
    })

})