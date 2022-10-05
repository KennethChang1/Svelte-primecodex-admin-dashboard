<script>
    import Heading from "../../component/Heading.svelte";
    import '../../style.css';
    import Table from "../../component/Table.svelte";
    import { allUser} from "../stores/store";
    export let data;

    allUser.set(data.user)

    const heading = ["Name", "Email", "Created At", "Action"];
</script>

<Heading pageName="User Data"></Heading>
<div class="container">
    <Table heading={heading} type="user"></Table>
</div>

<style>
</style>