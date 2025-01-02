<script lang="ts">
	export let title = 'Контакти | MP Clima';
	export let description =
		'Свържете се с нас чрез контактната форма или използвайте телефоните и имейла ни за запитвания. Нашият офис е на ул.Московска 3, София и сме на разположение да помогнем!';
	let name = '';
	let phone = '';
	let email = '';
	let subject = '';
	let message = '';
	let agree = '';
	let statusMessage = '';
	let apples = 'apples';

	const submitForm = async () => {
		if (apples != 'oranges') {
			return;
		}

		const chat_id = '-1002036390065';
		const botID = '6537438238:AAFfi1D4ZP1FYkb87uBi3tAVOFM1LoSOuAo';
		const telegramURL = `https://api.telegram.org/bot${botID}/sendMessage`;

		// https://api.telegram.org/bot6537438238:AAFfi1D4ZP1FYkb87uBi3tAVOFM1LoSOuAo/getUpdates

		let text = JSON.stringify({ name, phone, email, subject, message }, null, 2);
		try {
			const response = await fetch(telegramURL, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ chat_id, text })
			});

			if (response.ok) {
				statusMessage = 'Съобщението беше изпратено успешно!';
			} else {
				statusMessage = 'Изпращането беше неуспешно :( ' + (await response.text());
			}
		} catch (error) {
			console.error('Error:', error);
			statusMessage = 'An error occurred.';
		}

		name = '';
		phone = '';
		email = '';
		message = '';
		agree = '';

		if (!agree) {
			alert('Моля, съгласете се с условията за защита на личните данни.');
			return;
		}
	};

	const doApples = () => {
		apples = 'oranges';
		console.log('apples', apples);
	};
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />

	<!-- Twitter Card тагове -->
	<meta name="twitter:card" content="/static/logo_square.jpg" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="/static/logo_square.jpg" />
	<meta name="twitter:image:alt" content="Контакти" />

	<!-- Open Graph тагове (за Facebook и други) -->
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content="/static/logo_square.jpg" />
	<meta property="og:image:alt" content="Контакти" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="/контакти" />
</svelte:head>

<div class="main-title">
	<h1 class="main-title-header">Контакти</h1>
</div>

<div class="container">
	<div class="social">
		<iframe
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2932.2977346377706!2d23.3262787!3d42.6974161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa856e34c59f1d%3A0x97d07b6d259f65c!2z0KHQvtGE0LjRjyDRhtC10L3RgtGK0YAsINGD0LsuIOKAntCc0L7RgdC60L7QstGB0LrQsOKAnCAzLCAxMDAwINCh0L7RhNC40Y8!5e0!3m2!1sbg!2sbg!4v1706443322618!5m2!1sbg!2sbg"
			width="600"
			height="480"
			frameborder="0"
			allowfullscreen=""
			aria-hidden="false"
			tabindex="0"
			loading="lazy"
		/>

		<ul>
			<li>
				<p>Телефони:</p>
				<a href="tel:0899 591664" style="font-size: 24px;">0898414816, </a>
				<a href="tel:0898 414816" style="font-size: 24px;">0899591664 </a>
			</li>
		</ul>
		<ul>
			<li>
				<p>Централен офис:</p>
				<a
					href="https://www.google.com/maps/place/%D1%83%D0%BB.+%E2%80%9E%D0%9C%D0%BE%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%E2%80%9C+3,+1000+%D0%A1%D0%BE%D1%84%D0%B8%D1%8F+%D1%86%D0%B5%D0%BD%D1%82%D1%8A%D1%80,+%D0%A1%D0%BE%D1%84%D0%B8%D1%8F/@42.69742,23.3237038,17z/data=!3m1!4b1!4m6!3m5!1s0x40aa856e34c59f1d:0x97d07b6d259f65c!8m2!3d42.6974161!4d23.3262787!16s%2Fg%2F11c1_6sygp?entry=ttu"
					target="_blank">ул.Московска 3, София</a
				>
			</li>
		</ul>
		<ul>
			<li>
				<p>Работно време: Понеделник-Петък 8:00 - 18:00</p>
			</li>
		</ul>
	</div>

	<div class="contact">
		<div class="contact-content">
			<h2>Свържете се с нас</h2>
			<p>Ако имате въпроси или запитвания, <br /> моля свържете се като попълние формата .</p>

			<form on:submit|preventDefault={submitForm} class="contact-form">
				<input type="hidden" bind:value={apples} />
				<input
					type="text"
					name="name"
					bind:value={name}
					placeholder="Вашите имена *"
					required
					title="Моля, попълнете това поле"
				/>
				<input
					type="number"
					name="phone"
					bind:value={phone}
					placeholder="Телефон *"
					required
					title="Моля, попълнете това поле"
				/>
				<input
					type="email"
					name="email"
					bind:value={email}
					placeholder="Имейл *"
					required
					title="Моля, попълнете това поле"
				/>
				<input type="text" name="your-subject" bind:value={subject} placeholder="Относно" />
				<textarea
					on:input={doApples}
					bind:value={message}
					name="message"
					placeholder="Вашето ъобщение"
				/>
				<label for="agree" style="line-height: 20px;">
					<input
						type="checkbox"
						id="agree"
						bind:checked={agree}
						required
						title="Моля, кликнете тикчето, за да продължите"
					/>
					Съгласявам се с условията за <a href="/защита-лични-данни">защита на личните данни</a>
				</label>

				<button type="submit">Изпрати</button>
				<p>{statusMessage}</p>
			</form>
		</div>
	</div>
