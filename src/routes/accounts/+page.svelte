<script>
    import Heading from "../../component/Heading.svelte";
    import Table from "../../component/Table.svelte";

    const heading = ["Login ID", "Spec", "Username", "Type", "Status", "Balance", "Created At", "Action"]
</script>

<Heading pageName="Account Data"></Heading>
<div class="container">
    <Table heading={heading}></Table>
</div>