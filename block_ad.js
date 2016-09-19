/**
 * Created by sarleon on 16-9-18.
 */
function block_baidu_ad() {
    var result_list = document.getElementById("content_left");
    var answer_list1 = document.getElementsByClassName("result");
    var answer_list2 = document.getElementsByClassName("result-op");
   // console.log(result_list);
   // console.log(answer_list1);
    //console.log(answer_list2);
    var length=result_list.childElementCount;
    var ad_array=[];
    for (var i=0;i<length;i++){
        //console.log(result_list.children.item(i).classList);
        if(result_list.children.item(i).classList[0]!="result"){
            if(result_list.children.item(i).classList[0]!='result-op'){
                ad_array.push(i);
            }
        }
    }
    console.log(ad_array);
    for(var j=ad_array.length-1; j>=0;j--){
        result_list.removeChild(result_list.children[ad_array[j]]);
    }

}
function block_google_ad(){


}
block_baidu_ad();
window.location.reload();


