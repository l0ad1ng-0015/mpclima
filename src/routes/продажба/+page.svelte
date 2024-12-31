<script type="ts">
</script>

<div class="main-title">Продажба на климатици</div>

<div class="text-content">
	<p>
		Отностно продажби на климатици, свържете се с нас на посочените телефони по-долу или вижте
		нашише
	</p>
	<a href="/контакти">контакти.</a>
</div>

<div class="container">
	<!-- Контакти Section -->
	<div class="contact">
		<div class="contact-items">
			<div class="contact-item">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="1em"
					height="1em"
					viewBox="0 0 48 48"
					{...$$props}
					><path
						fill="white"
						stroke="white"
						stroke-linejoin="round"
						stroke-width="4"
						d="M16.996 7.686a2 2 0 0 1 1.749 1.03l2.446 4.406a2 2 0 0 1 .04 1.865l-2.356 4.714s.683 3.511 3.541 6.37c2.859 2.858 6.358 3.53 6.358 3.53l4.713-2.357a2 2 0 0 1 1.866.04l4.42 2.458A2 2 0 0 1 40.8 31.49v5.073c0 2.584-2.4 4.45-4.848 3.624c-5.028-1.697-12.833-4.927-17.78-9.874c-4.946-4.947-8.177-12.751-9.873-17.78c-.826-2.447 1.04-4.847 3.624-4.847z"
					/></svg
				>
				<h3>Телефони</h3>
				<a href="tel:0898 414816" class="tel"><strong>0898414816</strong> </a>
				<a href="tel:0899 591664" class="tel"><strong>0899591664</strong> </a>
			</div>
			<div class="contact-item">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="1em"
					height="1em"
					viewBox="0 0 24 24"
					{...$$props}
					><path
						fill="white"
						d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-.4 4.25l-6.54 4.09c-.65.41-1.47.41-2.12 0L4.4 8.25a.85.85 0 1 1 .9-1.44L12 11l6.7-4.19a.85.85 0 1 1 .9 1.44"
					/></svg
				>
				<h3>Имейл</h3>
				<a href="mailto:mpclimabg@gmail.com">mpclimabg@gmail.com</a>
			</div>
		</div>
	</div>
</div>

<style>
	.main-title {
		text-align: center;
		padding: 20px 10px;
		margin: 40px 0;
		font-size: 40px;
		font-weight: bold;
		background-color: #0000007e;
		color: #fff;
	}

	.text-content {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		padding: 20px;
		background-color: rgba(0, 0, 0, 0.337);
	}

	.text-content p {
		margin-bottom: 20px;
		text-align: center;
		line-height: 1.5;
		font-size: 25px;
	}

	.text-content a {
		font-size: 25px;
		text-decoration: none;
		color: #007bff;
		transition: color 0.3s ease;
	}

	.text-content a:hover {
		color: #0056b3;
	}

	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 20px;
	}

	.services,
	.contact {
		margin: 20px 0;
		width: 100%;
		max-width: 1200px;
	}

	.a-h2 {
		margin-bottom: 20px;
		font-size: 2.5em;
		color: #c1bebe;
		text-decoration: none;
	}
	.a-h2:hover {
		color: white;
		transition: 0, 3s;
	}

	.tel {
		font-size: 1.3rem !important;
		margin-bottom: 7px;
	}

	.service-items,
	.contact-items {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}

	.service-item,
	.contact-item {
		margin: 10px;
		padding: 20px;
		border: 1px solid #ccc;
		border-radius: 10px;
		text-align: center;
		width: 300px;
		transition: transform 0.3s;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		background: #00000096;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	}

	.service-item:hover,
	.contact-item:hover {
		border-color: #0070bb;
		transition: 0.23s;
		box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
	}
	.contact-item:hover {
		border-radius: 30px;
	}

	@media screen and (max-width: 599px) {
		.service-items,
		.contact-items {
			justify-content: center;
		}

		.service-item,
		.contact-item {
			width: 90%;
			margin: 10px 0;
			border: 1px solid #0070bb;
		}

		.more {
			width: 100%;
			padding: 10px 0;
		}

		h1 {
			margin-top: 20px !important;
			font-size: 2.5rem;
		}

		.p-main {
			font-size: 0.9rem;
		}
	}

	@media screen and (max-width: 450px) {
		h1 {
			font-size: 2.1rem !important;
		}
	}

	@media screen and (max-width: 390px) {
		h1 {
			font-size: 2.5rem;
		}

		.p-main {
			font-size: 0.856rem;
		}

		.service-item h3,
		.contact-item h3 {
			font-size: 0.5rem;
		}
	}

	@media screen and (min-width: 1364px) {
		.p-main {
			padding: 0 20px;
		}
	}
	.contact-item svg {
		width: 100px;
		height: 100px;
		margin-bottom: 10px;
	}

	.contact-item svg:hover {
		fill: #0070bb;
	}

	.service-item h3,
	.contact-item h3 {
		margin: 10px 0;
		font-size: 1.5em;
	}

	.service-item p,
	.contact-item p,
	.contact-item a {
		font-size: 1.18em;
		color: #a9a6a6;
		text-decoration: none;
	}

	.service-item p {
		font-size: 1em !important;
	}

	.contact-item a {
		color: #838383ee;
	}

	.contact-item a {
		font-size: 1em;
		color: #b5b3b3;
		text-decoration: none;
	}
	.contact-item a:hover {
		color: #a9a6a6;
		transition: 0.4s;
	}

	.more {
		width: 100%;
		padding: 10px;
		text-align: center;
		margin: 10px 0 0 0;
		border-radius: 25px;
		font-weight: bold;
		border: 2px solid #0070bb;
		background-color: rgba(0, 0, 0, 0.17);
		color: #fff;
		cursor: pointer;
		overflow: hidden;
		z-index: 1;
	}

	.more:hover {
		background-color: #0070bb;
		color: #fff;
	}
</style>
