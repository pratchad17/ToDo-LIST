function addMore() {
    document.getElementById("error").innerHTML = "";

    const name = document.getElementById("name").value;
    if (name == "") {
        document.getElementById("error").innerHTML = "Please Enter value";
    } else {
        const box = document.getElementById("box");
        const li = document.createElement("li");
        li.textContent = name;

        const a = document.createElement("a");
        a.textContent = "x";
        a.href = "javascript:void(0)";
        a.className = "remove";
        li.appendChild(a);

        const pos = box.firstElementChild;
        // console.log(pos);

        if (pos == null) {
            box.appendChild(li);
        } else {
            box.insertBefore(li, pos);
        }
    }
    document.getElementById("name").value = "";
}
const btn = document.querySelector("ul");
btn.addEventListener("click", function (e) {
    const box = document.getElementById("box");
    const li = e.target.parentNode;
    box.removeChild(li);
});
