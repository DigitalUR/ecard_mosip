import { useContext } from 'react';
import { loginContext } from '../../App';


const Login = () => {
    // const isLogged = useContext(loginContext);
    // // console.log(isLogged['setLoggedIn']);
    // const [checked, setChecked] = useState(false);
    // const [showPassword, setShowPassword] = useState(false);
    // const handleClickShowPassword = () => setShowPassword((show) => !show);
    // const [formData, setFormData] = useState({ username: "", password: "" });
    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({ ...formData, [name]: value }); 
    // };
    


    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // alert(`username: ${formData.username}\npassword: ${formData.password}`);

    //     var url = "http://localhost/eax-app/api/public/auth/login";
    //     var data = new URLSearchParams();
    //     data.append("data", JSON.stringify(formData));

    //     fetch(url, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/x-www-form-urlencoded",
    //         },
    //         body: data,
    //     })
    //         .then(response => response.json())
    //         // .then(data => console.log(data))
    //         .then(data => {
    //             // if(data === "20001"){
    //                 // data = JSON.parse(data)
    //                 // console.log(data[0][0]['username']);
    //                 console.log(data[0][0].hasOwnProperty('username'));
    //             if(data[0][0].hasOwnProperty('username')){
    //                 isLogged['setLoggedIn'](data[0][0]);
    //             }else{
    //                 alert("incollect password")
    //             }
    //         })
    //         .catch(error => console.error("Error: " + error));

    //   };
    const handleESignet = () => {
        const clientId = 'dghlMHnj837HsU-c-Q2aqrl52fEnGP4uJiZ0K7fLtoc';
        const redirectUri = 'https://ecard-backend.onrender.com/api/oauth2/esignet/callback';

        // alert("hello world");
        window.location.href = `https://esignet.collab.mosip.net/authorize?scope=openid profile&response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}`;

        // var url = "http://localhost/eax-app/api/public/auth/login";
        // var data = new URLSearchParams();
        // data.append("data", JSON.stringify(formData));

        // fetch(url, {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/x-www-form-urlencoded",
        //     },
        //     body: data,
        // })
        //     .then(response => response.json())
        //     // .then(data => console.log(data))
        //     .then(data => {
        //         // if(data === "20001"){
        //             // data = JSON.parse(data)
        //             // console.log(data[0][0]['username']);
        //             console.log(data[0][0].hasOwnProperty('username'));
        //         if(data[0][0].hasOwnProperty('username')){
        //             isLogged['setLoggedIn'](data[0][0]);
        //         }else{
        //             alert("incollect password")
        //         }
        //     })
        //     .catch(error => console.error("Error: " + error));

      };
    return (
        <>
            <div class="loginHorder">
        <div class="loginDiv">
            <div className="logoDiv">
            <div class="logo-div"><img src="assets/University of Rwanda - LOGO LANDSCAPE _RV Official.png"  width="105px" height="45px" alt=""/></div>
            </div>
            <div className="form">
                <input type="text" placeholder='Reg number ...'/>
                <input type="password" placeholder='password' />
                <input type="submit" style={{fontWeight:'bold'}} value="LOGIN" />
            <span className='loginSpan'>Forgate password ? <a href='#'>Click here</a></span>
                {/* <input type='hidden' id='eSignet'  value="Signin with eSignet" /> */}
                 <div onClick={()=>{handleESignet()}} for ='eSignet'  className='eSignetButton' style={{backgroundColor:'#F9F9F9', fontWeight:'normal'}} >
                 <img src="assets/icons/eSignetIcon.png"  height="30" width="30"  alt=""/> Sign in with eSignet
                 </div>
                <br />
            <span className='loginSpan' style={{marginLeft:0}}><a href='#'>Create new account</a></span>
            </div>
        </div>
    </div>  
        </>

    );
}

export default Login;