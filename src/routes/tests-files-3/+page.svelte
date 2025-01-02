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
		content="родажба на климатици, климатични системи продажба, климатици на телефони, закупуване на климатик, климатични уреди продажба, климатици за дом и офис, продажба климатик по поръчка, доставка на климатици, климатици по телефон, консултация климатик, продажба на климатични системи, продажба климатични уреди София, климатик за продажба, поръчка климатичен уред, климатици за дома, климатични устройства по телефон."
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

<div class="main-title">Продажба на климатици</div>

<div class="hero">
	<h1>Открийте идеалния климатик за вашия дом или офис</h1>
	<p>
		Ние предлагаме професионална консултация и доставка на висококачествени климатици. Свържете се с
		нас за повече информация!
	</p>
</div>

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

<div class="contact-section">
	<h2>Свържете се с нас</h2>
	<p>Нашият екип е готов да ви помогне. Можете да се свържете с нас по телефон или имейл:</p>
	<div class="contact-details">
		<div class="contact-item">
			<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
				<path
					fill="white"
					d="M16.996 7.686a2 2 0 0 1 1.749 1.03l2.446 4.406a2 2 0 0 1 .04 1.865l-2.356 4.714s.683 3.511 3.541 6.37c2.859 2.858 6.358 3.53 6.358 3.53l4.713-2.357a2 2 0 0 1 1.866.04l4.42 2.458A2 2 0 0 1 40.8 31.49v5.073c0 2.584-2.4 4.45-4.848 3.624c-5.028-1.697-12.833-4.927-17.78-9.874c-4.946-4.947-8.177-12.751-9.873-17.78c-.826-2.447 1.04-4.847 3.624-4.847z"
				/>
			</svg>
			<h3>Телефони</h3>
			<a href="tel:0898414816"><strong>0898 414 816</strong></a>
			<a href="tel:0899591664"><strong>0899 591 664</strong></a>
		</div>
		<div class="contact-item">
			<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
				<path
					fill="white"
					d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-.4 4.25l-6.54 4.09c-.65.41-1.47.41-2.12 0L4.4 8.25a.85.85 0 1 1 .9-1.44L12 11l6.7-4.19a.85.85 0 1 1 .9 1.44"
				/>
			</svg>
			<h3>Имейл</h3>
			<a href="mailto:mpclimabg@gmail.com">mpclimabg@gmail.com</a>
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
		text-align: center;
		padding: 20px 10px;
		margin: 40px 0;
		font-size: 40px;
		font-weight: bold;
		background-color: #0000007e;
		color: #fff;
	}

	.hero {
		text-align: center;
		padding: 50px 20px;
		background: rgba(0, 0, 0, 0.6);
	}

	.hero h1 {
		font-size: 2.5rem;
		margin-bottom: 20px;
	}

	.hero p {
		font-size: 1.2rem;
		line-height: 1.6;
		margin-bottom: 40px;
	}

	.steps {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 20px;
		padding: 20px;
		background: rgba(255, 255, 255, 0.1);
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

	.contact-section {
		text-align: center;
		padding: 40px 20px;
		background: rgba(0, 0, 0, 0.8);
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
		display: flex;
		flex-direction: column;
		align-items: center;
		background: rgba(0, 0, 0, 0.6);
		padding: 20px;
		border: 1px solid rgba(255, 255, 255, 0.3);
		border-radius: 10px;
		width: 300px;
		transition: transform 0.3s ease, background 0.3s ease;
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
		font-size: 1.1rem;
		text-decoration: none;
		transition: color 0.3s ease;
	}

	.contact-item a:hover {
		color: #cce7ff;
	}
</style>
