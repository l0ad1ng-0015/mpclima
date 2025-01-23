import { SitemapStream, streamToPromise } from 'sitemap';

export async function GET() {
	const sitemap = new SitemapStream({ hostname: 'https://mpclima.com' });

	const links = [
		{ url: '/', changefreq: 'daily', priority: 1.0 },
		{ url: '/сертификати', changefreq: 'monthly', priority: 0.8 },
		{ url: '/партньори', changefreq: 'monthly', priority: 0.8 },
		{ url: '/галерия', changefreq: 'monthly', priority: 0.8 },
		{ url: '/услуги', changefreq: 'monthly', priority: 0.8 },
		{ url: '/контакти', changefreq: 'monthly', priority: 0.8 },
		{ url: '/activities/монтаж', changefreq: 'monthly', priority: 0.8 },
		{ url: '/activities/демонтаж', changefreq: 'monthly', priority: 0.8 },
		{ url: '/activities/профилактика', changefreq: 'monthly', priority: 0.8 },
		{ url: '/продажба', changefreq: 'monthly', priority: 0.8 },
		{ url: '/activities/сервизно-обслужване', changefreq: 'monthly', priority: 0.8 },
		{ url: '/защита-лични-данни', changefreq: 'monthly', priority: 0.8 },
		{ url: '/activities/нестандартни-услуги', changefreq: 'monthly', priority: 0.8 }
	];

	links.forEach((link) => sitemap.write(link));
	sitemap.end();

	const xml = await streamToPromise(sitemap);
	return new Response(xml, {
		headers: { 'Content-Type': 'application/xml' }
	});
}
