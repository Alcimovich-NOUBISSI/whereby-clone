import Header from "../header/header.js";
import Footer from "../footer/footer.js";

function Layout(props) {
    return(
        <>
        <Header/>
        <main> {props.children} </main>
        <Footer/>
        </>
    );
}

export default Layout;