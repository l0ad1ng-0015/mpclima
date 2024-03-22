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
	
	
	<ul>
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
	@media screen and (max-width: 1010px) {
		.logo {
			width: 300px; /* Adjusted width for smaller screens */
		}
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

	@media screen and (max-width: 820px) {
        .icon {
            display: block; /* Show the icon */
            /* Add any additional styling for your icon here */
            width: 24px;
            height: 24px;
            fill: #fff; /* Set the fill color */
        }
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
