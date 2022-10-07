<script>
    import Table from "../../component/Table.svelte";
    import { paymetData } from "../stores/store";
    export let data;

    paymetData.set(data.user)

    const heading = ["Username", "Type", "Amount", "Method", "Bank Name", "Bank Username", "Status", "Created At"]
</script>

<div class="container">
    <Table heading={heading} type="payment"></Table>
</div>