</div>

<style>
	.main-title {
		max-width: 800px;
		margin: 0 auto;
		margin-bottom: 60px;
		padding: 1rem;
		background-color: #0000007e;
		border-radius: 8px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	}

	.main-title-header {
		text-align: center;
		font-size: 2.5rem;
		color: white;
		margin-top: 10px !important;
		margin-bottom: 10px;
	}
	p,
	h2 {
		color: white;
	}

	.container {
		display: flex;
		width: 78%;
		gap: 10rem;
		flex-wrap: wrap-reverse;
		justify-content: center;
		align-items: flex-end;
		padding: 0 !important;
		/* border: solid 1px green; */

		/* align-items: stretch; */
	}

	.contact-content {
		/* width: 100%; */
		max-width: 400px;
		background-color: rgba(0, 0, 0, 0.7);
		padding: 25px;
		border-radius: 25px;
		text-align: center;
	}

	.contact h2,
	.contact p {
		color: #fff;
		/* s */
	}

	.contact form {
		/* Other styles */
		position: relative;
	}
	.contact input[type='text'],
	.contact input[type='number'],
	.contact input[type='email'],
	.contact textarea {
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

	/* Rest of the styles remain the same */

	.contact input[type='text']::placeholder,
	.contact input[type='number']::placeholder,
	.contact input[type='email']::placeholder,
	.contact textarea::placeholder {
		color: #fff; /* Change placeholder text color to white */
	}

	.contact input[type='text']:focus,
	.contact input[type='email']:focus,
	.contact textarea:focus {
		outline: none;
		border-color: #00518a; /* Change border color on focus */
	}

	.contact button[type='submit'] {
		/* Other button styles... */
		background-color: #0070bb;
		color: #fff;
	}

	.contact input [type='checkbox'] {
		cursor: pointer;
	}

	.contact h2,
	.contact p {
		color: #fff;
		/* margin-top: 0;
        margin-bottom: 20px 0;  */
	}

	.contact a {
		color: #0070bb;

		text-decoration: none;
	}
	.contact a:hover {
		color: #00518a;
	}

	.social iframe {
		border: 6px solid #0070ff; /* Blue border */
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Box shadow */
		height: 500px;
		width: 600px;
		margin: 0 auto;
		display: block;
	}

	/* Add this style for the Google link */

	.social ul {
		padding-top: 10px;
	}

	.social ul li {
		list-style: none;
		display: inline;
		margin-right: 10px;
		margin-top: 10px;
	}
	/* .social ul li {
			width: 1em;
			height: 1em;
			margin-right: 15px;
			fill: #888888;
			list-style: none;
        } */
	.social ul li a {
		text-transform: none;
		color: #cacaca;
		text-decoration: none;
		font-weight: 300;
		font-size: 20px;
		transition: all 0.3s ease;
	}
	.social ul li p {
		display: inline;
		margin-right: 5px;
		color: #fff;
		font-size: 20px;
	}
	.social ul li a:hover {
		color: white;
	}
	.social ul li {
		color: #bbbbbb;
	}

	@media screen and (max-width: 1640px) {
		.container {
			gap: 5rem;
		}
	}

	@media screen and (min-width: 734px) {
		.contact-content {
			width: 100%;
		}
	}

	@media screen and (max-width: 733px) {
		.container {
			padding: 30px 0;
			padding-left: 35px;
			padding-right: 35px;
		}
		.contact-content {
			width: 300px;
		}

		.contact-content button {
			margin-top: 30px;
			margin-bottom: 0;
		}

		.contact-content p {
			font-size: 1rem;
			margin: 13px auto;
		}
		.contact input[type='text'],
		.contact input[type='number'],
		.contact input[type='email'],
		.contact textarea {
			width: 90%;
		}

		.social iframe {
			height: 400px;
			width: 450px;
		}

		.content {
			padding-left: 0;
			padding-right: 0;
		}
	}

	@media screen and (max-width: 595px) {
		.container {
			gap: 3rem;
		}

		.social iframe {
			height: 400px;
			width: 340px;
		}
	}
</style>
