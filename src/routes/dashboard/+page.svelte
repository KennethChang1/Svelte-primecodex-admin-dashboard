<script>
    import Heading from '../../component/Heading.svelte';
    import '../../style.css';
    import MonthlyStats from "./component/MonthlyStats.svelte";
    import Table from '../../component/Table.svelte';
    export let data;

    const heading = ["Name", "Email", "Created At", "Action"];
    const heading2 = ["Login ID", "Spec", "Username", "Type"];
</script>

<div class="container">
    <p class="heading">Dashboard Tools</p>
    <div>
        <button class="btn reload">Reload Data</button>
        <button class="btn btn-purple">Download Users Data</button>
        <button class="btn btn-purple">Download Account User Partner</button>
        <button class="btn btn-purple">Dashboard Access Logs</button>
    </div>
</div>

<MonthlyStats data={data.stats}></MonthlyStats>

<div class="wrapper">
    <div class="container container-left">
        <p class="heading">Need Activate User</p>
        <Table heading={heading}></Table>
    </div>

    <div class="container container-right">
        <p class="heading">Need Process verification</p>
    </div>
</div>

<div class="wrapper">
    <div class="container container-left">
        <p class="heading">Need Activate Account</p>
        <Table heading={heading2}></Table>
    </div>

    <div class="container container-right">
        <p class="heading">Need Process Deposit</p>
    </div>
</div>

<div class="container">
    <p class="heading">Need Process Withdraw</p>
</div>


<style>
    p{
        margin: unset;
    }

    .btn{
        border: none;
        border-radius: 5px;
        padding: 8.5px 13px;
        color: white;
        cursor: pointer;
        margin-right: 10px;
    }

    .reload{
        background-color: #ffa800;
    }

    .btn-purple{
        background-color: #8950fc;
    }


    .wrapper{
        display: flex;
    }

    .container-left{
        flex-basis: 50%;
    }

    .container-right{
        flex-basis: 50%;
    }
</style>