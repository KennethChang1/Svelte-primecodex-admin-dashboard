<script>
    import {token} from "./stores/store.js";
    import { goto } from '$app/navigation';
    import login from "./stores/authCrud";
    import { browser } from '$app/environment';
    let email;
    let pwd;
    let error = "";
    let loading = false;


    const handleSubmit = () => {
        loading = true;
        login(email, pwd)
            .then(({ data }) => {
                token.set(data.token);
                token.subscribe((val) => {
                    if (browser) return localStorage.setItem('token', val);
                });
                goto(`/dashboard`);
			})
            .catch(err => {
                console.log(err)
                if (err.response) {
                    error = "Invalid Data. Please Try Again";
                }
            })
            .finally(() => loading = false)
        // isLoggedIn.set(true);
        // goto(`/dashboard`);
    }
</script>

<main class="login-page">
    <img class="img" src="/Login.jpeg" alt="">
    <div class="login-form">
        <p class="heading">Admin Login Account</p>
        <p class="subheading">Enter your email and password</p>
        <form on:submit|preventDefault={handleSubmit}>
            <input type="email" placeholder="Email" required bind:value={email}>
            <input type="password" placeholder="Password" required bind:value={pwd}>
            <p class="error">{error}</p>
            <button><div class:lds-ring={loading === true}><div></div><div></div><div></div><div></div></div> Sign In</button>
        </form>
    </div>
</main>

<style>
    p{
        margin: unset;
    }

    .login-page{
        display: flex;
        align-items: center;
    }

    .img{
        width: 50%;
        height: 100vh;
        object-fit: cover;
    }

    .login-form{
        text-align: center;
        flex-grow: 1;
    }

    .heading{
        font-size: 26px;
    }

    .subheading{
        font-size: 13px;
        color: var(--sub-text);
        margin-bottom: 20px;
    }

    input{
        width: 400px;
        height: 40px;
        border-radius: 50px;
        border: none;
        padding-left: 20px;
        margin-bottom: 10px;
    }

    button{
        display: block;
        width: auto;
        margin: auto;
        background-color: #3699ff;
        border: none;
        color: white;
        padding: 13px 20px;
        border-radius: 5px;
        cursor: pointer;
    }

    .error{
        color: red;
        margin-bottom: 5px;
    }

    /* spinner */
    .lds-ring {
        display: inline-block;
        position: relative;
        width: 20px;
        height: 20px;
    }
    .lds-ring div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 20px;
        height: 20px;
        margin: 8px;
        border: 4px solid #fff;
        border-radius: 50%;
        animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: #fff transparent transparent transparent;
        left: -15px;
        top: -5px;
    }
    .lds-ring div:nth-child(1) {
        animation-delay: -0.45s;
    }
    .lds-ring div:nth-child(2) {
        animation-delay: -0.3s;
    }
    .lds-ring div:nth-child(3) {
        animation-delay: -0.15s;
    }
    @keyframes lds-ring {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    }
</style>