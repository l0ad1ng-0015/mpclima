<!-- <script>
  // You can add your JavaScript logic here if needed
</script>

<style>
  body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background: #f4f4f4;
  }

  .container {
      text-align: center;
      padding: 50px;
      background: #fff;
      margin: 20px auto;
      max-width: 1200px;
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  }

  h1 {
      color: #333;
      font-size: 2.5em;
  }

  p {
      color: #666;
      font-size: 1.2em;
  }

  .services, .fast-services {
      margin: 50px 0;
  }

  .services h2, .fast-services h2 {
      color: #333;
      font-size: 2em;
  }

  .service-cards, .fast-service-cards {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
  }

  .card {
      background: #fff;
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      margin: 10px;
      padding: 20px;
      width: 250px;
      text-align: center;
  }

  .card h3 {
      color: #333;
      font-size: 1.5em;
  }

  .card p {
      color: #666;
      font-size: 1em;
  }

  .card button {
      background: #007BFF;
      color: #fff;
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
      transition: background 0.3s;
  }

  .card button:hover {
      background: #0056b3;
  }

  footer {
      background: #333;
      color: #fff;
      text-align: center;
      padding: 20px;
      margin-top: 50px;
  }

  footer p {
      margin: 0;
  }
</style>

<div class="container">
  <h1>Добре дошли !</h1>
  <p>Фирма за климатици, която ще Ви предостави добро обслужване и коректно отношение.</p>
  <div>
      <a href="/продажба">
          <button type="button">ПРОДАЖБА КЛИМАТИЦИ</button>
      </a>
  </div>
</div>

<div class="services">
  <h2>Услуги</h2>
  <div class="service-cards">
      <div class="card">
          <h3>Монтаж</h3>
          <p>Професионален монтаж на климатици.</p>
          <button>Научи повече</button>
      </div>
      <div class="card">
          <h3>Ремонт</h3>
          <p>Бързо и качествено обслужване.</p>
          <button>Научи повече</button>
      </div>
      <div class="card">
          <h3>Поддръжка</h3>
          <p>Регулярна поддръжка за дълъг живот.</p>
          <button>Научи повече</button>
      </div>
  </div>
</div>

<div class="fast-services">
  <h2>Бързи Услуги</h2>
  <div class="fast-service-cards">
      <div class="card">
          <h3>Бърз Монтаж</h3>
          <p>Монтаж в рамките на 24 часа.</p>
          <button>Научи повече</button>
      </div>
      <div class="card">
          <h3>Експресен Ремонт</h3>
          <p>Ремонт в рамките на деня.</p>
          <button>Научи повече</button>
      </div>
      <div class="card">
          <h3>Спешна Поддръжка</h3>
          <p>Поддръжка при спешни случаи.</p>
          <button>Научи повече</button>
      </div>
  </div>
</div>

<footer>
  <p>© 2024 Вашата фирма за климатици. Всички права запазени.</p>
</footer> -->

<!--
<script>
  // You can add your JavaScript here if needed
</script>

<style>
  .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 20px;
  }

  .services, .contact {
      margin: 20px 0;
  }

  .services h2, .contact h2 {
      margin-bottom: 10px;
  }

  .service-items, .contact-items {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
  }

  .service-item, .contact-item {
      margin: 10px;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 10px;
      text-align: center;
      width: 200px;
      transition: transform 0.3s;
  }

  .service-item:hover, .contact-item:hover {
      transform: scale(1.05);
  }

  .service-item img, .contact-item svg {
      width: 100px;
      height: 100px;
      margin-bottom: 10px;
  }

  button {
    width: 200px;
    padding: 15px 0;
    text-align: center;
    margin: 40px 15px;
    border-radius: 25px;
    font-weight: bold;
    border: 2px solid #0070BB;
    background-color: rgba(0, 0, 0, 0.17);
    color: #fff;
    cursor: pointer;
    overflow: hidden;
    z-index: 1;
  }

