import Footer from "./footer";
import Navbar from "./navbar";
// This is the Shared Layout of CampusCart
export default function Layout(props) {
    return (<div>
        <Navbar />
        {props.children}
        <Footer />
    </div>)
}