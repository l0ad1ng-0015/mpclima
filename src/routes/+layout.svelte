<!--kak da se adjustne za vs ustroistva-->

<script type="ts">
    import'./styles.css'
    import './transitions.css'
</script>


<div class="banner">
    <div class="nav">
        <img src="/images/logo.png" class="logo">
       <!---<img src="/images/arrow_down.png" class="arrow"> --> 
        <ul>
            <li><a href="/">Начало</a></li>
            <li class="submenu">
                <a href="#">За нас</a>
                <ul class="sub-nav">
                    <li><a href="./основаване">Основаване Фирма</a></li>
                    <li><a href="./партньори">Партньори</a></li>
                    <li><a href="./галерия/">Галерия</a></li>
                </ul>
            </li>
            <li class="submenu">
                <a href="#">Ценови листи</a>
                <ul class="sub-nav">
                    <li><a href="./дейности">Дейности</a></li>
                    <li><a href="./доставка">Доставка</a></li>
     
                </ul>
            </li>

            <li class="submenu">
                <a href="#">Контакти</a>
                <ul class="sub-nav">
                    <li><a href="./връзки">Връзки</a></li>
                    <li><a href="./свържете се">Свържете се</a></li>
                </ul>
            </li>
            
        </ul>
    </div>
    
    <background class="png"></background>

    <div class="content">
        <slot />
    </div>
</div>

<style>


    .banner {
        width: 100%;
    }
    
    
    
    .submenu> a::after {
    content: '';
    background: url('/static/images/arrow_down.png') no-repeat;
    width: 10px; /* Adjust width and height based on your image size */
    height: 10px;
    display: inline-block;
    margin-left: 5px;
    }
</style>


 
