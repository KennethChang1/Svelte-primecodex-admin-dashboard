<script>
    import NavLink from "./NavLink.svelte";
    import { page } from '$app/stores';
</script>

<div class="side-bar">
    <img class="logo" src="/dashboardLogoDark.png" alt="">
    <a href="/dashboard" class="active" sveltekit:prefetch><NavLink navText="Dashboard" active={$page.url.pathname === '/dashboard' ? 'active' : ''}></NavLink></a>
    <p class="heading">MENU</p>
    <a href="/users" sveltekit:prefetch><NavLink navText="User Data" active={$page.url.pathname === '/users' ? 'active' : ''}></NavLink></a>
    <a href="/verifications" sveltekit:prefetch><NavLink navText="Verifications Data" active={$page.url.pathname === '/verifications' ? 'active' : ''}></NavLink></a>
    <a href="/accounts" sveltekit:prefetch><NavLink navText="Account Data" active={$page.url.pathname === '/accounts' ? 'active' : ''}></NavLink></a>
    <a href="/payments" sveltekit:prefetch><NavLink navText="Payment Data" active={$page.url.pathname === '/payments' ? 'active' : ''}></NavLink></a>
    <a href="/account-specs" sveltekit:prefetch><NavLink navText="Account Specification Data" active={$page.url.pathname === '/account-specs' ? 'active' : ''}></NavLink></a>
    <a href="/admins" sveltekit:prefetch><NavLink navText="Admin Data" active={$page.url.pathname === '/admins' ? 'active' : ''}></NavLink></a>
    <a href="/user-rebates" sveltekit:prefetch><NavLink navText="Rebate Data" active={$page.url.pathname === '/user-rebates' ? 'active' : ''}></NavLink></a>
    <a href="/internal-transfer" sveltekit:prefetch><NavLink navText="Internal Transfers" active={$page.url.pathname === '/internal-transfer' ? 'active' : ''}></NavLink></a>
</div>

<style>
    .side-bar{
        position: sticky;
        top: 0;
        height: 100vh;
        background-color: white;
        flex-basis: 20%;
    }
    .logo{
        width: 132px;
        margin-bottom: 30px;
        padding: 0 25px;
    }

    .heading{
        font-size: 12px;
        padding: 0 25px;
    }
</style>