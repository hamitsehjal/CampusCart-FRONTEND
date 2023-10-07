import Footer from "./footer";
import Navbar from "./navbar";
// This is the Shared Layout of CampusCart
export default function Layout({ children }) {
    return (<div>
        <Navbar />
        {children}
        <Footer />
    </div>)
}