function responsiveImages (width, pic_k, elastic_k, maxWidth) {
    var imgWidth = width * pic_k,
        topWidth = (width * pic_k * elastic_k) / 0.8;

    var result = {
        img: Math.ceil(imgWidth),
        maxWidth: Math.ceil(maxWidth)
    };

    if (topWidth < maxWidth) {
        images(topWidth, pic_k, elastic_k,  maxWidth);
    }

    console.log(result);
}
