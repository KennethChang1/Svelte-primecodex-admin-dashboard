<script>
    import Table from "../../component/Table.svelte";

    const heading = ["ID", "Username", "Network", "Rebate Amounts", "Created At", "Action"]
</script>

<div class="container">
    <Table heading={heading}></Table>
</div>