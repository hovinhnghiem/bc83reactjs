import Content from "./content"
import Footer from "./footer"
import Header from "./header"
import Navbar from "./navbar"

function Baitap1() {
    return (
        <div>
            <h1>Bài Tập 1</h1>
            <Header />
            <div style={{display: "flex"}}>
                <Navbar/>
            <Content/>
            </div>
            <Footer />
        </div>


    )
}

export default Baitap1