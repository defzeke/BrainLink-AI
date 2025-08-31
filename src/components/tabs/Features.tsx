"use client";
import Hero from '../sections/FeaturesHero'
import MainFeats from '../sections/MainFeats'
import MoreFeats from '../sections/MoreFeatures'
import HowItWorks from '../sections/HowItWorks'


export default function Features() {
    return (
        <div className='pt-16'>
            <Hero />
            <MainFeats />
            <MoreFeats />
            <HowItWorks />
        </div>
    );
}