

function dashborad() {
    var dashborad_section = document.getElementById("dashborad_section")
    var tasbeeh_section = document.getElementById("tasbeeh_section")
    var login_section = document.getElementById("login_section")
    tasbeeh_section.classList.add("d-none")
    dashborad_section.classList.remove("d-none")
    login_section.classList.add("d-none")
}

function tasbeeh(tasbeehp) {
    // var all_tasbbeh = {
    //     subhanallah,
    //     alhamdulillah,
    //     kalmaShareef,
    //     duroodEPak,
    // };
    var dashborad_section = document.getElementById("dashborad_section")
    var tasbeeh_section = document.getElementById("tasbeeh_section")
    var login_section = document.getElementById("login_section")
    tasbeeh_section.classList.remove("d-none")
    dashborad_section.classList.add("d-none")
    login_section.classList.add("d-none")
    var tasbeeh_h = document.getElementById("tasbeeh_heading")
    var tasbeeh_count = document.getElementById("tasbeeh_conting")
    console.log(tasbeehp)
    tasbeeh_h.innerHTML = tasbeehp
    tasbeeh_count.innerHTML = 0
}

function plus() {
    var tasbeeh_count = document.getElementById("tasbeeh_conting")
    tasbeeh_count.innerHTML ++
}

function minus() {
    var tasbeeh_count = document.getElementById("tasbeeh_conting")
    tasbeeh_count.innerHTML --
    if(tasbeeh_count.innerHTML <= 0){
        tasbeeh_count.innerHTML = 0
    }
}

function login(){
    var dashborad_section = document.getElementById("dashborad_section")
    var tasbeeh_section = document.getElementById("tasbeeh_section")
    tasbeeh_section.classList.add("d-none")
    dashborad_section.classList.add("d-none")
    login_section.classList.remove("d-none")
}