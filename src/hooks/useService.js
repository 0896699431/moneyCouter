export default () => {
    function titleIndexOfArr(
        title,
        a,
        b = null,
        c = null,
        d = null,
        e = null,
        f = null,
        g = null,
        h = null,
        k = null
    ) {
        if (b != null) a += b;
        if (c != null) a += c;
        if (d != null) a += d;
        if (e != null) a += e;
        if (f != null) a += f;
        if (g != null) a += g;
        if (h != null) a += h;
        if (k != null) a += k;

        title = title.toUpperCase();
        title = title.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
        title = title.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
        title = title.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
        title = title.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
        title = title.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
        title = title.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
        title = title.replace(/Đ/g, "D");
        title = title.replace(/ /g, "");
        title = title.replace(/-/g, "");
        title = title.replace(/,/g, "");

        a = a.toUpperCase();
        a = a.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
        a = a.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
        a = a.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
        a = a.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
        a = a.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
        a = a.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
        a = a.replace(/Đ/g, "D");
        a = a.replace(/ /g, "");
        a = a.replace(/-/g, "");
        title = title.replace(/,/g, "");

        if (a.indexOf(title) > -1) return true;
        else return false;
    }
    function sumObject(data, key) {
        let tong = 0;
        data.map(function (value) {
            tong += Number(value[key]);
        });
        return tong;
    }
    return [titleIndexOfArr, sumObject];
};