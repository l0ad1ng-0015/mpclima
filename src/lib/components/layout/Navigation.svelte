<div class="nav">
	<script>
		!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys onSessionId".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
		posthog.init('phc_x3UekziHcG5eSZg9WHnXW81PGkH0AUORJbTz1GjfuE2',{api_host:'https://eu.posthog.com'})
	</script>
	
	

	<img src="/images/logo.png" class="logo" />
	<!---<img src="/images/arrow_down.png" class="arrow"> -->
	<ul>
		<li><a href="/">Начало</a></li>
		<li class="submenu">
			<a href="#">За нас</a>
			<ul class="sub-nav">
				<li><a href="/основаване">Основаване Фирма</a></li>
				<li><a href="/партньори">Партньори</a></li>
				<li><a href="/галерия">Галерия</a></li>
				<!-- <li><a href="/галерия2">Галерия 2</a></li>
				<li><a href="/галерия3">Галерия 3</a></li> -->
			</ul>
		</li>
		<li class="submenu">
			<a href="#">Услуги</a>
			<ul class="sub-nav">
				<li><a href="/дейности">Дейности</a></li>
				<li><a href="/доставка">Доставка</a></li>
			</ul>
		</li>

		<li class="submenu">
			<a href="#">Контакти</a>
			<ul class="sub-nav">
				<li><a href="/свържете се">Свържете се</a></li>
			</ul>
		</li>
	</ul>
</div>

<style>
	.nav {
		/* Corrected class name here */
        height: 11rem;
		width: 90%;
		margin: auto;
		padding: 30px 0 0 20px;
		display: flex;
		align-items: center;
		justify-content: space-between
        
	}
	.logo {
		cursor: pointer;
		padding: 50px 0 0 40px;
		width: 310px;
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
	.nav ul li:hover::after {
		width: 100%;
	}
</style>
