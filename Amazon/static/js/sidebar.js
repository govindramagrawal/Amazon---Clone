function show_side_bar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.add("active");
    sidebar.style.left = "0px";
}

function hide_side_bar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.left = "-350px";
    sidebar.classList.remove("active");
}