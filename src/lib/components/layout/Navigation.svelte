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
		  <span></span>
		</label>
	
		<ul class="menu__box">
			<li><a class="menu__item" href="/">Начало</a></li>
			<li class="submenu">
				<a class="menu__item" href="#">За нас</a>
				<!-- <ul class="sub-nav">
					<li><a href="/партньори">Партньори</a></li>
					<li><a href="/галерия">Галерия</a></li>
				</ul> -->
			</li>
			<li class="submenu">
				<a class="menu__item" href="/дейности">Услуги</a>
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
			<a href="/дейности">Услуги</a>
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
	position: fixed;
	top: 90px;
	right: 20px;
	width: 26px;
	height: 26px;
	cursor: pointer;
	z-index: 1;
	}
	.menu__btn > span,
	.menu__btn > span::before,
	.menu__btn > span::after {
	display: block;
	position: absolute;
	width: 100%;
	height: 2px;
	background-color: #ffffff;
	transition-duration: .25s;
	}
	.menu__btn > span::before {
	content: '';
	top: -8px;
	}
	.menu__btn > span::after {
	content: '';
	top: 8px;
	}
	.menu__box {
	display: block;
	position: fixed;
	top: 0;
	right: -100%;
	width: 200px;
	height: 100%;
	margin: 0;
	padding: 80px 0;
	list-style: none;
	background-color: #0070bb;
	box-shadow: 2px 2px 6px rgba(0, 0, 0, .4);
	transition-duration: .25s;
	}
	.menu__item {
	display: block;
	padding: 12px 24px;
	color: #333;
	font-family: 'Roboto', sans-serif;
	font-size: 20px;
	font-weight: 600;
	text-decoration: none;
	transition-duration: .25s;
	}
	.menu__item:hover {
	background-color: #007BFF;
	border-radius: 12px;
	}

	@media screen and (min-width: 880px) {
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
		position: fixed;
		top: 20px;
		right: 20px;
		width: 26px;
		height: 26px;
		cursor: pointer;
		z-index: 1;
		}
		.menu__btn > span,
		.menu__btn > span::before,
		.menu__btn > span::after {
		display: none;
		position: absolute;
		width: 100%;
		height: 2px;
		background-color: #616161;
		transition-duration: .25s;
		}
		.menu__btn > span::before {
		content: '';
		top: -8px;
		}
		.menu__btn > span::after {
		content: '';
		top: 8px;
		}
		.menu__box {
		display: none;
		position: fixed;
		top: 0;
		right: 0;
		width: 500px;
		height: 100%;
		margin: 0;
		padding: 80px 0;
		list-style: none;
		background-color: #0070bb;
		box-shadow: 2px 2px 6px rgba(0, 0, 0, .4);
		transition-duration: .25s;
		}
		.menu__item {
		display: none;
		padding: 12px 24px;
		color: #1369e1;
		font-family: 'Roboto', sans-serif;
		font-size: 20px;
		font-weight: 600;
		text-decoration: none;
		transition-duration: .25s;
		}
		.menu__item:hover {
		background-color: #1369e1;
		}
	
		.menu__item ul li {
			display: block;
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
        position: absolute;
        top: 0;
        right: 0;
        margin-top: 30px; /* Adjust as needed */
        margin-right: 20px; /* Adjust as needed */
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
