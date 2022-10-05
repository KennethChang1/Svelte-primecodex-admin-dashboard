<script>
    import Heading from "../../component/Heading.svelte";
    import Table from "../../component/Table.svelte";
    import { accountDataSpec } from "../stores/store";
    export let data;

    if(data.user){
        accountDataSpec.set(data.user.accountSpecs);
    }
    
    const heading = ["Name", "Server", "Type", "Special Type", "Crossable IntTrans?", "MT Group Name", "Action"]
</script>

<Heading pageName="Account Specification Data"></Heading>
<div class="container">
    <Table heading={heading} type="account-spec"></Table>
</div>