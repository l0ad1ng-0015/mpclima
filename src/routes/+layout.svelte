<!--kak da se adjustne za vs ustroistva-->

<script type="ts">
	import './styles.css';
	import './transitions.css';
    import Navigation from "$lib/components/layout/Navigation.svelte";
</script>

<div>
    <Navigation />

	<background class="png" />

	<div class="content">
		<slot />
	</div>
</div>

<style>

    .content {
        /* width: 100%;
        position: absolute;
        top: 52%;
        transform: translateY(-50%);
        text-align: center; */
        color: #fff;
    }
  

	.submenu > a::after {
		content: '';
		background: url('/static/images/arrow_down.png') no-repeat;
		width: 10px; /* Adjust width and height based on your image size */
		height: 10px;
		display: inline-block;
		margin-left: 5px;
	}
</style>
