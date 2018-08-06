
import Vue from 'vue'
import path from 'path'




// {{banner.image_url | formatImage}}
Vue.filter('formatImage', (url, type = 'normal') => {
    if (!url) return '';
    //https://b-ssl.duitang.com/uploads/item/201807/18/20180718175718_vuShs.thumb.750_0.jpeg
    if ( url.indexOf('.thumb.') > -1 ) {
        // let reg = /\.thumb\.700\_0\_c\./g
        return url.replace('700_0', '750_0')
    }

    let ext = path.extname(url);
    let size = ''
    switch (type) {
        case 'normal': size = '750_0';break;
        case 'small': size = '200_200';break;
        case 'middle': size = '400_400';break;
        default:break;
    }
    return url.replace(ext, '.thumb.'+size+'_c'+ext)
})