<script>
	export let title = 'Продажба | MP Clima';
	export let description =
		'Продажбата на климатици и климатични системи се осъществява само чрез телефонни поръчки. Свържете се с нас на посочените номера за консултация и подробности относно продуктите и наличностите.';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta
		name="keywords"
		content="продажба на климатици, климатични системи продажба, климатици на телефони, закупуване на климатик, климатични уреди продажба, климатици за дом и офис, продажба климатик по поръчка, доставка на климатици, климатици по телефон, консултация климатик, продажба на климатични системи, продажба климатични уреди София, климатик за продажба, поръчка климатичен уред, климатици за дома, климатични устройства по телефон."
	/>

	<!-- Twitter Card тагове -->
	<meta name="twitter:card" content="/static/logo_square.jpg" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="/static/logo_square.jpg" />
	<meta name="twitter:image:alt" content="Продажба" />

	<!-- Open Graph тагове (за Facebook и други) -->
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content="/static/logo_square.jpg" />
	<meta property="og:image:alt" content="Продажба" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="/продажба" />
</svelte:head>

<div class="main-title">
	<h1 class="main-title-header">Продажба на климатици</h1>
</div>

<div class="container-title">
	<h4>
		<b style="margin-bottom: 16px;">Открийте идеалния климатик за вашия дом или офис</b>
	</h4>
</div>
<div class="prodajbi-container-wrapper">
	<p>
		Ние предлагаме професионална консултация и доставка на висококачествени климатици. Свържете се с
		нас за повече информация!
	</p>
	<div class="steps">
		<div class="step">
			<h2>1. Консултация</h2>
			<p>
				Обадете се на нашите специалисти за безплатна консултация относно най-добрия избор за вашия
				дом или офис.
			</p>
		</div>
		<div class="step">
			<h2>2. Избор и Поръчка</h2>
			<p>
				Ние ще ви помогнем да изберете правилния модел според вашите нужди. Всичко става бързо и
				лесно.
			</p>
		</div>
		<div class="step">
			<h2>3. Доставка</h2>
			<p>Ние осигуряваме бърза и надеждна доставка до всяка точка на страната.</p>
		</div>
	</div>
</div>

<div class="prodajbi-container-wrapper" style="margin-top: 40px;">
	<div class="contact-section">
		<h2>Свържете се с нас</h2>
		<p>Нашият екип е готов да ви помогне. Можете да се свържете с нас по телефон или имейл:</p>
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
				<h3>
					Направете запитване , чрез контактната ни форма, и ние ще Ви върнем отговор с подходящата
					оферта за Вас.
				</h3>
				<!-- <p>
					Направете запитване , чрез контактната ни форма, и ние ще Ви върнем отговор с подходящата
					оферта за Вас.
				</p> -->
				<a href="/activities/сервизно-обслужване">
					<button style="padding: 10px 12px;" class="more">Свържете се</button>
				</a>
			</div>
		</div>
	</div>
</div>

<style>
	/* Основни стилове */
	body {
		font-family: 'Arial', sans-serif;
		margin: 0;
		background: linear-gradient(to bottom, #0056b3, #003f7f);
		color: #fff;
	}

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

	.prodajbi-container-wrapper {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: flex-start;
		gap: 1rem;
		padding: 40px 20px;
		padding-top: 0;
		background-color: rgba(0, 0, 0, 0.297);
		text-align: left;

		/* margin-right: 400px; */
		/* margin-right: 400px; */

		/* & .montaj-title{
			justify-content: center;
		} */
	}

	.prodajbi-container-wrapper p {
		text-align: center;
		font-size: 1.2rem;
		line-height: 1.6;
		margin-bottom: 20px auto 10px !important;
	}
	@media screen and (max-width: 880px) {
		b {
			font-size: 1.8rem;
			padding: 0 30px;
			margin-bottom: 5px !important;
		}

		.prodajbi-container-wrapper p {
			font-size: 0; /* 1.1rem */
		}
	}
	.steps {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 20px;
		padding: 20px;
		padding-top: 0 !important;
	}

	.step {
		flex: 1 1 300px;
		padding: 20px;
		border: 1px solid rgba(255, 255, 255, 0.3);
		border-radius: 10px;
		text-align: center;
		background: rgba(0, 0, 0, 0.6);
		transition: transform 0.3s ease, background 0.3s ease;
	}

	.step:hover {
		transform: translateY(-10px);
		background: rgba(0, 86, 179, 0.8);
	}

	.step h2 {
		margin-bottom: 15px;
		font-size: 1.5rem;
	}

	.step p {
		font-size: 1rem;
		line-height: 1.5;
	}

	/* CONTACTI 2 */
	.contact-section {
		text-align: center;
		padding: 40px 20px;
		background: rgba(228, 59, 59, 0);
	}

	.contact-section h2 {
		font-size: 2rem;
		margin-bottom: 20px;
	}

	.contact-section p {
		margin-bottom: 30px;
		font-size: 1rem;
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
		transform: translateY(-10px);
		background: rgba(0, 86, 179, 0.8);
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

	/* CONTACTI 2 */

	h4 {
		font-family: 'Poppins', sans-serif !important;
		/* background: #eff3f8; */
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 40px;
		padding-top: 15px;
		font-size: 35px;
		font-weight: bold;
		color: #fff;
		background-color: rgba(0, 0, 0, 0.297);

		& b {
			font-weight: 540;
		}
	}
</style>
