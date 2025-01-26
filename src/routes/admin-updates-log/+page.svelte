<script>
	import { onMount } from 'svelte';

	let isLoggedIn = false;
	let username = '';
	let password = '';
	let rememberMe = false;

	const ADMIN_USERNAME = 'mpclimaKD';
	const ADMIN_PASSWORD = 'MPclimaKD123';

	// Логика за вход
	function handleLogin() {
		if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
			isLoggedIn = true;

			// Запазване на данни за вход в localStorage, ако е избрано "Запомни ме"
			if (rememberMe) {
				localStorage.setItem('isLoggedIn', 'true');
			}
		} else {
			alert('Грешно потребителско име или парола!');
		}
	}

	// Проверка дали потребителят вече е логнат
	onMount(() => {
		if (localStorage.getItem('isLoggedIn') === 'true') {
			isLoggedIn = true;
		}
	});

	let commits = [];
	const MAX_COMMITS = 12;

	async function fetchCommits() {
		const response = await fetch('https://api.github.com/repos/l0ad1ng-0015/mpclima/commits');
		const data = await response.json();
		commits = data.slice(0, MAX_COMMITS).map((commit) => ({
			message: commit.commit.message,
			date: new Date(commit.commit.author.date).toLocaleString()
		}));
	}

	onMount(fetchCommits);

	onMount(() => {
		if (isLoggedIn) fetchCommits();
	});
</script>

{#if !isLoggedIn}
	<div class="login-form">
		<h2 style="margin-bottom: 20px">Админ страница</h2>
		<input type="text" placeholder="Потребителско име" bind:value={username} />
		<input type="password" placeholder="Парола" bind:value={password} />
		<label>
			<input type="checkbox" bind:checked={rememberMe} />
			Запомни ме
		</label>
		<button on:click={handleLogin}>Вход</button>
	</div>
{:else}
	<div class="container">
		<h1>Лист ъпдейти</h1>
		<p class="info">Лист с последните ъпдейти направени по сайта.</p>
		<table>
			<thead>
				<tr>
					<th>Дата</th>
					<th>Съобщение</th>
				</tr>
			</thead>
			<tbody>
				{#each commits as commit}
					<tr>
						<td data-label="Date">{commit.date}</td>
						<td data-label="Message">{commit.message}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
{/if}

<style>
	.container {
		width: 90%;
		max-width: 800px;
		margin: 0 auto;
		padding: 20px;
	}

	.login-form {
		width: 300px;
		margin: 50px auto;
		padding: 20px;
		border: 1px solid #ddd;
		border-radius: 8px;
		background-color: #000000a8;
		text-align: center;
	}

	.login-form input {
		/* width: 100%; */
		max-width: 400px;
		background-color: rgba(0, 0, 0, 0.7);
		padding: 25px;
		border-radius: 25px;
		text-align: center;
	}

	.login-form button {
		margin: 20px 15px !important;
		background-color: #0070bb;
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}

	.login-form button:hover {
		background-color: #005b99;
	}

	.login-form h2,
	.login-form p {
		color: #fff;
		/* s */
	}

	.login-form form {
		/* Other styles */
		position: relative;
	}
	.login-form input[type='text'],
	.login-form input[type='password'] {
		display: block; /* Make input fields and textarea block-level elements */
		width: 95%; /* Set their width to 100% to make them full-width */
		background-color: rgba(255, 255, 255, 0.2); /* Add a translucent white background */
		border: 2px solid #0070bb; /* Add a blue border */
		border-radius: 5px;
		color: #fff; /* Change text color to white */
		padding: 10px;
		font-size: 13px;
		backdrop-filter: blur (10px); /* Apply a blur effect to the background */
		margin-bottom: 10px; /* Add spacing between fields */
	}

	h1 {
		margin-top: 0 !important;
		margin-bottom: 20px;
		font-size: clamp(3rem, 5vw, 2rem);
	}

	.info {
		margin-top: 0 !important;
		margin-bottom: 20px;
		font-size: clamp(1.2rem, 1.1vw, 2rem);
	}

	table {
		width: 100%;
		border-collapse: collapse;
		background-color: rgba(0, 0, 0, 0.479);
	}

	th,
	td {
		padding: 10px;
		border-bottom: 1px solid #ddd;
		text-align: left;
		word-wrap: break-word;
	}

	th {
		background-color: #0070bb;
		font-weight: bold;
		color: #fff;
	}

	/* @media screen and (max-width: 600px) {
		th,
		td {
			display: block;
			width: 100%;
			text-align: right;
		}

		th {
			display: none;
		}

		td {
			padding-left: 50%;
			position: relative;
		}

		td::before {
			content: attr(data-label);
			position: absolute;
			left: 10px;
			width: calc(50% - 20px);
			white-space: nowrap;
			text-align: left;
			font-weight: bold;
		}
	} */
</style>
