import { apiUrl } from './config/constant';

export default async function sitemap() {
    // Define an array to hold all sitemap entries
    let sitemapEntries = [
        {
            url: process.env.SITE_URL,
            lastModified: new Date().toISOString(), // Convert date to ISO string for better compatibility
        },
        {
            url: process.env.SITE_URL + "about-us",
            lastModified: new Date().toISOString(), // Convert date to ISO string for better compatibility
        },
        {
            url: process.env.SITE_URL + "contact-us",
            lastModified: new Date().toISOString(), // Convert date to ISO string for better compatibility
        },
        {
            url: process.env.SITE_URL + "privacy-policy",
            lastModified: new Date().toISOString(), // Convert date to ISO string for better compatibility
        },
        {
            url: process.env.SITE_URL + "dmca-policy",
            lastModified: new Date().toISOString(), // Convert date to ISO string for better compatibility
        },
        {
            url: process.env.SITE_URL + "login",
            lastModified: new Date().toISOString(), // Convert date to ISO string for better compatibility
        },
        {
            url: process.env.SITE_URL + "register",
            lastModified: new Date().toISOString(), // Convert date to ISO string for better compatibility
        },
        {
            url: process.env.SITE_URL + "forgot-password",
            lastModified: new Date().toISOString(), // Convert date to ISO string for better compatibility
        },
        {
            url: process.env.SITE_URL + "guide",
            lastModified: new Date().toISOString(), // Convert date to ISO string for better compatibility
        },
        {
            url: process.env.SITE_URL + "feedback",
            lastModified: new Date().toISOString(), // Convert date to ISO string for better compatibility
        },
        {
            url: process.env.SITE_URL + "saved-quiz",
            lastModified: new Date().toISOString(), // Convert date to ISO string for better compatibility
        },
        {
            url: process.env.SITE_URL + "history",
            lastModified: new Date().toISOString(), // Convert date to ISO string for better compatibility
        },
        {
            url: process.env.SITE_URL + "book-price",
            lastModified: new Date().toISOString(), // Convert date to ISO string for better compatibility
        },
        {
            url: process.env.SITE_URL + "book-code",
            lastModified: new Date().toISOString(), // Convert date to ISO string for better compatibility
        },
        {
            url: process.env.SITE_URL + "profile",
            lastModified: new Date().toISOString(), // Convert date to ISO string for better compatibility
        },
        {
            url: process.env.SITE_URL + "change-email",
            lastModified: new Date().toISOString(), // Convert date to ISO string for better compatibility
        },
        {
            url: process.env.SITE_URL + "change-password",
            lastModified: new Date().toISOString(), // Convert date to ISO string for better compatibility
        },
        {
            url: process.env.SITE_URL + "change-profile-name",
            lastModified: new Date().toISOString(), // Convert date to ISO string for better compatibility
        },
        {
            url: process.env.SITE_URL + "change-phone-number",
            lastModified: new Date().toISOString(), // Convert date to ISO string for better compatibility
        },
    ];

    try {
        const res = await fetch(`${apiUrl}/sitemap.php`, {
            cache: 'no-store'
        });

        if (!res.ok) {
            // If the response is not ok, throw an error
            throw new Error('Failed to fetch data');
        }

        const data = await res.json(); // Make sure to await the json parsing
        const dynamicEntries = data.map(dt => ({
            url:  dt,
            lastModified: new Date().toISOString(), // Convert date to ISO string
        }));
        sitemapEntries = [...sitemapEntries, ...dynamicEntries];
    } catch (error) {
        console.error(error);
    }
    return sitemapEntries;
}
