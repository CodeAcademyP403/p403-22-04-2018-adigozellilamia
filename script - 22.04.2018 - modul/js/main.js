function creat_text(select, user_select) {
    var elements = document.querySelectorAll(select);
    var default_text = {
        h1_text: "Head",
        h1_backcolor: "violet",
        h1_fontColor: "white",
        h1_fontSize: null,
        p_text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, debitis!",
        p_backcolor: "transparent",
        p_color: "black",
        p_fontSize: "20px",
        div_borderRadius: "2%",
        div_border: "1px solid violet",
        i_class_name:"fas fa-times",
        i_top:"",
        i_left:"",
        i_right:"",
        i_bottom:"",
        i_color:"white",
        i_font_size:"20px"


    }
    var settings = extend(default_text, user_select);

    for (var element of elements) {
        element.style.positon = "relative";
        element.style.borderRadius = settings.div_borderRadius;
        element.style.border = settings.div_border;
        var h1 = document.querySelector(select+" h1");

        h1.innerText = settings.h1_text;
        h1.style.backgroundColor = settings.h1_backcolor;
        h1.style.fontSize = settings.h1_fontSize;
        h1.style.color = settings.h1_fontColor;
       



        var p = document.querySelector(select+" p"); 
   
        p.innerText = settings.p_text;
        p.style.backgroundColor = settings.p_backcolor;
        p.style.fontSize = settings.p_fontSize;
        p.style.color = settings.p_fontColor;
        

        var i = document.querySelector(select+" i");

        i.style.positon = "absolute";
        i.classList=settings.i_class_name;
        i.style.left=settings.i_left;
        i.style.right=settings.i_right;
        i.style.top=settings.i_top;
        i.style.bottom=settings.i_bottom;
        i.style.color=settings.i_color;
        console.log(settings.i_color)
        i.style.fontSize=settings.i_font_size;
    }

    function extend(o1, o2) {
        for (var item in o2) {
            if (o2.hasOwnProperty(item)) {
                o1[item] = o2[item];
            }
        }
        return o1;
    }

}

var icon = document.querySelectorAll("i");

icon.onclick=function(){

}
for (i = 0; i < icon.length; i++) {
    (function (index) {
        icon[i].addEventListener("click", function () {
            this.parentNode.remove(index)
        });
    })(i);
};