button:hover{
    background-color: #0070BB;
    color: #fff
}
</style>

<div class="container">
  <h1>Добре дошли!</h1>
  <p>Фирма за климатици, която ще Ви предостави добро обслужване и коректно отношение.</p>
  <div>
      <a href="/продажба">
          <button type="button">ПРОДАЖБА КЛИМАТИЦИ</button>
      </a>
  </div>


  <div class="services">
      <h2>Услуги</h2>
      <div class="service-items">
          <div class="service-item">
              <img src="https://via.placeholder.com/100" alt="Service 1">
              <h3>Инсталация</h3>
              <p>Професионална инсталация на климатици.</p>
              <button>Виж повече</button>
          </div>
          <div class="service-item">
              <img src="https://via.placeholder.com/100" alt="Service 2">
              <h3>Поддръжка</h3>
              <p>Редовна поддръжка и сервиз.</p>
              <button>Виж повече</button>
          </div>
          <div class="service-item">
              <img src="https://via.placeholder.com/100" alt="Service 3">
              <h3>Ремонт</h3>
              <p>Ремонт на повредени климатици.</p>
              <button>Виж повече</button>
          </div>
      </div>
  </div>


  <div class="contact">
      <h2>Контакти</h2>
      <div class="contact-items">
          <div class="contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 12v-6m0 6H8m3 0h3" />
              </svg>
              <h3>Адрес</h3>
              <p>ул. Примерна 123, София</p>
          </div>
          <div class="contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M3 6h18M3 14h18M3 18h18" />
              </svg>
              <h3>Телефон</h3>
              <p>+359 123 456 789</p>
          </div>
          <div class="contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12v4h4M8 16H4v-4m12-4h4m-4-4v4H8m4 4H8v4M4 8h4" />
              </svg>
              <h3>Имейл</h3>
              <p>info@example.com</p>
          </div>
      </div>
  </div>
</div> -->




