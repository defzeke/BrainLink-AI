import Hero from '../sections/Hero';
import Benefits from '../sections/Benefits';
import Cta from '../sections/CTA';


export default function Home() {    
    return (
        <div className='pt-16'>
            <Hero />
            <Benefits />
            <Cta />
        </div>
    );
}