<script>
    import Heading from "../../component/Heading.svelte";
    import Table from "../../component/Table.svelte";
    import { internalTransfer } from "../stores/store";
    export let data;

    
    internalTransfer.set(data.user);
    const heading = ["ID", "Username", "Source Account", "Destination Account", "Amount", "Status", "Created At", "Action"]
</script>

<div class="container">
    <Table heading={heading} type="internal-transfer"></Table>
</div>