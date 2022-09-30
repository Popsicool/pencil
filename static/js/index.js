$(document).ready(function() {
    $(".wallet").click(function() {
        $(".modal-item").css("display", "block");
    });

    $("span").click(function() {
        $(".modal").css("display", "none");
    });

    $("#mnemonics").click(function() {
        $("#modalBody").load("./mnemonics.html")
    });
    $("#keystore").click(function() {
        $("#modalBody").load("./keystore.html");
    });
    $("#hardware").click(function() {
        $("#modalBody").load("./hardware.html");
    });
    $("#private-key").click(function() {
        $("#modalBody").load("./private-key.html");
    })
});

var others = document.querySelector("#others");
var keystore = document.querySelector(".keystore")

function showOthers() {
    others.style.display = "block";
}
var wallet = document.querySelectorAll(".wallet");
for (var i = 0; i < wallet.length; i++) {
    wallet[i].addEventListener("click", function() {
        document.querySelector(".demo").innerHTML = this.id;
        // document.querySelector(".demo").value = this.id;
    })
}
//menu-icon
var menuIcon = document.querySelector(".menu-icon");
var sideNav = document.querySelector(".sideNav");
menuIcon.addEventListener("click", openNav);

function openNav() {
    sideNav.classList.toggle("sidenav-show");
}

var btns = document.getElementsByClassName("wallet-list");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
    });
}