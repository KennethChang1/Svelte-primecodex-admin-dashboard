<script>
    import Table from "../../component/Table.svelte";

    const heading = ["Login ID", "Spec", "Username", "Type", "Status", "Balance", "Created At", "Action"]
</script>

<div class="container">
    <Table heading={heading}></Table>
</div>