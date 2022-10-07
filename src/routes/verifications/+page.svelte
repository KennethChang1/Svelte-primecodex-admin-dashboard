<script>
    import Table from "../../component/Table.svelte";
    import { allVerification } from "../stores/store";
    export let data;

    if(data.user){
        console.log(data.user)
        allVerification.set(data.user);
    }

    const heading = ["Username", "ID/Account Number", "Type", "Status", "Created At", "Action"]
</script>

<div class="container">
    <Table heading={heading} type="verification"></Table>
</div>