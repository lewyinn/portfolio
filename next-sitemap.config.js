/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://mrdhkrnwn.vercel.app/', // ganti domainmu
    generateRobotsTxt: true, // otomatis bikin robots.txt
    sitemapSize: 5000, // pecah sitemap kalau lebih dari 5000 URL
    changefreq: 'weekly',
    priority: 0.7,
    robotsTxtOptions: {
        policies: [
            { userAgent: '*', allow: '/' },
        ],
    },
};