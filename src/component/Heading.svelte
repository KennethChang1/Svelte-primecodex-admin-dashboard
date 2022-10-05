<script>
    export let pageName;

    const date =  new Date();
    const formatDate = date.toDateString().split(" ")
</script>

<div class="heading">
    <div class="header">
        <a href="/dashboard"><button class="header-btn">Dashboard</button></a>
        <div>
            <p>Hi, Kenneth</p>
        </div>
    </div>
    <div class="header-data">
        <p>{pageName}</p>
        <button class="btn btn-off">Cache State: OFF</button>
        <div>
            <button class="header-btn">Today {formatDate[2]}th {formatDate[1]} {formatDate[3]}</button>
        </div>
    </div>
</div>

<style>
    .heading{
        background-color: white;
    }

    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 40px;
        font-size: 13px;
        border-bottom: 1px solid rgba(0, 0, 0, .1);
    }

    .header-data{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    .header-data{
        padding: 5px 40px;
    }

    .header-btn{
        cursor: pointer;
        color: var(--text-color);
        opacity: 80%;
        border: none;
        padding: 8px 14px;
    }

    .btn{
        font-size: 13px;
        border: none;
        color: white;
        border-radius: 5px;
        padding: 10px;
        cursor: pointer;
    }

    .btn:hover{
        background-color: red;
    }

    .btn-off{
        background-color: #f64e60;
    }
</style>