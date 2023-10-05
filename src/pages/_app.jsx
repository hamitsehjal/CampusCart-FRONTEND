
// For more information: https://nextjs.org/docs/pages/building-your-application/routing/custom-app#usage
import Layout from '@/components/layout';
import '@/styles/globals.css';
import {
    Cinzel,
    Space_Mono,
    Noto_Serif,

} from 'next/font/google';

const sans = Cinzel({
    subsets: ['latin'],
    variable: '--font-sans',
    weight: '700',
});

const serif = Noto_Serif({
    subsets: ['latin'],
    variable: '--font-serif',
    weight: '400',
});

const mono = Space_Mono({
    subsets: ['latin'],
    variable: '--font-mono',
    weight: '400',
});
export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <style jsx global>
                {
                    `
                    :root{
                            --font-sans:${sans.style.fontFamily};
                            --font-serif:${serif.style.fontFamily};
                            --font-mono:${mono.style.fontFamily};
                        }
                    `
                }
            </style>
            <Layout>
                <Component>{pageProps}</Component>
            </Layout>
        </>)
}