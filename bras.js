/**
 * Created by sarleon on 16-9-19.
 */
function login_bras(username,password) {
    post_data={
        username:username,
        password:password
    };
    importScripts("jquery.min.js");
    var post_url = "http://p.nju.edu.cn/portal/index.html";

    $.post(post_url, post_data,function (data,status) {
        console.log("return data:"+data);
        console.log("return status:"+status);

    });

}