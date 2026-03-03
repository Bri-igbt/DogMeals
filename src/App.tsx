import Hero from "./components/Hero.tsx";
import Foundation from "./components/Foundation.tsx";
import Card from "./components/Card.tsx";
import Feeds from "./components/Feeds.tsx";

const App = () => {
    return (
        <div className="overflow-x-hidden">
            <Hero />
            <Foundation />
            <Card />
            <Feeds />
        </div>
    )
}
export default App
