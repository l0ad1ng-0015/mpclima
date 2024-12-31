<script>
	export let title = 'Услуги | MP Clima';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="bg-gray-100">
	<div class="container">
		<div class="content">
			<h1 class="text-3xl font-bold">Политика за поверителност</h1>

			<p>
				Ние с уважение към вашата лична неприкосновеност и сме ангажирани със защитата на вашите
				лични данни. Тази политика за поверителност обяснява каква информация събираме, как я
				използваме и как я защитаваме.
			</p>

			<h2 class="text-2xl font-bold">Каква информация събираме</h2>

			<p>
				Когато използвате нашата <strong>контактна форма</strong>, можем да събираме следната
				информация:
			</p>

			<ul>
				<li>Име</li>
				<li>Телефонен номер</li>
				<li>Имейл адрес</li>
				<li>Относно (предмет на запитване)</li>
				<li>Съобщение</li>
			</ul>

			<h2 class="text-2xl font-bold">За какво използваме информацията:</h2>

			<p>
				Събраната от нас информация се използва само за целите на връзка с клиенти и отговор на
				запитвания от ваша страна. Никога няма да споделяме вашите данни с трети страни без вашето
				изрично съгласие.
			</p>

			<h2 class="text-2xl font-bold">Защита на личните данни</h2>

			<p>
				Ние предприемаме подходящи мерки за защита на вашата лична информация срещу неоторизиран
				достъп или разкриване. Сайтът ни използва сигурностни мерки за предотвратяване на загуба,
				злоупотреба или промяна на информацията, която ни предоставяте.
			</p>

			<h2 class="text-2xl font-bold">Линкове към други уебсайтове</h2>

			<p>
				Нашият уебсайт може да съдържа линкове към други уебсайтове, представляващи интерес. Въпреки
				това, след като сте използвали тези връзки, за да напуснете нашия сайт, трябва да имате
				предвид, че ние нямаме никакъв контрол върху този друг уебсайт. Поради това не можем да
				носим отговорност за защитата и поверителността на каквато и да е информация, която
				предоставяте, докато посещавате такива сайтове и такива сайтове не се управляват от тази
				декларация за поверителност. Трябва да бъдете внимателни и да погледнете декларацията за
				поверителност, приложима за въпросния уебсайт.
			</p>

			<h2 class="text-2xl font-bold">Вашите права</h2>

			<p>
				Можете да изберете да ограничите събирането или използването на вашата лична информация по
				следните начини:
			</p>

			<ul>
				<li>
					Ако преди това сте се съгласили да използваме вашата лична информация за целите на
					директния маркетинг, можете да промените решението си по всяко време, като ни пишете или
					изпратите имейл на <a href="mailto:mpclimabg@gmail.com">mpclimabg@gmail.com</a>.
				</li>
				<li>
					Ние няма да продаваме, разпространяваме или даваме под наем вашата лична информация на
					трети страни, освен ако не разполагаме с вашето разрешение или са задължени по закон да го
					направят.
				</li>
				<li>
					Можете да поискате подробности за личната информация, която съхраняваме за вас. Ако
					желаете копие от информация за вас, моля, пишете на <a href="mailto:mpclimabg@gmail.com"
						>mpclimabg@gmail.com</a
					>.
				</li>
				<li>
					Ако смятате, че информацията, която съхраняваме за вас, е невярна или непълна, моля,
					пишете на или изпратете електронна поща на горепосочения адрес. Ние незабавно ще
					коригираме всяка информация, за която бъде намерена неправилно.
				</li>
			</ul>

			<h2 class="text-2xl font-bold">Промени в нашата политика за поверителност</h2>

			<p>
				Ние можем да актуализираме тази политика за поверителност от време на време, като
				публикуваме нова версия на нашия уебсайт. Препоръчително е да преглеждате тази страница
				периодично, за да сте информирани за промените.
			</p>

			<p>Последно актуализирано: 01.01.25</p>
		</div>
	</div>
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		max-width: 90%;
		margin: 10px auto;
		padding: 50px;
		background-color: rgba(0, 0, 0, 0.463);
		border: 1px;
		border-radius: 8px;
	}

	.content {
		justify-content: center;
		text-align: center;
	}

	.content h1 {
		font-size: 3rem;
		color: #ffffff;
		margin-top: 20px !important;
		margin-bottom: 30px;
	}

	.content h2 {
		font-size: 2.2rem;
		color: #ffffff;
		margin-top: 20px !important;
		margin-bottom: 7px;
	}

	.content p {
		font-size: 1.3rem;
		color: #e8e8e8;
		line-height: 1.8;
		margin: 10px 0;
	}

	.content ul {
		padding: 0;
		list-style: none;
		margin: 10px 0;
	}

	.content li {
		font-size: 1.3rem;
		color: #e8e8e8;
		line-height: 1.8;
		margin: 5px 0;
	}

	a {
		color: #4fc3f7;
		text-decoration: none;
	}

	a:hover {
		color: #81d4fa;
		transition: color 0.3s;
	}

	@media (min-width: 1024px) {
		.container {
			max-width: 70%;
		}

		.content h1 {
			font-size: 3.3rem;
		}

		.content h2 {
			font-size: 2.08rem;
		}

		.content p,
		.content li {
			font-size: 1.25rem;
		}
	}

	@media (max-width: 768px) {
		.container {
			padding: 60px;
		}

		.content h1 {
			text-align: center !important;
			font-size: 2.6rem;
		}

		.content h2 {
			font-size: 2rem;
		}

		.content p,
		.content li {
			font-size: 1.2rem;
		}
	}

	@media (max-width: 480px) {
		.container {
			padding: 50px;
		}

		.content h1 {
			text-align: center !important;
			font-size: 2.2rem;
			margin-top: 10px !important;
		}

		.content h2 {
			font-size: 1.6rem;
		}

		.content p,
		.content li {
			font-size: 1.11rem;
		}
	}
</style>
