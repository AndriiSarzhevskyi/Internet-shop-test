window.onload = function(){
    document.getElementById("dropdown_menu").addEventListener("click", dropdown);
    // let buy=document.getElementById("buy");
    // buy.addEventListener("click", buyFunc);
}

function dropdown(){
    let content = document.getElementsByClassName("dropdown");
    content[0].classList.toggle("show");
}

// function buyFunc(){
//     buy.innerText = 'В корзине';
// }





// function myFunction(){
//     jQuery.ajax({
//     url: "../src/index.php",
//       dataType: "html",
//       data: null,
//       success: function(response1) {
//            console.log(response1);
//        }
//      });
// }