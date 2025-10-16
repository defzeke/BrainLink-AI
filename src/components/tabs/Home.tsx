import Hero from '../sections/Hero';
import Benefits from '../sections/Benefits';
import Cta from '../sections/CTA';


export default function Home() {    
    return (
        <div className='pt-16 px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24 lg:space-y-32'>
            <Hero />
            <Benefits />
            <Cta />
        </div>
    );
}