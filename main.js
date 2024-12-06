let signUpName = document.getElementById('signUpName');
let signUpEmail = document.getElementById('signUpEmail');
let signUpPassword = document.getElementById('signUpPassword');
let EmailIn = document.getElementById('name')
let password = document.getElementById('password')
let logInUser = ''
let bt = document.getElementById('signUpbutton');
let toStoreArr = [];
if (localStorage.getItem('users') != null) {
    toStoreArr = JSON.parse(localStorage.getItem('users'))
}
function login() {
    let signInArr = [];

    let signIn = {
        Email: EmailIn.value,
        passwordIn: password.value
    }

    if (EmailIn.value == '' || password.value == '') {
        document.getElementById('required').innerHTML = "All input is required"
    }
    else {
        signInArr.push(signIn)
        //console.log(signInArr)
        for (let i = 0; i < toStoreArr.length; i++) {
            // console.log(signInArr[0].EmailIn);
            if (signInArr[0].Email == toStoreArr[i].email && signInArr[0].passwordIn == toStoreArr[i].password) {
                //console.log('ok')
                localStorage.setItem('corresctUserName', toStoreArr[i].name)
                return true;

            }

        }
    }
}
function check() {
    if (login()) {//   مطلوب اعمل دي في صفحه جديد
        logInUser = localStorage.getItem('corresctUserName');
        //console.log("heloooooo     " + localStorage.getItem('corresctUserName'));
        document.getElementById('cont').innerHTML =`<h1>Welcom !${logInUser}</h1>`
    }
    else {
        //console.log('user not found')
        document.getElementById('required').innerHTML = "incorrect email or password"

    }
}
function existOrNo(){
    let isExist  = [];

    let ifOk={
        okEmail: signUpEmail.value,
        okPassword:signUpPassword.value

    }
    isExist.push(ifOk)
    for (let i = 0; i < toStoreArr.length; i++) {
        // console.log(signInArr[0].EmailIn);
        if (isExist[0]. okEmail == toStoreArr[i].email) {
            document.getElementById('requiredInput').innerHTML = "user already exist"
            console.log("exist")
            return false;
        }

}
}

function signUp() {
    let sign = {
        name: signUpName.value,
        email: signUpEmail.value,
        password: signUpPassword.value
    }
    if (signUpName.value == '' || signUpEmail.value == '' || signUpPassword.value == '') {
        document.getElementById('requiredInput').innerHTML = "All input is required"

    }  else if(!existOrNo()){
                console.log("Not exist")

                toStoreArr.push(sign)
                // console.log(sign)
                 localStorage.setItem('users', JSON.stringify(toStoreArr));
                document.getElementById('requiredInput').innerHTML = "success"
           
            }else{
                console.log("tamam")


            }

    

    clear();
}
function clear() {
    signUpName.value = '';
    signUpEmail.value = '';
    signUpPassword.value = '';
}




