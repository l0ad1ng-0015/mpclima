<script lang="ts">

	let name = '';
    let phone = '';
	let email = '';
	let message = '';
	let statusMessage = '';
	let apples = 'apples';

	const submitForm = async () => {
		if (apples != 'oranges') {
			return;
		}

		const chat_id = '-1002036390065';
		const botID = '6537438238:AAFfi1D4ZP1FYkb87uBi3tAVOFM1LoSOuAo';
		const telegramURL = `https://api.telegram.org/bot${botID}/sendMessage`;

        // https://api.telegram.org/bot6537438238:AAFfi1D4ZP1FYkb87uBi3tAVOFM1LoSOuAo/getUpdates

		let text = JSON.stringify({ name, phone, email, message }, null, 2);
		try {
			const response = await fetch(telegramURL, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ chat_id, text })
			});

			if (response.ok) {
				statusMessage = 'Съобщението беше изпратено успешно!';
			} else {
				statusMessage = 'Изпращането беше неуспешно :( ' + (await response.text());
			}
		} catch (error) {
			console.error('Error:', error);
			statusMessage = 'An error occurred.';
		}

		name = '';
        phone = '';
		email = '';
		message = '';
	};

	const doApples = () => {
		apples = 'oranges';
		console.log('apples', apples);
	};

</script>


<div class="container">
   <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.445706307486!2d23.274026515409493!3d42.69254797916666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa9acd9081f3f5%3A0x88aab783889b867d!2s%C2%BB%D0%A0%D0%B8%D1%88%D0%BA%D0%B8%20%D0%BF%D1%80%D0%BE%D1%85%D0%BE%D0%B4%C2%AB%204%2C%201373%20%D0%B6.%D0%BA.%20%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%B0%20%D0%BF%D0%BE%D0%BB%D1%8F%D0%BD%D0%B0%202%2C%20%D0%A1%D0%BE%D1%84%D0%B8%D1%8F!5e0!3m2!1sen!2sbg!4v1630504245117!5m2!1sen!2sbg" 
        width="600" 
        height="600" 
        frameborder="0" 
        allowfullscreen="" aria-hidden="false" tabindex="0" loading="lazy"></iframe>

        <p>Адрес: Ришки Проход 4, София</p>
        <p>Телефони: 0899 591664, 0898 414816</p>
        <p>Работно време: Понеделник-Петък 8:00 - 20:00</p>
   </div>

   <div class="contact">
        <div class="contact-content">
            <h2>Свържете се с нас</h2>
            <p>Ако имате въпроси или запитвания, <br> моля свържете се с нас .</p>
        
            <form on:submit|preventDefault={submitForm} class="contact-form">
                <input type="hidden" bind:value={apples} />
                <input type="text" name="name" bind:value={name} placeholder="Име">
                <input type="number" name="phone" bind:value={phone} placeholder="Телефон">
                <input type="email" name="email" bind:value={email} placeholder="Имейл">
                <textarea on:input={doApples} bind:value={message} name="message" placeholder="Вашето ъобщение"></textarea>
                <button type="submit">Изпрати</button>
                <p>{statusMessage}</p>
            </form>
        </div>
   </div>
</div>


<style>
    p, h2 {
        color: white;
    }

    .container {
        display: flex;
        justify-content: center;
        /* border: solid 1px green; */
        width: 100%;
        gap: 2rem;
        flex-wrap: wrap-reverse;
        align-items: flex-end;
       
        /* align-items: stretch; */
        & div {
            /* border: solid 1px red; */
        }

    }
    
    .contact {
        text-align: center;
    }

    .contact-content {
        width: 100%;
        max-width: 500px;
        background-color: rgba(0, 0, 0, 0.7);
        padding: 25px;
        border-radius: 25px;
        text-align: center;
    }

    .contact h2,
    .contact p {
        color: #fff;
    }



    .contact form {
        /* Other styles */
        position: relative;
    }
    .contact input[type="text"],
    .contact input[type="number"],
    .contact input[type="email"],
    .contact textarea {
        display: block; /* Make input fields and textarea block-level elements */
        width: 95%; /* Set their width to 100% to make them full-width */
        background-color: rgba(255, 255, 255, 0.2); /* Add a translucent white background */
        border: 2px solid #0070BB; /* Add a blue border */
        border-radius: 5px;
        color: #fff; /* Change text color to white */
        padding: 10px;
        font-size: 13px;
        backdrop-filter: blur (10px); /* Apply a blur effect to the background */
        margin-bottom: 10px; /* Add spacing between fields */
    }

    /* Rest of the styles remain the same */


    .contact input[type="text"]::placeholder,
    .contact input[type="number"]::placeholder,
    .contact input[type="email"]::placeholder,
    .contact textarea::placeholder {
        color: #fff; /* Change placeholder text color to white */
    }

    .contact input[type="text"]:focus,
    .contact input[type="email"]:focus,
    .contact textarea:focus {
        outline: none;
        border-color: #00518A; /* Change border color on focus */
    }

    .contact button[type="submit"] {
        /* Other button styles... */
        background-color: #0070BB;
        color: #fff;
    }

    .contact h2,
    .contact p {
        color: #fff; /* Change the text color to white */
    }
    /* Additional CSS styles for contact form */



</style>