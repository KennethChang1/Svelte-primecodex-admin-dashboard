<script>
    import Heading from "../../component/Heading.svelte";
    import Table from "../../component/Table.svelte";

    const heading = ["ID", "Username", "Network", "Rebate Amounts", "Created At", "Action"]
</script>

<Heading pageName="Rebate Data"></Heading>
<div class="container">
    <Table heading={heading}></Table>
</div>