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
	
	<div class="icon">
		<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...$$props}><path fill="none" stroke="#888888" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6h18M3 12h18M3 18h18"/></svg>
	</div>
	
	

	<img src="/images/logo.png" class="logo" />
	<!---<img src="/images/arrow_down.png" class="arrow"> -->
	<ul>
		<li><a href="/">Начало</a></li>
		<li class="submenu">
			<a href="#">За нас</a>
			<!-- <svg class="arrow" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
				<path d="M0 0h16v16H0z" fill="none"/>
				<path d="M12.354 5.646a.5.5 0 01.353.854l-4.5 4.5a.5.5 0 01-.708 0l-4.5-4.5a.5.5 0 01.708-.708L8 10.293l4.646-4.647a.5.5 0 01.708 0z"/>
			</svg> -->
			<ul class="sub-nav">
				<li><a href="/партньори">Партньори</a></li>
				<li><a href="/галерия">Галерия</a></li>
				<!-- <li><a href="/tests-files">File for tests</a></li> -->
				<!-- <li><a href="/галерия2">Галерия 2</a></li>
				<li><a href="/галерия3">Галерия 3</a></li> -->
			</ul>
		</li>
		<li class="submenu">
			<a href="/дейности">Услуги</a>
			<!-- <ul class="sub-nav">
				<li><a href="/дейности">Дейности</a></li>
			</ul>
		</li> -->
		<li class="submenu">
			<a href="/контакти">Контакти</a>
			<!-- <ul class="sub-nav">
				<li><a href="/свържете-се">Свържете се</a></li>
			</ul> -->
		</li>
	</ul>
</div>

<style>
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
	.nav ul li {
		list-style: none;
		display: inline-table;
		margin: 1dvh;
		position: relative;
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
		left: 0;
		bottom: -5px;
		transition: 0.5s;
	}

	/* .nav ul li.active::after {
    width: 100%;
  } */
	.nav ul li:hover::after {
		width: 100%;
	}

	.icon {
		/* Add any additional styling for your icon here */
		width: 24px;
		height: 24px;
		fill: #fff; /* Set the fill color */
		display: none; /* Initially hide the icon */
	}
	.checkbtn {
		font-size: 30px;
		color: white;
		float: right;
		line-height: 80px;
		margin-right: 40px;
	}
	.arrow {
		fill: #fff;
		margin-left: 5px;
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
