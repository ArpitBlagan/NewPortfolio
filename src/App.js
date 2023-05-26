import { About } from "./Component/About";
import { Skills } from "./Component/Skills";
import {Contact} from "./Component/Contact";
import { Experince } from "./Component/Experince";
import { Navbar } from "./Component/Navbar";
function App(){
    return <main className="text-gray-400 bg-gray-900 body-font">
        <Navbar/>
        <About/>
        <Skills/>
        <Experince/>
        <Contact/>
    </main>
}
export default App;