"use client";
import Hero from '../sections/AboutHero'
import Mission from '../sections/Mission'
import Values from '../sections/Values'
import Story from '../sections/Story'

export default function About() {
    return (
        <div className='pt-16'>
            <Hero />
            <Mission />
            <Values />
            <Story />
        </div>
    );
}