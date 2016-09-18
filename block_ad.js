/**
 * Created by sarleon on 16-9-18.
 */
function block_ad() {
    var result_list = document.getElementById("content_left");
    var answer_list1 = document.getElementsByClassName("result");
    var answer_list2 = document.getElementsByClassName("result-op");
   // console.log(result_list);
   // console.log(answer_list1);
    //console.log(answer_list2);
    for (var i=0;i<result_list.childElementCount;i++){
        console.log(result_list.children[i].attributes);
      //  console.log(result_list.children[i]);
        if(result_list.children[i].attributes['class']=="result"){

        }
    }
}
block_ad();




