<script>
    import { page } from '$app/stores';
    import { writable } from 'svelte/store';
    export let row;
    import Swal from 'sweetalert2';
    import axios from "axios";
    import {APP_API_URL, APP_TOKEN} from '../routes/stores/authCrud';
    import {token, currentUserData} from "../routes/stores/store";
    import VerificationTable from './VerificationTable.svelte';
    import Modal from 'svelte-simple-modal';
    import editUserModal from './editUserModal.svelte';

    const modal = writable(null);
    const showModal = (state) => {
      axios({
        method: 'GET',
        url: `${APP_API_URL}/user/${state._id}`,
        headers: {
          'x-app-token': APP_TOKEN,
          'x-user-token': $token
        }
      }).then((res) => res.data).then((data) => currentUserData.set(data));
      modal.set(editUserModal)
    };

    const deleteUser = (state) => {
      Swal.fire({
        text: 'Delete this user?',
        confirmButtonText: 'Ok',
        showCancelButton: true,
      }).then(result => {
        if (result.isConfirmed) {
          axios({
            method: 'DELETE',
            url: `${APP_API_URL}/user/${state._id}`,
            headers: {
              'x-app-token': APP_TOKEN,
              'x-user-token': $token,
            },
          })
            .then(data => {
              window.location.reload();
            })
            .catch(err => {
              console.log(err)
            })
        }
      })
	  }
</script>
  
  {#if $page.url.pathname === "/verifications"}
    <VerificationTable row={row}></VerificationTable>
  {:else if $page.url.pathname === "/admins" || $page.url.pathname === "/users"}
    <tr>
      <td>{row.name}</td>
      <td>{row.email}</td>
      <td>{row.created_at}</td>
      <td>
        <a href={`/users/${row.id}`}><button><img src="/search.svg" alt=""></button></a>
        <Modal show={$modal}>
          <button on:click={() => showModal(row)}><img src="/pencil.0851d32a.svg" alt=""></button>
        </Modal>
        <button on:click={() => deleteUser(row)}><img src="/trash.f1497a79.svg" alt=""></button>
      </td>
    </tr>
  {:else if $page.url.pathname === "/payments"}
    <tr>
      <td>{row.user.name}</td>
      <td>{row.type}</td>
      <td>{row.amount}</td>
      <td>{row.method}</td>
      {#if row.method === "BANK"}
        <td>{row.bank.bank_name}</td>
        <td>{row.bank.bank_username}</td>
      {:else}
        <td></td>
        <td></td>
      {/if}
      <td>{row.status}</td>
      <td>{row.created_at}</td>
    </tr>
  {:else if $page.url.pathname === "/account-specs"}
    <tr>
      <td>{row.name}</td>
      <td>{row.server}</td>
      <td>{row.type}</td>
      <td></td>
      <td></td>
      <td>{row.mt_gid}</td>
      <td>
        <button><img src="/search.svg" alt=""></button>
        <button><img src="/pencil.0851d32a.svg" alt=""></button>
        <button on:click={() => deleteUser(row)}><img src="/trash.f1497a79.svg" alt=""></button>
      </td>
    </tr>
  {:else if $page.url.pathname === "/internal-transfer"}
    <tr>
      <td>{row.id}</td>
      <td>{row.user.name}</td>
      <td></td>
      <td></td>
      <td>${row.amount}</td>
      <td>{row.status}</td>
      <td>{row.created_at}</td>
    </tr>
  {/if}
  
  <style>

    button{
      background-color: white;
      border: none;
      cursor: pointer;
    }
  </style>