import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../../images/logo/sellinbdlogo.png'
import firebaseConfig from '../../Authentication/FireBase/firebase.config';
import firebase from 'firebase/app';
import "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
    const history = useHistory();
    const [info, setInfo] = useState({});
    const [success, setSuccess] = useState(true);
    const [error, setError] = useState([]);
    //eye button 
    const [passwordShow, setPasswordShow] = useState(false);
    // const handlePasswordShow = () => {
    //     setPasswordShow(true)
    // }

    // const handlePasswordOff = () => {
    //     setPasswordShow(false)
    // }
    //eyebuton close
    const handleBlur = (e) => {
        const setNewInfo = { ...info };
        setNewInfo[e.target.name] = e.target.value;
        setInfo(setNewInfo);
    }
    
    console.log(info)
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

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
                window.confirmationResult = confirmationResult;
            })
            .catch(function (error) {
                setError(error)
                console.log(error);
            });
    }
    const submitPhoneNumberAuthCode = () => {
        toast("Wait Few Moments");
        var code = info.code;
        let optConfirm = window.confirmationResult
        optConfirm
            .confirm(code)
            .then(function (result) {
                const formData = new FormData()
                formData.append('username', info.username);
                formData.append('number', info.phoneNumber);
                formData.append('password', info.password);
                fetch('https://sellinbd.com/api330088/registration/register.php', {
                    method: 'POST',
                    body: formData
                })
                    .then(response => response.json())
                    .then(data => {
                        if (data.message == "Already registered") {
                            setError(data)
                        }
                        else {
                            history.push("/login")
                        }
                    })
                    .catch(error => {
                        setError(error)
                        console.error(error)
                    })
            })
            .catch(function (error) {
                setError(error)
                console.log(error);
            });
    }
    
    return (
        <div>
            <div className="m-5">
              
                <div class="limiter">
                    <div class="container-login100">
                        <div class="wrap-login100">
                            <form class="login100-form validate-form">
                                <span class="login100-form-title p-b-26">
                                    <Link to="/"> <img src={logo}  height="auto" width="60px" alt=""/> </Link>
                                </span>

                                {
                                    error && <p style={{ color: 'red', paddingBottom: "30px", textAlign: "center" }}> {error.message} </p>
                                }

                                {
                                    success ?
                                        <>
                                            <div class="form-group" data-validate="Please Input User Name">
                                                <label >User Name : </label>
                                                <input class="form-control" type="text" name="username" onChange={handleBlur} placeholder="Enter your name"></input>
                                                {/* <span class="focus-input100" data-placeholder="User Name"></span> */}
                                            </div>

                                            <div class="form-group" >
                                                <label >User Number : </label>
                                                <input class="form-control" value="+88" readOnly style={{ position: "absolute", color: "#0f3f70", width: "40px", padding: "0 5px", background: "white" }}></input>
                                                <input class="form-control" type="text" name="phoneNumber" onChange={handleBlur} style={{ padding: "0 50px" }}  placeholder="Enter your number"></input>
                                                {/* <span class="focus-input100" data-placeholder="User Number"></span> */}

                                            </div>

                                            <div class="form-group" data-validate="Enter password">
                                                <label>Password : </label>
                                                <div class="input-group">
                                                <input class="form-control" minLength="6" type="password"  name="password" onChange={handleBlur}  placeholder="Enter your password"></input>
                                                {/* <span class="focus-input100" data-placeholder="Password"></span> */}
                                                
                                                </div>
                                            </div>
                                            <center>
                                                <div class="form-group">
                                                    {/* <div class="wrap-login100-form-btn"> */}
                                                    {/* <div class="login100-form-bgbtn"></div> */}
                                                    <button type="button" class="btn  mt-2 w-50"  style={{background:'#3F9DFF',color:'#fff',fontSize:'16px'}}onClick={submitPhoneNumberAuth} >
                                                        Registration
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
                                            </center>
                                        </>
                                        :
                                        <div class="form-group">
                                            <label for="recipient-name" class="col-form-label text-white">Enter Code:</label>
                                            <input type="text" name="code" onBlur={handleBlur} class="form-control" />
                                            <button type="button" class="btn mt-2" style={{background:'#3F9DFF'}} onClick={submitPhoneNumberAuthCode}>Submit</button>
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
                                        </div>}
                                <div id="recaptcha-container"></div>
                                <div class="text-center p-t-30">
                                    <span class="txt1">
                                        Existing Account?   <br />
                                    </span>

                                    <Link class="txt2" to="/login">
                                        Sign In
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div id="dropDownSelect1"></div>

                    {/* <div id="preloader"></div> */}
                </div>

                <a href="#" class="back-to-top"><i class="bx bx-up-arrow-alt"></i></a>
            </div>
            {/* <!-- Modal --> */}

            {/* <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">

                                <div class="form-group">
                                    <label for="recipient-name" class="col-form-label">Enter Code:</label>
                                    <input type="text" name="code" onBlur={handleBlur} class="form-control" />
                                </div>


                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" onClick={submitPhoneNumberAuthCode}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div> */}

        </div>
    );
};

export default SignUp;