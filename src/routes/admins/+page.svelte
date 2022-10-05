<script>
    import Heading from "../../component/Heading.svelte";
    import Table from "../../component/Table.svelte";
    import { writable } from 'svelte/store';
    import { allAdmin } from "../stores/store";
    import Modal from 'svelte-simple-modal';
    import Popup from '../../component/Popup.svelte';
    export let data;

    allAdmin.set(data.user)
    const modal = writable(null);
    const heading = ["Name", "Email", "Created At", "Action"];
    const showModal = () => modal.set(Popup);

    
</script>

<Heading pageName="Admin Data"></Heading>
<div class="container">
    <Modal show={$modal}>
        <button on:click={showModal} class="admin-btn">Create Admin</button>
    </Modal>
    <Table heading={heading} type="admin"></Table>
</div>

<style>
    .admin-btn{
        cursor: pointer;
        display: block;
        margin-left: 87%;
        margin-right: 0;
        padding: 10px;
        background-color: #3699ff;
        border: none;
        border-radius: 5px;
        color: white;
    }
</style>