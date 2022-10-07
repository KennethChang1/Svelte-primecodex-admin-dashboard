<script>
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

<div class="container">
    <Modal show={$modal}>
        <button on:click={showModal} class="admin-btn">Create Admin</button>
    </Modal>
    <Table heading={heading} type="admin"></Table>
</div>

<style>
</style>