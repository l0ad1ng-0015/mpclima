<!--kak da se adjustne za vs ustroistva-->
<head>
	<title>MP Clima BG</title>
	<link rel="shortcut icon" type="x-icon" href="logo.png" />
</head>

  
<script type="ts">
	import './styles.css';
	import './transitions.css';
    import Navigation from "$lib/components/layout/Navigation.svelte";
	import Footer from "$lib/components/layout/Footer/Footer.svelte";
</script>

<div class="layoutWrapper">
    <Navigation />

	<div class="contentWrapper">
		<div class="content"><slot /></div>
		
	</div>
	<Footer />
</div>

<style>

    .contentWrapper {
        color: #fff; 
		display: flex;
		align-items: center;
		justify-content: center;
		/* padding-bottom: 500px; */
    }
	.content {
		/* border: solid 1px green; */
		margin: 0 auto;
		width: 90%;
		justify-content: center;
		padding: 20px;
		text-align: center;
	} 

	.submenu > a::after {
		content: '';
		background: url('/static/images/arrow_down.png') no-repeat;
		width: 10px; /* Adjust width and height based on your image size */
		height: 10px;
		display: inline-block;
		margin-left: 5px;
	}

	.layoutWrapper {
  		display: grid;
		/* keep nav on top, footer on bottom even on pages with less content */
		grid-template-rows: auto 1fr auto;
		min-height: 100vh;
  		/* end keep nav */
	}
</style>



