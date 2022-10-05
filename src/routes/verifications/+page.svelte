<script>
    import Heading from "../../component/Heading.svelte";
    import Table from "../../component/Table.svelte";
    import {allVerification} from "../stores/store.js";
    import { page } from '$app/stores';

    const heading = ["Username", "ID/Account Number", "Type", "Status", "Created At", "Action"]
</script>

<Heading pageName="Verifications Data"></Heading>
<div class="container">
    <Table heading={heading} type="verification"></Table>
</div>