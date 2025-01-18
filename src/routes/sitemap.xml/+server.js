export async function GET() {
	const urls = [
		'https://mpclima.com/',
		'https://mpclima.com/услуги',
		'https://mpclima.com/продажба',
		'https://mpclima.com/activities/монтаж',
		'https://mpclima.com/activities/демонтаж',
		'https://mpclima.com/activities/профилактика',
		'https://mpclima.com/activities/сервизно-обслужване',
		'https://mpclima.com/сертификати',
		'https://mpclima.com/контакти',
		'https://mpclima.com/галерия'
	];

	const sitemap = `<?xml version="1.0" encoding="UTF-8" ?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.map((url) => `<url><loc>${url}</loc></url>`).join('\n')}
</urlset>`;
	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
}
