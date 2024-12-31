<script>
	export let title = 'MP Clima | Начало';
	export let description =
		'Фирма MP Clima е компания в областта на климатичните инсталации, предоставяща висококачествени услуги и решения за вашия дом или бизнес.';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:description" content="description" />
	<meta
		name="keywords"
		content="монтаж на климатици, демонтаж на климатици, профилактика на климатици, нестандартни услуги за климатици, монтаж София, демонтаж София, профилактика София, тръбен път за климатик, вкопаване на тръбен път, пробиване за климатик, тест с азот, антивибрационни тампони, кондензни вани, допълнителни услуги за климатици, качване на климатик, медни тръби, PVC тръби, комуникационни кабели, захранващи кабели, ремонт на климатици, сервиз за климатици, montaj na klimatitsi, demontaj na klimatitsi, profilaktika na klimatitsi, nestandartni uslugi za klimatitsi, montaj Sofiya, demontaj Sofiya, profilaktika Sofiya, traben pat za klimatik, vkopavane na traben pat, probivane za klimatik, test s azot, antivibracionni tamponi, kondenzni vani, dopalnitelni uslugi za klimatitsi, kachvane na klimatik, medni trabi, PVC trabi, komunikacionni kabeli, zahranvashti kabeli, remont na klimatitsi, servis za klimatitsi, nestandardne usluge za klimatici, specijalizirani servisi klimatici, custom klima montaž, projektiranje klimatizacija, нестандартен монтаж климатик, klasični i nestandardni sistemi, klima sa specijalni zahtevi, нестандартни климатици, klima sisteme po porudzbini, klimatizacija za specijalizirani prostor, projektiranje i instalacija klimatskih sistema, bespoke klimatski uređaji, нестандартни климатични решения, custom klima dizajn, klima usluga po meri, nestandardne usluge za klimatici, specijalizirani servisi klimatici, custom klima montaž, projektiranje klimatizacija, нестандартен монтаж климатик, klasični i nestandardni sistemi, klima sa specijalni zahtevi, нестандартни климатици, klima sisteme po porudzbini, klimatizacija za specijalizirani prostor, projektiranje i instalacija klimatskih sistema, bespoke klimatski uređaji, нестандартни климатични решения, custom klima dizajn, klima usluga po meri, serviz na klimatici, remont na klimatici, diagnostika klimatik, popravka klimatik, servisna usluga, klimatski sistemi servis, klimatici servis, servis na klima uređaj, профилактика klimatici, popravka klima sistem, klima servis bg, klimatski uređaji servis, odrzhavane na klimatici, замяна на климатик, proverenje klimatik, климатични системи ремонт, servis i profilaktika klimatik, ремонт климатик, klimatski uređaj popravka, климатични услуги, servis klima uređaja"
	/>

	<!-- Twitter Card тагове -->
	<meta name="twitter:card" content="static\logo_square.jpg" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="https://mpclima.bg/static/logo_square.jpg" />
	<meta name="twitter:image:alt" content="Начало | MP Clima" />

	<!-- Open Graph тагове (за Facebook и други) -->
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content="https://mpclima.bg/static/logo_square.jpg" />
	<meta property="og:image:alt" content="Начало | MP Clima" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://mpclima.bg/" />
</svelte:head>

<div class="container">
	<div>
		<h1>Продажба, монтаж и сервиз на климатици.</h1>
		<p class="p-main" style="margin-top: 25px; font-size: 18px;">
			Фирма MP Clima е специализирана в климатичните инсталации, предоставяйки качествени услуги и
			решения за вашия дом или бизнес. От продажбата до монтажа и поддръжката, ние гарантираме
			комфорт и надеждност за нашите клиенти.
		</p>
		<!-- <div>
            <a href="/продажба">
                <button type="button">ПРОДАЖБА КЛИМАТИЦИ</button>
            </a>
        </div> -->
	</div>

	<!-- Услуги Section -->
	<div class="services" style="margin-top: 60px;">
		<a href="/услуги" class="a-h2">Услуги</a>
		<div class="service-items">
			<div class="service-item">
				<img src="/images/icons/stickman-montaj.png" alt="Service 1" />
				<h3>Монтаж</h3>
				<p>Професионална инсталация на климатици.</p>
				<a href="/activities/монтаж">
					<button style="padding: 10px 12px;" class="more">Виж повече</button>
				</a>
			</div>
			<div class="service-item">
				<img src="/images/icons/stickman-demontaj.png" alt="Service 2" />
				<h3>Демонтаж</h3>
				<p>Безопасно демонтиране на стари или повредени климатици.</p>
				<a href="/activities/демонтаж">
					<button style="padding: 10px 12px;" class="more">Виж повече</button>
				</a>
			</div>
			<div class="service-item">
				<img src="/images/icons/stickman-profilaktika.png" alt="Service 3" />
				<h3>Профилактика</h3>
				<p>Редовна поддръжка и сервиз на вашите климатици.</p>
				<a href="/activities/сервизно-обслужване">
					<button style="padding: 10px 12px;" class="more">Виж повече</button>
				</a>
			</div>
		</div>
	</div>

	<!-- Контакти Section -->
	<div class="contact">
		<a href="/контакти" class="a-h2">Контакти</a>
		<div class="contact-items">
			<div class="contact-item">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="1em"
					height="1em"
					viewBox="0 0 24 24"
					{...$$props}
					><path
						fill="white"
						d="M10 6h4V4h-4zm8 17q-2.075 0-3.537-1.463T13 18t1.463-3.537T18 13t3.538 1.463T23 18t-1.463 3.538T18 23M4 21q-.825 0-1.412-.587T2 19V8q0-.825.588-1.412T4 6h4V4q0-.825.588-1.412T10 2h4q.825 0 1.413.588T16 4v2h4q.825 0 1.413.588T22 8v2.9q0 .45-.387.675t-.813.025q-.65-.3-1.362-.45T18 11q-2.9 0-4.95 2.05T11 18q0 .45.063.913t.187.912q.125.425-.137.8t-.688.375zm14.5-3.2v-2.3q0-.2-.15-.35T18 15t-.35.15t-.15.35v2.275q0 .2.075.388t.225.337l1.5 1.5q.15.15.35.15T20 20t.15-.35t-.15-.35z"
					/></svg
				>
				<h3>Работно време</h3>
				<p style="margin-top: 0">Понеделник-Петък 8:00 - 18:00</p>
			</div>
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
	/* body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    } */

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

	.service-item img {
		width: 150px;
		height: 198px;
		margin-bottom: 10px;
	}

	.service-item img:hover {
		transform: translateY(-8px);
		transition-duration: 0.3s;
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

	h1 {
		margin-top: 60px;
	}
</style>
