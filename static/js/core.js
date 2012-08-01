require(["dojo/ready", "js/app"], function (ready, app) {
    ready(function () {
        app.start();
    });
});

//window.onload = function () {
//    require(["js/list"], function(list) {
//        list.render();
//    });
//    
//    var req = new XMLHttpRequest();
//    req.open("GET", "/read", true);
//    req.onreadystatechange = function () {
//        if (req.readyState === 4) {
//            console.log(req.response);
//            var items = JSON.parse(req.response);
//            for (var i = 0; i < items.length; i += 1) {
//                render(items[i]);
//            }
//        }
//    };
//    req.send();
//
//    var submit = document.getElementById("submit"),
//        title = document.getElementById("title"),
//        text = document.getElementById("text");
//
//    submit.onclick = function () {
//        var req = new XMLHttpRequest();
//        req.open("POST", "/new", true);
//        req.setRequestHeader('Content-Type', 'application/json');
//        req.onreadystatechange = function () {
//            if (req.readyState === 4) {
//                console.log("success");
//                //document.location.reload();
//            }
//        };
//        req.send(JSON.stringify({
//            title: title.value,
//            text: text.value
//        }));
//    }
//
//};
//
//render = function (task) {
//    var frag = document.createDocumentFragment(),
//        div = document.createElement("div");
//    div.innerHTML = task.title;
//    frag.appendChild(div);
//    div = document.createElement("div");
//    div.innerHTML = task.text;
//    frag.appendChild(div);
//    document.body.appendChild(frag);
//};
