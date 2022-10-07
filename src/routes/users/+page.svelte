<script>
    import '../../style.css';
    import Table from "../../component/Table.svelte";
    import { allUser } from "../stores/store";
    import Modal from 'svelte-simple-modal';
    import CreateUserModal from '../../component/CreateUserModal.svelte';
    import { writable } from 'svelte/store';
    export let data;

    allUser.set(data.user)
    const modal = writable(null);
    const showModal = () => modal.set(CreateUserModal);

    const heading = ["Name", "Email", "Created At", "Action"];
</script>

<div class="container">
    <Modal show={$modal}>
        <button on:click={showModal} class="admin-btn">Create User</button>
    </Modal>
    <Table heading={heading} type="user"></Table>
</div>

<style>
</style>