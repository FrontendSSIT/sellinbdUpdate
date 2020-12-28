import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import firebaseConfig from '../FireBase/firebase.config';
import firebase from 'firebase/app';
import "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgetPassword = () => {
    const [success, setSuccess] = useState(true);
    const [password, setPassword] = useState(false);
    const [code, setCode] = useState(false);

    const [error, setError] = useState([]);
    const history = useHistory();
    const handleBlur = (e) => {
        const setNewInfo = { ...info };
        setNewInfo[e.target.name] = e.target.value;
        setInfo(setNewInfo);
    }
    const [info, setInfo] = useState({});
    console.log(info)

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
//recaptchaVerifier
    let setUpRecaptcha = () => {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
            "recaptcha-container",
            {
                size: "invisible",
                callback: function (response) {
                    console.log("Captcha Resolved");
                    this.onSignInSubmit();
                },
                defaultCountry: "IN",
            }
        );
    };
//send phone message
    const submitPhoneNumberAuth = () => {
        toast("Wait Few Moments");
        setUpRecaptcha()
        var phoneNumber = `+88${info.phoneNumber}`;
        var appVerifier = window.recaptchaVerifier;
        firebase
            .auth()
            .signInWithPhoneNumber(phoneNumber, appVerifier)
            .then(function (confirmationResult) {
                setSuccess(false)
                setCode(true)
                window.confirmationResult = confirmationResult;
            })
            .catch(function (error) {
                setError(error)
                console.log(error);
            });
    }

    //eye button 
    const [passwordShow, setPasswordShow] = useState(false);
    const handlePasswordShow = () => {
        setPasswordShow(true)
    }

    const handlePasswordOff = () => {
        setPasswordShow(false)
    }
    //eyebuton close

    const submitPhoneNumberAuthCode = () => {
        toast("Wait Few Moments");
        var code = info.code;
        let optConfirm = window.confirmationResult
        optConfirm
            .confirm(code)
            .then(function (result) {
                setPassword(true)
                setCode(false)
                setError("")
            })
            .catch(function (error) {
                setError(error)
                console.log(error);
            });
    }
    const handlePasswordChange = () => {
        toast("Wait Few Moments");
        const formData = new FormData()
        formData.append('usernumber',info.phoneNumber);
        formData.append('password', info.password);
        fetch('http://sellinbd.com/api330088/user/updatePassword.php', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                history.push("/login")
            })
            .catch(error => {
                setError(error)
                console.error(error)
            })
    }
    return (
        <div>
        
            <div class="limiter">
                <div class="container-login100 m-5">
                    <div class="wrap-login100">
                        <form>
                            <span class="login100-form-title p-b-26">
                                <Link to="/"> <img src="" id="lexdiary-logo" height="auto" width="100px" alt="" /> </Link>
                            </span>
                            {
                                error && <p style={{ color: 'red', paddingBottom: "30px", textAlign: "center" }}> {error.message} </p>
                            }
                            {
                                success ?
                                    <>
                                        <div class="form-group" >
                                            <label >User Number</label>
                                            <input class="form-control" value="+88" readOnly style={{ position: "absolute", color: "#0f3f70", width: "40px", padding: "0 5px", background: "white" }} ></input>
                                            <input class="form-control" maxlength="11" minlength="11" type="text" name="phoneNumber" onChange={handleBlur} style={{ padding: "0 50px" }} placeholder="Enter Your number"></input>
                                            {/* <span class="focus-input100" data-placeholder="User Number"></span> */}

                                        </div>

                                        <div class="form-group">
                                            {/* <div class="wrap-login100-form-btn"> */}
                                            {/* <div class="login100-form-bgbtn"></div> */}
                                            <button type="button" class="btn  mt-2 w-50" style={{background:'#3F9DFF',color:'#fff'}} onClick={submitPhoneNumberAuth} >
                                                Submit
                                            {/* onClick={submitPhoneNumberAuth} */}
                                                {/* data-toggle={success ? "modal" : ""} data-target={success ? "#exampleModal" : ""} */}
                                            </button>
                                            <ToastContainer
                                                position="top-center"
                                                autoClose={5000}
                                                hideProgressBar={false}
                                                newestOnTop={false}
                                                closeOnClick
                                                rtl={false}
                                                pauseOnFocusLoss
                                                draggable
                                                pauseOnHover
                                            />
                                            {/* </div> */}
                                        </div>
                                    </>
                                    :
                                    <p></p>
                            }
                            {
                                code ?
                                    <div class="form-group" data-validate="Enter password">
                                        <label >Code</label>
                                        <input class="form-control" minlength="6" type="tel" name="code" onChange={handleBlur}  placeholder="Enter Your OTP"></input>
                                        <button type="button" class="btn b mt-2" onClick={submitPhoneNumberAuthCode} style={{background:'#3F9DFF',color:'#fff'}}>Submit</button>
                                        <ToastContainer
                                            position="top-center"
                                            autoClose={5000}
                                            hideProgressBar={false}
                                            newestOnTop={false}
                                            closeOnClick
                                            rtl={false}
                                            pauseOnFocusLoss
                                            draggable
                                            pauseOnHover
                                        />
                                        {/* <span class="focus-input100" data-placeholder="Password"></span> */}
                                    </div>
                                    :
                                    <p></p>
                            }
                            {
                                password ?
                                    <div class="form-group" data-validate="Enter password">
                                        <label >New Password</label>
                                        <div class="input-group">
                                            <input class="form-control" minlength="6" type={passwordShow ? "text" : "password"} name="password" onChange={handleBlur}  placeholder="Enter New Password"></input>
                                            
                                        </div>
                                        <button type="button" class="btn  mt-2" onClick={handlePasswordChange} style={{background:'#3F9DFF',color:'#fff'}}>Submit</button>
                                        {/* <span class="focus-input100" data-placeholder="Password"></span> */}
                                    </div>

                                    :
                                    <p></p>
                            }
                            <div id="recaptcha-container"></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;