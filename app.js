var firebaseConfig = {
    apiKey: "AIzaSyCrMRSKL5jVLHCXUu6PSugxg70YgZA4Tvg",
    authDomain: "raheel-pertice.firebaseapp.com",
    projectId: "raheel-pertice",
    storageBucket: "raheel-pertice.appspot.com",
    messagingSenderId: "554756930481",
    appId: "1:554756930481:web:4e62641cbd397f05dc5b90",
    measurementId: "G-HFVHQ9SQ2D"
};

firebase.initializeApp(firebaseConfig)
var provider = new firebase.auth.GoogleAuthProvider()

var auth = firebase.auth()
var db = firebase.firestore();

var email = document.getElementById("email")
var password = document.getElementById("password")

var userData = {}
var subhanallah = 0
var alhamdulillah = 0
var kalmaShareef = 0
var duroodePak = 0
var active_tasbeeh = ""
var userid = localStorage.getItem("uid")


function dashborad() {
    var all_tasbbeh = {
        subhanallah,
        alhamdulillah,
        kalmaShareef,
        duroodePak,
    }

    var dashborad_section = document.getElementById("dashborad_section")
    var tasbeeh_section = document.getElementById("tasbeeh_section")
    var login_section = document.getElementById("login_section")
    tasbeeh_section.classList.add("d-none")
    dashborad_section.classList.remove("d-none")
    login_section.classList.add("d-none")
    
}

function tasbeeh(tasbeehp) {
    var all_tasbbeh = {
        subhanallah,
        alhamdulillah,
        kalmaShareef,
        duroodePak,
    };
    var dashborad_section = document.getElementById("dashborad_section")
    var tasbeeh_section = document.getElementById("tasbeeh_section")
    var login_section = document.getElementById("login_section")
    tasbeeh_section.classList.remove("d-none")
    dashborad_section.classList.add("d-none")
    login_section.classList.add("d-none")
    active_tasbeeh = tasbeehp

    var tasbeeh_h = document.getElementById("tasbeeh_heading")
    var tasbeeh_count = document.getElementById("tasbeeh_conting")
    console.log(tasbeehp)
    tasbeeh_h.innerHTML = tasbeehp
    tasbeeh_count.innerHTML = all_tasbbeh[tasbeehp]

}

function plus_minus(e) {
    var tasbeeh_count = document.getElementById("tasbeeh_conting")
    if (e === "+") {
        if (active_tasbeeh == "subhanallah") {
            subhanallah++;
            tasbeeh_count.innerHTML = subhanallah;
        } if (active_tasbeeh == "alhamdulillah") {
            alhamdulillah++
            tasbeeh_count.innerHTML = alhamdulillah;
        } if (active_tasbeeh == "kalmaShareef") {
            kalmaShareef++
            tasbeeh_count.innerHTML = kalmaShareef;
        } if (active_tasbeeh == "duroodePak") {
            duroodePak++
            tasbeeh_count.innerHTML = duroodePak;
        }
    } else {
        if (tasbeeh_count.innerHTML > 0) {
            if (active_tasbeeh == "subhanallah") {
                subhanallah--
                tasbeeh_count.innerHTML = subhanallah;
            } if (active_tasbeeh == "alhamdulillah") {
                alhamdulillah--
                tasbeeh_count.innerHTML = alhamdulillah;
            } if (active_tasbeeh == "kalmaShareef") {
                kalmaShareef--
                tasbeeh_count.innerHTML = kalmaShareef;
            } if (active_tasbeeh == "duroodePak") {
                duroodePak--
                tasbeeh_count.innerHTML = duroodePak;
            }
        }
    }
}


function login() {
    var dashborad_section = document.getElementById("dashborad_section")
    var tasbeeh_section = document.getElementById("tasbeeh_section")
    tasbeeh_section.classList.add("d-none")
    dashborad_section.classList.add("d-none")
    login_section.classList.remove("d-none")
}

function sign_up() {
    var val = document.getElementsByName("sex")
    var gender;

    for (i = 0; i < val.length; i++) {
        if (val[i].checked) {
            gender = val[i].value
        }

    }

    auth.createUserWithEmailAndPassword(email.value, password.value)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            var data = {
                first: document.getElementById("first_name").value,
                last: document.getElementById("sur_name").value,
                email: document.getElementById("email").value,
                password: document.getElementById("password").value,
                day: document.getElementById("day").value,
                month: document.getElementById("month").value,
                year: document.getElementById("year").value,
                sex: gender,
                uid: user.uid
            }
            // Add a second document with a generated ID.
            db.collection("users").add(data)
                .then((docRef) => {
                    console.log("Document written with ID: ", docRef.id);
                })
                .catch((error) => {
                    console.error("Error adding document: ", error);
                });
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        });
}
function sign_up() {
    var login_section_block = document.getElementById("login_section_block")
    var sign_up_section = document.getElementById("sign_up_section")
    login_section_block.classList.add("d-none")
    sign_up_section.classList.remove("d-none")
}

function login_page() {
    var login_section_block = document.getElementById("login_section_block")
    var sign_up_section = document.getElementById("sign_up_section")
    login_section_block.classList.remove("d-none")
    sign_up_section.classList.add("d-none")
}

function login_account() {
    var email = document.getElementById("email_l").value
    var password = document.getElementById("password_l").value
    var log_out = document.getElementById("log_out")

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            // ...
            console.log("yes", user)
            localStorage.setItem("uid", user.uid)


        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
        });
}


function reload() {
    db.collection("users").where("uid", "==", userid)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data().first);

                var data_login_f = document.createTextNode(doc.data().first)
                var data_login_l = document.createTextNode(doc.data().last)
                log_out.classList.remove("d-none")


                var log_out_btn = document.getElementById("log_out_btn")
                var log_out_first = document.getElementById("log_out_first")
                var log_out_last = document.getElementById("log_out_last")

                var dashborad_section = document.getElementById("dashborad_section")
                var login_section_block = document.getElementById("login_section_block")
                var sign_up_section = document.getElementById("sign_up_section")
                login_section_block.classList.add("d-none")
                dashborad_section.classList.remove("d-none")

                sign_up_section.classList.add("d-none")

                log_out_first.innerHTML = ""
                log_out_last.innerHTML = ""
                log_out_btn.innerHTML = "Log Out"

                log_out_first.appendChild(data_login_f)
                log_out_last.appendChild(data_login_l)

            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
}
reload()
function save() {
    var all_tasbbeh = {
        subhanallah,
        alhamdulillah,
        kalmaShareef,
        duroodePak,
    };
    Object.keys(all_tasbbeh).map((key) => {
        db.collection(key)
            .where("uid", "==", userid)
            .get()
            .then((res) => {
                if (res.empty) {
                    // Add a new entry if none exists
                    db.collection(key)
                        .add({
                            count: all_tasbbeh[key],
                            uid: userid,
                        })
                        .then((doc) => {
                            console.log(`${key} count saved with ID: `, doc.id);
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                } else {
                    // Update the existing entry
                    res.forEach((doc) => {
                        db.collection(key).doc(doc.id).set({
                            count: all_tasbbeh[key],
                            uid: userid,
                        });
                    });
                }
            })
            .catch((error) => {
                console.log(error);
            });
    });
}