<div class="nav">
	<script>
		import { onMount } from 'svelte';

		let isNavVisible = false;
		let currentPath = window.location.pathname;

		function toggleNav() {
			isNavVisible = !isNavVisible;
		}

		// Function to check if a link is the active link
		function isActiveLink(link) {
			return currentPath === link;
		}

		// Update currentPath on component mount to handle initial state
		onMount(() => {
			currentPath = window.location.pathname;
		});
	</script>

	<a href="/">
		<img src="/images/logo.png" class="logo" />
	</a>

	<div class="menu__container">
		<input id="menu__toggle" type="checkbox" />
		<label class="menu__btn" for="menu__toggle">
			<span />
		</label>

		<ul class="menu__box">
			<li><a class="menu__item" href="/">Начало</a></li>
			<li class="submenu">
				<a class="menu__item" href="#">За нас</a>
				<ul class="sub-nav">
					<li><a href="/партньори">Партньори</a></li>
					<li><a href="/галерия">Галерия</a></li>
				</ul>
			</li>
			<li class="submenu">
				<a class="menu__item" href="/услуги">Услуги</a>
			</li>
			<li class="submenu">
				<a class="menu__item" href="/контакти">Контакти</a>
			</li>
		</ul>
	</div>

	<ul class="menu">
		<li><a href="/">Начало</a></li>
		<li class="submenu">
			<a href="#">За нас</a>

			<ul class="sub-nav">
				<li><a href="/партньори">Партньори</a></li>
				<li><a href="/галерия">Галерия</a></li>
			</ul>
		</li>
		<li class="submenu">
			<a href="/услуги">Услуги</a>
		</li>
		<li class="submenu">
			<a href="/контакти">Контакти</a>
		</li>
	</ul>
	<!-- <div class="icon">
		<img src="/icons/hamburger.svg" class="hamburger-menu" alt="/routes/галерия">
		<a href="контакти">с</a>
		
	</div> -->
</div>

<style>
	/* HAMBURGER MENU */

	#menu__toggle {
		opacity: 0;
	}
	#menu__toggle:checked + .menu__btn > span {
		transform: rotate(45deg);
	}
	#menu__toggle:checked + .menu__btn > span::before {
		top: 0;
		transform: rotate(0deg);
	}
	#menu__toggle:checked + .menu__btn > span::after {
		top: 0;
		transform: rotate(90deg);
	}
	#menu__toggle:checked ~ .menu__box {
		right: 0 !important;
	}
	.menu__btn {
		position: absolute;
		top: 50px;
		right: 18px;
		width: 30px;
		height: 37px;
		cursor: pointer;
		z-index: 1000;
	}
	.menu__btn > span,
	.menu__btn > span::before,
	.menu__btn > span::after {
		display: block;
		position: absolute;
		width: 100%;
		height: 3px;
		background-color: #ffffff;
		transition-duration: 0.25s;
	}
	.menu__btn > span::before {
		content: '';
		top: -8px;
	}
	.menu__btn > span::after {
		content: '';
		top: 8px;
	}

	.menu__container {
		position: relative; /* Change position to relative */
		display: none; /* Hide the menu container initially */
	}

	.menu__box {
		display: block;
		position: fixed;
		top: 0;
		right: -100%;
		width: 212px;
		height: 100%;
		margin: 0;
		padding: 80px 0;
		list-style: none;
		background-color: #0070bb;
		box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
		transition-duration: 0.25s;
		/* z-index: 1000; */
	}
	.menu__item {
		display: block;
		padding: 12px 24px;
		color: #333;
		font-family: 'Roboto', sans-serif;
		font-size: 20px;
		font-weight: 600;
		text-decoration: none;
		transition-duration: 0.25s;
	}
	.menu__item:hover {
		background-color: #007bff;
		border-radius: 12px;
	}

	@media screen and (max-width: 880px) {
		/* .menu__box {
		width: 175px;
		} */

		.menu__container {
			display: block; /* Show the menu container */
		}
	}

	@media screen and (min-width: 880px) {
		#menu__toggle {
			opacity: 1; /* Show the toggle button */
		}
		.menu__btn {
			display: block; /* Show the hamburger icon */
		}
		.menu__container {
			display: none; /* Hide the menu container */
		}
	}

	.nav {
		/* Corrected class name here */
		height: 11rem;
		width: 93%;
		margin: auto;
		padding: 30px 0 0 20px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.logo {
		cursor: pointer;
		padding: 10px 0 0 30px;
		width: 350px;
		position: relative;
	}

	.menu__container {
		position: fixed;
		top: 20px;
		right: 20px;
		margin-top: 30px; /* Adjust as needed */
		margin-right: 20px; /* Adjust as needed */
		z-index: 1000;
	}
	@media screen and (max-width: 880px) {
		.logo {
			width: 300px; /* Adjusted width for smaller screens */
			padding: 10px 0 0 10px;
		}
		.menu__container {
			position: absolute;
			top: 0;
			right: 0;
			margin-top: 30px; /* Adjust as needed */
			margin-right: 20px; /* Adjust as needed */
		}
	}

	@media screen and (max-width: 600px) {
		.logo {
			width: 250px; /* Adjusted width for smaller screens */
			padding: 10px 0 0 10px;
		}

		.menu__container {
			position: absolute;
			top: 0;
			right: 0;
			margin-top: 30px; /* Adjust as needed */
			margin-right: 20px; /* Adjust as needed */
		}
	}

	@media screen and (max-width: 510px) {
		.logo {
			width: 200px;
		}
		.nav {
			padding-top: 7px;
		}
		.menu__btn {
			top: 28px;
		}
		.menu__box {
			padding-top: 50px;
		}
		.menu__item {
			padding: 24px 24px;
		}
	}

	@media screen and (max-width: 390px) {
		/*RAZMER ZA NEW GEN IPHONE */
		.logo {
			width: 150px;
		}
		.nav {
			padding-top: 7px;
		}
		.menu__btn {
			top: 28px;
			width: 32px;
		}
		.menu__box {
			padding-top: 20px;
		}
		.menu__item {
			padding: 24px 24px;
		}
	}

	.nav ul li {
		list-style: none;
		display: inline-table;
		margin: 1dvh;
		position: relative;
	}

	@media screen and (max-width: 880px) {
		.nav ul.menu li {
			display: none;
		}
	}

	.nav ul li a {
		text-decoration: none;
		color: #fff;
		text-transform: uppercase;
	}
	.nav ul li::after {
		content: '';
		height: 3px;
		width: 0;
		background: #0070bb;
		position: absolute;
		right: 0;
		bottom: -5px;
		transition: 0.5s;
	}

	/* .nav ul li.active::after {
    width: 100%;
  } */
	.nav ul li:hover::after {
		width: 100%;
	}

	/* Media query to show the icon only on screens with a maximum width of 768px */
	/* @media screen and (min-width: 600px) {
		.logo {
		cursor: pointer;
		padding: 10px 0 0 30px;
		width: 210px span 2 / auto; 
		}

	} */
</style>
