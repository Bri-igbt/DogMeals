import Hero from "./components/Hero.tsx";
import Foundation from "./components/Foundation.tsx";
import Card from "./components/Card.tsx";
import Feeds from "./components/Feeds.tsx";
import Loader from "./components/Loader.tsx";
import { useState, useEffect } from 'react';

const App = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); 
        
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <div className="overflow-x-hidden">
            <Hero />
            <Foundation />
            <Card />
            <Feeds />
        </div>
    )
}

export default App;
