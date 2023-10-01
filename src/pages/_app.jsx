
// For more information: https://nextjs.org/docs/pages/building-your-application/routing/custom-app#usage
import '@/styles/globals.css';

export default function MyApp({ Component, pageProps }) {
    return (<Component>{pageProps}</Component>)
}