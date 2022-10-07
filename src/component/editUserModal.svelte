<script>
    import { currentUserData, token } from "../routes/stores/store";
    import {APP_API_URL, APP_TOKEN} from "../routes/stores/authCrud";
    import axios from "axios";
    import Swal from 'sweetalert2';
    console.log($currentUserData)

    let status;
    let role;
    let name;
    let email;
    let phone;
    let referral_code;
    let xp;

    $: if ($currentUserData !== undefined) {
        status = $currentUserData.data.user.status;
        role = $currentUserData.data.user.role;
        name = $currentUserData.data.user.name;
        email = $currentUserData.data.user.email;
        phone = $currentUserData.data.user.phone;
        referral_code = $currentUserData.data.user.referral_code;
    }

    // let role = $currentUserData.data.user.role;
    const editUser = () => {
		axios({
			method: 'PUT',
			url: `${APP_API_URL}/user/${$currentUserData.data.user.id}`,
			headers: {
				'x-app-token': APP_TOKEN,
				'x-user-token': $token,
			},
			data: {
				name,
				email,
				phone,

				// optionals
				referral_code,
				status,
				role,
				xp,
			},
		})
			.then(data => {
				Swal.fire({
					text: 'Success edit user data',
					confirmButtonText: 'Ok',
				}).then(result => {
					if (result.isConfirmed) {
                        window.location.reload();
					}
				})
			})
			.catch(err => {
				console.log(err)
			})
	}
</script>

{#if $currentUserData !== undefined}
    <form on:submit|preventDefault={editUser}>
        <p>Edit user data</p>
        <div>
            <label for="name">Name</label>
            <input type="text" id="name" name="name" bind:value={$currentUserData.data.user.name}>
        </div>
        <div>
            <label for="email">Email</label>
            <input type="email" id="email" name="email" bind:value={$currentUserData.data.user.email}>
        </div>
        <div>
            <label for="phone">Phone</label>
            <input type="number" id="phone" name="phone" bind:value={$currentUserData.data.user.phone}>
        </div>
        <div>
            <label for="referral">Referral Code</label>
            <input type="text" id="referral" name="referral" bind:value={referral_code}>
        </div>
        <div>
            <label for="parent-name">Parent Name</label>
            <input type="text" id="parent-name" name="parent-name">
        </div>
        <div>
            <label for="status">Status</label>
            <select id="status" name="status" bind:value={status}>
                <option value="PENDING">PENDING</option>
                <option value="ACTIVE">ACTIVE</option>
            </select>
        </div>
        <div>
            <label for="role">Role</label>
            <select id="role" name="role" bind:value={role}>
                <option value="USER_TRADER">USER_TRADER</option>
                <option value="USER_SUB_PARTNER">USER_SUB_PARTNER</option>
                <option value="USER_PARTNER">USER_PARTNER</option>
            </select>
        </div>
        <div>
            <label for="XP">XP</label>
            <input type="number" id="XP" name="XP" value={$currentUserData.data.user.xp}>
        </div>
        <button>Update</button>
    </form>
{:else}
    <p>Loading...</p>
{/if}

<style>
    form div{
        display: flex;
        flex-direction: column;
        padding: 0 150px;
        margin-bottom: 10px;
    }

    input, select{
        height: 20px;
    }
</style>