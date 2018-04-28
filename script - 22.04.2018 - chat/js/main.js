var chat = document.querySelector("#chat");
var text_input = document.querySelector("#text");
var send = document.querySelector("#send");
var bin = document.querySelector(".bin");
var chat_text = Array.prototype.slice.call(document.querySelectorAll(".chat-text"));
var content_chat_text = document.querySelector(".content-chat-text");
var maxi = document.querySelector(".maxi");
var maxi_div = document.querySelector(".content");
var mini = document.querySelector(".mini");
var mini_div = document.querySelector(".container");

function add() {
    var trimmed_value = trim(text_input.value);
    if (trimmed_value[0] == trimmed_value[0].toUpperCase()) {
        var admin = document.createElement("div");
        admin.classList = "admin chat-text";
        chat_text.push(admin);
        var img_text = document.createElement("div");
        img_text.classList = "img-text";
        var text = document.createElement("div");
        text.classList = "text";
        var p = document.createElement("p");
        p.innerText = text_input.value;
        admin.appendChild(img_text);
        admin.appendChild(text);
        text.appendChild(p);
        chat.appendChild(admin);
        content_chat_text.scrollTop = content_chat_text.scrollHeight;
        text_input.value = "";
        dele();
    }
    else if (trimmed_value[0] == trimmed_value[0].toLowerCase()) {
        var user = document.createElement("div");
        user.classList = "user chat-text";
        chat_text.push(user);
        var img_text = document.createElement("div");
        img_text.classList = "img-text";
        var text = document.createElement("div");
        text.classList = "text";
        var p = document.createElement("p");
        p.innerText = text_input.value;
        user.appendChild(img_text);
        user.appendChild(text);
        text.appendChild(p);
        chat.appendChild(user);
        content_chat_text.scrollTop = content_chat_text.scrollHeight;
        text_input.value = "";
        dele();
    }
}
function trim(x) {
    return x.replace(/^\s+|\s+$/gm, '');
}

var select = [];
window.onload = function () {
    dele();
    send.addEventListener("click", function () {
        add();
    })
}
document.addEventListener("keydown", function (e) {
    if (e.which == 13) {
        add();
    }
});

function dele() {
    for (i = 0; i < chat_text.length; i++) {
        (function (index) {
            chat_text[index].onclick = function () {
                console.log(this)
                this.classList.toggle("select");

                if (select.includes(this)) {
                    var id = select.indexOf(this);
                    select.splice(id, 1);
                }
                else {
                    select.push(this);

                }
                if (select == "") {
                    bin.style.display = "none";
                }
                else {
                    bin.style.display = "block";
                }
            };
        })(i);
    };
}

bin.onclick = function trash() {
    if (select != "") {
        for (i = 0; i < select.length; i++) {
            select[i].parentNode.removeChild(select[i]);
            bin.style.display = "none";
        }
    }
    select = [];
}

maxi.onclick = function () {
    maxi_div.style.display = "block";
    mini_div.style.display = "none";


}
mini.onclick = function () {
    mini_div.style.display = "block";
    maxi_div.style.display = "none";
}