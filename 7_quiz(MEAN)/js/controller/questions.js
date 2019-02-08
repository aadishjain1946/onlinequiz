var i = 0
var questionObject = [];
window.addEventListener("load", initEvents);
function initEvents() {
    document.querySelector("#plus").addEventListener("click", addOptions);
    document.querySelector("#score").addEventListener("change", change);
    document.querySelector("#add").addEventListener("click", addQuestion);
    document.querySelector("#delete").addEventListener("click", deleteQuestion);
    document.querySelector("#clear").addEventListener("click", clearAll);
    var del = document.querySelector("#delete-element");
    del.style.display = "none";
}
function addQuestion() {
    var j = 0;
    var length = questionObject.length;
    if (length == 0)
        questionObject[0] = new Questions();
    else
        questionObject[length] = new Questions();
    var cloneobj = questionObject[length];
    for (let key in cloneobj) {
        if (key[0] == 'o' && j < i) {
            cloneobj[key] = document.querySelector("#" + key).value;
            document.querySelector("#" + key).value = "";
            j++;
        }
        else if (key[0] != 'o') {
            cloneobj[key] = document.querySelector("#" + key).value;
            document.querySelector("#" + key).value = "";
        }
    }
    var opt = document.querySelector("#Options");
    opt.innerHTML = "";
    i = 0;
    printsc();
}
function printsc() {
    // console.log("inside print", questionObject);
    var table = document.querySelector("#cont-table");
    table.innerHTML = "";
    for (let j = 0; j < questionObject.length; j++) {
        var tr = document.createElement("tr");
        var obje = questionObject[j];
        // console.log("abject", obje);
        td = document.createElement("td");
        td.innerHTML = j + 1;
        tr.appendChild(td);
        for (let key in obje) {
            td = document.createElement("td");
            var condcheck = (obje[key] == undefined) ? "-" : obje[key];
            td.innerHTML = condcheck;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}
function addOptions() {
    i++;
    if (i < 7) {
        var a = 1;
        var div = document.createElement("div");
        div.className = 'form-group';
        var lable = document.createElement("lable");
        lable.innerHTML = 'OPTION' + i;
        var input = document.createElement("input");
        input.type = 'text';
        input.className = 'form-control';
        input.placeholder = 'OPTION' + i;
        input.id = 'option' + i;
        var opt = document.querySelector("#Options");
        div.appendChild(lable);
        div.appendChild(input);
        opt.appendChild(div);
    }
    else {
        window.alert("AtMax-6");
    }

}
function change() {
    var rng = document.querySelector("#score").value;
    document.querySelector("#range").innerHTML = rng;
}
function deleteQuestion() {
    var de = document.querySelector("#delete-element");
    de.style.display = "block";
    document.querySelector('#delt').addEventListener("click", delclick);
}
function delclick() {
    var delid = document.querySelector('#del').value;
    // console.log(delid);
    if (delid == "") {
        window.alert("PLACE REQUIRED!!!!!!");
    }
    else {
        var de = document.querySelector("#delete-element");
        de.style.display = "none";
        if (questionObject.length <= 0) {
            window.alert("file empty!!");
        }
        else {
            for (let j = 0; j <= questionObject.length; j++) {
                // console.log(questionObject[j].id);
                if (questionObject[j].id == delid) {
                    questionObject.splice(j, 1);
                    console.log("equal");
                    break;
                }
            }
            console.log(questionObject);
        }
        printsc();
    }
}
function clearAll() {
    if (questionObject.length <= 0) {
        window.alert("file empty!!");
    }
    else {
            questionObject.splice(0,questionObject.length);
        printsc();
    }
}