<div class="container">
    <h1>Добре дошли!</h1>
    <p>Фирма MP Clima е компания в областта на климатичните инсталации, предоставяща висококачествени услуги и решения за вашия дом или бизнес. Ние се стремим към съвършенство във всяка стъпка, от продажбата до монтажа и поддръжката на вашите климатици, осигурявайки комфорт и надеждност на нашите клиенти.</p>
    <!-- <div>
        <a href="/продажба">
            <button type="button">ПРОДАЖБА КЛИМАТИЦИ</button>
        </a>
    </div> -->
  
    <!-- Услуги Section -->
    <div class="services" style="margin-top: 60px;">
        <h2>Услуги</h2>
        <div class="service-items">
            <div class="service-item">
                <img src="/images/icons/stickman-montaj.png" alt="Service 1">
                <h3>Монтаж</h3>
                <p>Професионална инсталация на климатици. </p>
                <a href="/activities/монтаж">
                    <button style="padding: 10px 12px;" class="more">Разберете повече</button>
                </a>
                
            </div>
            <div class="service-item">
                <img src="/images/icons/stickman-demontaj.png" alt="Service 3">
                <h3>Демонтаж</h3>
                <p>Безопасно демонтиране на стари или повредени климатици.</p>
                <a href="/activities/демонтаж">
                    <button style="padding: 10px 12px;" class="more">Разберете повече</button>
                </a>
            </div>
            <div class="service-item">
                <img src="/images/icons/stickman-profilaktika.png" alt="Service 2">
                <h3>Профилактика</h3>
                <p>Редовна поддръжка и сервиз на вашите климатици.</p>
                <a href="/activities/профилактика">
                    <button style="padding: 10px 12px;" class="more">Разберете повече</button>
                </a>
            </div>
        </div>
    </div>
  
    <!-- Контакти Section -->
    <div class="contact">
        <h2>Контакти</h2>
        <div class="contact-items">
            <div class="contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...$$props}><path fill="white" d="M10 6h4V4h-4zm8 17q-2.075 0-3.537-1.463T13 18t1.463-3.537T18 13t3.538 1.463T23 18t-1.463 3.538T18 23M4 21q-.825 0-1.412-.587T2 19V8q0-.825.588-1.412T4 6h4V4q0-.825.588-1.412T10 2h4q.825 0 1.413.588T16 4v2h4q.825 0 1.413.588T22 8v2.9q0 .45-.387.675t-.813.025q-.65-.3-1.362-.45T18 11q-2.9 0-4.95 2.05T11 18q0 .45.063.913t.187.912q.125.425-.137.8t-.688.375zm14.5-3.2v-2.3q0-.2-.15-.35T18 15t-.35.15t-.15.35v2.275q0 .2.075.388t.225.337l1.5 1.5q.15.15.35.15T20 20t.15-.35t-.15-.35z"/></svg>
                <h3>Работно време</h3>
                <p>Понеделник-Петък 8:00 - 19:00</p>
            </div>
            <div class="contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48" {...$$props}><path fill="white" stroke="white" stroke-linejoin="round" stroke-width="4" d="M16.996 7.686a2 2 0 0 1 1.749 1.03l2.446 4.406a2 2 0 0 1 .04 1.865l-2.356 4.714s.683 3.511 3.541 6.37c2.859 2.858 6.358 3.53 6.358 3.53l4.713-2.357a2 2 0 0 1 1.866.04l4.42 2.458A2 2 0 0 1 40.8 31.49v5.073c0 2.584-2.4 4.45-4.848 3.624c-5.028-1.697-12.833-4.927-17.78-9.874c-4.946-4.947-8.177-12.751-9.873-17.78c-.826-2.447 1.04-4.847 3.624-4.847z"/></svg>
                <h3>Телефони</h3>
                <a href="tel:0899 591664">0899591664,  </a>
                <a href="tel:0898 414816"> 0898414816 </a>
            </div>
            <div class="contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...$$props}><path fill="white" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-.4 4.25l-6.54 4.09c-.65.41-1.47.41-2.12 0L4.4 8.25a.85.85 0 1 1 .9-1.44L12 11l6.7-4.19a.85.85 0 1 1 .9 1.44"/></svg>
                <h3>Имейл</h3>
                <a href="mailto:mpclimabg@gmail.com">mpclimabg@gmail.com</a>
            </div>
        </div>
    </div>
</div>

<style>
    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 20px;
    }

    .services, .contact {
        margin: 20px 0;
        width: 100%;
        max-width: 1200px;
    }

    .services h2, .contact h2 {
        margin-bottom: 20px;
        font-size: 2.5em;
        color: #9e9d9d;
    }

    .service-items, .contact-items {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }

    .service-item, .contact-item {
        margin: 10px;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 10px;
        text-align: center;
        width: 300px;
        transition: transform 0.3s;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        background: #00000096;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    .service-item:hover, .contact-item:hover {
        border-color: #0070BB;
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
      .service-items, .contact-items {
          justify-content: center;
      }
      .service-item, .contact-item {
          width: 90%;
          margin: 10px 0;
      }
  
      .more {
          width: 100%;
          padding: 10px 0;
      }
    }

    .contact-item svg {
      width: 100px;
      height: 100px;
      margin-bottom: 10px;
    }

    .contact-item svg:hover {
        fill: #0070BB;
    }

    .service-item h3, .contact-item h3 {
        margin: 10px 0;
        font-size: 1.5em;
    }

    .service-item p, .contact-item p, .contact-item a {
        font-size: 1em;
        color: #a9a6a6;
        text-decoration: none;
    }

    .contact-item a {
        font-size: 1em;
        color: #fffdfd;
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
      border: 2px solid #0070BB;
      background-color: rgba(0, 0, 0, 0.17);
      color: #fff;
      cursor: pointer;
      overflow: hidden;
      z-index: 1;
    }

    .more:hover {
      background-color: #0070BB;
      color: #fff;
    }
</style>
