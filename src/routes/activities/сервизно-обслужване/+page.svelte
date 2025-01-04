<script>
	export let title = 'Сервизна дейност | MP Clima';
	export let description =
		'Професионално сервизно обслужване за климатици и климатични системи. Осигурете надеждна и ефективна работа на вашата система с нашите експертни услуги.';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta
		name="keywords"
		content="сервизно обслужване на климатици, поддръжка на климатични системи, ремонт на климатици, сервиз климатик София, профилактика на климатици, сервизно обслужване, експертен сервиз на климатични уреди, климатик ремонт и поддръжка, климатична система сервиз, поддръжка на дома и офиса, професионален сервиз за климатици."
	/>
</svelte:head>

<div class="main-title">
	<h1 class="main-title-header">Сервизно обслужване</h1>
</div>

<div class="content">
	<section class="intro">
		<p>
			Нашият екип предлага <strong>професионално сервизно обслужване</strong> за вашите климатични системи.
			С грижа за детайлите, ние осигуряваме надеждност и ефективност на вашите уреди, независимо от марката
			и модела.
		</p>
	</section>

	<div class="services">
		<h2>Какво предлагаме:</h2>
		<div class="service-list">
			<div class="service-item">
				<h3>Профилактика</h3>
				<p>
					Редовната профилактика удължава живота на вашия климатик и гарантира неговата безопасност.
				</p>
			</div>
			<div class="service-item">
				<h3>Ремонт</h3>
				<p>Бърза диагностика и ремонт, осигуряващи бързо възстановяване на нормалната работа.</p>
			</div>
			<div class="service-item">
				<h3>Монтаж и демонтаж</h3>
				<p>Професионален монтаж на нови уреди, съчетан с внимателен демонтаж на старите системи.</p>
			</div>
		</div>
		<a href="/услуги">
			<button
				style="margin-bottom: 20px; padding: 10px 12px; width: 45%; font-size: 1.2rem"
				class="more">Върнете се към страница услуги</button
			>
		</a>
	</div>

	<div class="contact">
		<div class="contact-section">
			<h2>Свържете се с нас</h2>
			<p>
				Нашият екип е готов да ви помогне. Можете да се свържете с нас по <strong>телефон</strong>
				или чрез нашата
				<strong>контактна форма:</strong>
			</p>
			<div class="contact-details">
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
				<a href="/контакти" style="text-decoration: none; color: white;">
					<div class="contact-item">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="1em"
							height="1em"
							viewBox="0 0 24 24"
							{...$$props}
							><path
								fill="currentColor"
								d="M11.846 21H6q-.846 0-1.423-.577T4 19v-2.77h3V3h13v6.577l-1 1V4H8v12.23h5.346l-1.5 1.5zm2.385 0v-2.21l5.96-5.934l2.184 2.21L16.441 21zm-4.846-9.846v-1h8.23v1zm0-2.77v-1h8.23v1zm10.806 7.632l.925-.956l-.925-.944l-.95.95z"
							/></svg
						>
						<h3 style="font-weight: 500;">
							Направете запитване, и ние ще Ви върнем отговор по телефон или имейл..
						</h3>
						<!-- <p>
					Направете запитване , чрез контактната ни форма, и ние ще Ви върнем отговор с подходящата
					оферта за Вас.
				</p> -->
						<a href="/контакти">
							<button style="padding: 10px 12px;" class="more">Свържете се</button>
						</a>
					</div>
				</a>
			</div>
		</div>
	</div>
</div>

<style>
	.main-title {
		max-width: 800px;
		margin: 0 auto;
		/* margin-bottom: 60px; */
		padding: 16px 46px;
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

	.content {
		max-width: 1200px;
		margin: 0 auto;
		margin-top: 20px;
		padding: 20px;
		font-family: sans-serif;
		color: #ffffff;
	}

	.intro {
		text-align: center;
		font-size: 20px;
		margin-bottom: 30px;
		background-color: rgba(0, 0, 0, 0.297);
		padding: 20px;
		border-radius: 10px;
	}

	.services {
		margin: 30px;
		background-color: rgba(0, 0, 0, 0.356);
	}

	.services h2 {
		text-align: center;
		font-size: 30px;
		padding: 10px 0 20px 0;
		color: white;
	}

	.service-list {
		display: flex;
		align-items: center;
		justify-content: space-around;
		flex-wrap: wrap;
		padding: 10px 25px;
	}

	.service-item {
		background: rgba(0, 0, 0, 0.6);
		padding: 20px;
		border: 1px solid #ddd;
		border-radius: 10px;
		width: 300px;
		text-align: center;
		margin: 10px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		transition: transform 0.3s, box-shadow 0.3s;
	}

	.service-item:hover {
		border-color: #0070bb;
		transform: translateY(-10px);
		box-shadow: 0 6px 10px rgba(0, 0, 0, 0.623);
	}

	.service-item h3 {
		font-size: 24px;
		margin-bottom: 10px;
		color: white;
	}

	.service-item p {
		font-size: 16px;
		color: #c2c0c0;
	}

	/* CONTACTI 2 */
	.contact {
		text-align: center;
		background-color: rgba(0, 0, 0, 0.356);
	}

	.contact-section {
		text-align: center;
		padding: 10px 20px;
		background: rgba(228, 59, 59, 0);
	}

	.contact-section h2 {
		font-size: 2rem;
		margin-bottom: 20px;
	}
	.contact-section p {
		margin-bottom: 10px;
		font-size: 20px;
		line-height: 1.5;
	}

	.contact-details {
		display: flex;
		justify-content: center;
		gap: 40px;
		flex-wrap: wrap;
	}

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

	.contact-item:hover {
		border-color: #0070bb;
		transition: 0.23s;
		box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
	}

	.contact-item h3 {
		margin: 15px 0;
		font-size: 1.2rem;
	}

	.contact-item a {
		color: #fff;
		font-size: 1.6rem;
		text-decoration: none;
		transition: color 0.3s ease;
	}

	.contact-item a:hover {
		color: #cce7ff;
	}

	.contact-item svg {
		width: 100px;
		height: 100px;
		margin-bottom: 10px;
	}

	.contact-item svg:hover {
		fill: #0070bb;
	}

	.more {
		width: 100%;
		padding: 10px;
		text-align: center;
		margin: 10px 0 0 0;
		border-radius: 25px;
		/* font-weight: bold; */
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

	/* CONTACTI 2 */

	/* @media screen and (max-width: 768px) {
		.service-list {
			flex-direction: column;
			align-items: center;
		}

		.service-item {
			width: 90%;
		}

		.contact-item {
			width: 100%;
			text-align: center;
		}
	} */
</style>
