console.clear();
// var scores = [5, 10, 9, 20, 88, 42, 65, 14]
// function highestscore(scores){
//     var max = scores[0]
//     for( var x=1; x<scores.length; x++){
//        if(max < scores[x]){
//         max = scores[x];
//        }
//     }
//     return max;
// }
// var done = highestscore(scores)
// console.log(done)


// var scores = [
//     ["shakib", 100],
//     ["rakib", 95],
//     ["mizan", 50],
//     ["ashik", 180]
// ];
// function highestscore(scores){
//     var max = scores[0][0];
//     var max = scores[0][1];
//     for( var x=1; x<scores.length; x++){
//        if(max < scores[x][1]){
//         max = scores[x][1];
//         max = scores[x][0];
//        }
//     }
//     return max;
// }
// var done = highestscore(scores)
// console.log(done)


// var right = 0;
// var worng = 0;
// for ( var i= 1; i<=5; i++){
// var guess = parseInt(prompt("enter number"));
// var random = Math.floor(Math.random() * 5) +1;
// if(guess==random){
//     console.log("you are right");
//     right++;
// }else{
//        console.log("you are lost");
//     worng++;
// }
// }
// document.write ("you are right " + right + " times" + "<br>");
// document.write ("you are wrong " + worng + " times");

// var photo = ["IMG/1.jpg","IMG/2.jpg","IMG/3.jpg"];
// var img = document.querySelector("img")

// count=0;
// function next(){
//     count++
//     if(count >= photo.length){
//         count=0;
//         img.src = photo[count];
//     }else{
//         img.src = photo[count];
//     }
        
// }

// function pre(){
//     count--
//     if(count < 0){
//         count = photo.length - 1;
//         img.src = photo[count];
//     }else{
//         img.src = photo[count];
//     }
        
// }