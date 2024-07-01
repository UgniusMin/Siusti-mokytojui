import Footer from "../components/Footer"
import Header from "../components/Header"

function MainPage(){
    return(
        <>
            <Header />
            <main>
                <div>
                    <button className="div__addButton--primary">+</button>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default MainPage