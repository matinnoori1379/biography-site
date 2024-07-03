import About from "./component/about/about"
import Blog from "./component/blog/blog"
import Header from "./component/header/header"
import Services from "./component/services/services"
import Footer from "./component/footer/footer"

function App(){
    return(
        <>
        <Header></Header>
        <About></About>
        <Services></Services>
        <Blog></Blog>
        <Footer></Footer>
        </>
    )
}

export default App