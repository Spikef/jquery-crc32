# jquery-crc32

上传文件前检验文件的crc32码，配合服务器接口, 可以用于防止上传重复文件, 实现所谓秒传。

对于超过5M的文件, 默认只检验前5M数据的crc32码。

很明显, 这需要你的浏览器支持FileReader和TypedArray。

## 示例

```javascript
$(document).ready(function() {
    $('#upload').crc32(function(err, code) {
        if (err) {
            console.log(err);
        } else {
            $('.result').text(code);
        }
    });
});
```

## 说明

你妹的, 面试被人家嫌弃不会写jquery插件了。写个给你看好了, 这算什么了不起的技能么?