export function slugify(str: string): string {
    return str
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

export const ENTRYPOINT: string = process.env.VERCEL_ENV && process.env.VERCEL_ENV === "production" ? "https://duoculturo.vercel.app"
    : process.env.VERCEL_URL ? "https://" + process.env.VERCEL_URL : 'http://localhost:3000'