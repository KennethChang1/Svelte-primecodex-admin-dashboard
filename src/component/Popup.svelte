<script>
    import Swal from 'sweetalert2'
    import {APP_API_URL, APP_TOKEN} from '../routes/stores/authCrud';
    import {token, modal} from "../routes/stores/store";
    import { goto } from '$app/navigation';
    import axios from 'axios';
    let name;
    let email;
    let phone;
    let password;
    let role;
    let status;
    
    const handleSubmit = () => {
        axios({
			method: 'POST',
			url: `${APP_API_URL}/user`,
			headers: {
				'x-app-token': APP_TOKEN,
				'x-user-token': $token,
			},
			data: {
				name,
				email,
				phone,
				password,
				role,
				status,
			},
		})
			.then(({ data }) => {
				Swal.fire({
					text: 'Success create admin',
					confirmButtonText: 'Ok',
				}).then(result => {
					if (result.isConfirmed) {
						goto('/dashboard');
                        // $modal = null;
					}
				})
			})
			.catch(err => {
				console.log(err)
			})
    }
</script>
  
<form on:submit|preventDefault={handleSubmit}>
    <div>
        <label for="name">Name</label>
        <input type="text" id="name" name="name" bind:value={name}>
    </div>
    <div>
        <label for="email">Email</label>
        <input type="email" id="email" name="email" bind:value={email}>
    </div>
    <div>
        <label for="phone">Phone</label>
        <input type="number" id="phone" name="phone" bind:value={phone}>
    </div>
    <div>
        <label for="pwd">Password</label>
        <input type="password" id="pwd" name="pwd" bind:value={password}>
    </div>
    <div>
        <label for="role">Role</label>
        <select id="role" name="role" bind:value={role}>
            <option value="">Please Select</option>
            <option value="SUPER_ADMIN">SUPER_ADMIN</option>
            <option value="SUPER_DEVELOPER">SUPER_DEVELOPER</option>
            <option value="STAFF_CS">STAFF_CS</option>
            <option value="STAFF_SETTLEMENT">STAFF_SETTLEMENT</option>
            <option value="STAFF_DEALER">STAFF_DEALER</option>
          </select>
    </div>
    <div>
        <label for="status">Status</label>
        <select id="status" name="status" bind:value={status}>
            <option value="">Please Select</option>
            <option value="PENDING">PENDING</option>
            <option value="ACTIVE">ACTIVE</option>
          </select>
    </div>
    <button>Create</button>
</form>