var istuts = document.querySelector('h5')

var btn = document.querySelector('#add')
flag = 0;
// var remfri=document.querySelector('#Remove')

add.addEventListener("click", function () {
    if (flag == 0) {
        istuts.innerHTML = 'friends'
        istuts.style.color = 'green'
        // console.log("haa jii");
        btn.innerHTML = "Remove Friends"
        btn.style.backgroundColor = 'gray'
        flag = 1
    } else {
        istuts.innerHTML = 'stanger'
        istuts.style.color = 'red'
        btn.innerHTML = "ADD Friends"
        btn.style.backgroundColor = 'lightseagreen'

        // console.log("haa jii hogya remove");
        flag = 0
    }

})



// cd.addEventListener("dblclick", function () {
//     console.log(cd);
//     // tg.style.transform = 'translate(-50%, -50%) scale(2)'
//     tg.style.backgroundColor='red'
//     //    tg.innerHTML="hlo"
// })

var cd = document.querySelector('#card')

var tg = document.querySelector("#love")
var ab=document.querySelector("#arya")

tg.addEventListener("dblclick", function () {
    console.log(cd);


tg.innerHTML='<img id="arya" style="transform: scale(2);" src="download.png" alt="">'


ab.style.transform = 'translate(-50%, -50%) scale(2)'

    // tg.style.backgroundColor='red'
    //    tg.innerHTML="hlo"
})
















// remfri.addEventListener("click", function(){
//     istuts.innerHTML='Stranger'
//     istuts.style.color='red'
// })