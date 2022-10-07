<script>
    import {token} from "../routes/stores/store";
    import {APP_API_URL, APP_TOKEN} from '../routes/stores/authCrud';
    import Swal from 'sweetalert2';
    import axios from 'axios';

    let name;
    let email;
    let phone;
    let password;
    let cpassword;
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
					text: 'Success create user',
					confirmButtonText: 'Ok',
				}).then(result => {
					if (result.isConfirmed) {
						window.location.reload();
                        // $modal = null;
					}
				})
			})
			.catch(err => {
				console.log(err)
			})
    }
</script>

<form on:submit|preventDefault={handleSubmit} class="form">
    <p class="form-heading">Create User</p>
    <div>
        <label for="username">User Name</label>
        <input type="text" id="username" name="username" bind:value={name} required>
    </div>
    <div>
        <label for="email">Email</label>
        <input type="text" id="email" name="email" bind:value={email} required>
    </div>
    <div>
        <label for="phone">Phone</label>
        <input type="number" id="phone" name="phone" bind:value={phone} required>
    </div>
    <div>
        <label for="password">Password</label>
        <input type="password" id="password" name="password" bind:value={password} required>
    </div>
    <div>
        <label for="cpassword">Confirm Password</label>
        <input type="password" id="cpassword" name="cpassword" bind:value={cpassword}>
    </div>
    <div>
        <label for="role">Role</label>
        <select id="role" name="role" bind:value={role}>
            <option value="">Please Select</option>
            <option value="USER_PARTNER">USER_PARTNER</option>
            <option value="USER_SUB_PARTNER">USER_SUB_PARTNER</option>
            <option value="USER_TRADER">USER_TRADER</option>
        </select>
    </div>
    <div class="status">
        <label for="status">Status</label>
        <select id="status" name="status" bind:value={status}>
            <option value="">Please Select</option>
            <option value="PENDING">PENDING</option>
            <option value="ACTIVE">ACTIVE</option>
            <option value="ONPROGRESS">ONPROGRESS</option>
            <option value="DISABLED">DISABLED</option>
        </select>
    </div>
    <button class="btn">Create</button>
</form>

<style>
    .form-heading{
        font-weight: 500;
        font-size: 19px;
        border-bottom: 1px solid #ebedf3;
    }

    form > div{
        display: flex;
        flex-direction: column;
    }

    input, select{
        height: 30px;
    }

    .btn{
        border: none;
        background-color: #1bc5bd;
        color: white;
        padding: 10px;
        border-radius: 5px;
    }

    .status{
        margin-bottom: 10px;
    }
</style>