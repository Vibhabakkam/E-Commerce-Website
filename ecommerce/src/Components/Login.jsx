import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login(props) {
    const [userData, setUserData] = useState({ email: "", password: "" });
    // console.log(userData, "userData check here");
    const router2 = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        var dataFromLs = JSON.parse(localStorage.getItem("userData"));

        var flag = false;

        for (var i = 0; i < dataFromLs.length; i++) {
            if (dataFromLs[i].email === userData.email && dataFromLs[i].password === userData.password) {
                flag = true;
            }
        }

        if (flag) {

            var user = {};
            user["current-user-email"] = userData.email;
            localStorage.setItem("currentUser", JSON.stringify(user));
            router2('/Home');
            alert("Login sucessful");

        }
        else {
            alert("Email or Password does not match");
        }
    }

    function updatingData(e) {
        var name = e.target.name;
        var value = e.target.value;
        // console.log(e.target.name, e.target.value, "updatingData");
        setUserData({ ...userData, [name]: value })
    }

    return (

        <>
            <div>
                <div>
                    <div onClick={props.onClose}> X </div>
                    <div >

                        <div>
                            <div>Login</div>
                            <div>

                            </div>
                        </div>
                    </div>
                    <form onSubmit={(event) => handleSubmit(event)}>
                        <label>Email</label><br />
                        <input onChange={updatingData} name='email' value={userData.email} type="email" placeholder="Type your Email" /><br />
                        <label>Password</label><br />
                        <input onChange={updatingData} name='password' value={userData.password} type="password" placeholder="Type your Passwrd" /><br />
                        <button>Have a referral code?</button><br />
                        <input id="Rsubmit" type="submit" value="Login" />
                        <div>By creating an account, I accept the Terms & Conditions & Privacy Policy</div>

                    </form>
                </div>
            </div>
        </>
    )

}
export default Login;