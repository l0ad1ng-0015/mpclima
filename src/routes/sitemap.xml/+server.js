export async function GET() {
	const urls = ['https://mpclima.bg/', 'https://mpclima.com/'];
	const urls = ['https://mpclima.com/%D1%83%D1%81%D0%BB%D1%83%D0%B3%D0%B8/'];
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
