
// For more information: https://nextjs.org/docs/pages/building-your-application/routing/custom-app#usage

import { SWRConfig } from 'swr';
import { getToken } from 'lib/authenticate';
import RouteGuard from '@/components/RouteGuard';
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

// options for SWRConfig
const swrConfig = {
    fetcher:
        async ([url, options]) => {
            const res = await fetch(url, options);
            // if the status code is not in the range of 200-299,
            // We will try to parse and throw an error 
            if (!res.ok) {
                const error = new Error(`Error while fetching data`);
                // Attach extra information to error object 
                error.info = await res.json();
                error.status = res.status;
                throw error;
            }
            return await res.json();

        }
}
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
            <RouteGuard>
                <Layout>
                    <SWRConfig value={swrConfig}>
                        <Component>{pageProps}</Component>
                    </SWRConfig>
                </Layout>
            </RouteGuard>
        </>)
}