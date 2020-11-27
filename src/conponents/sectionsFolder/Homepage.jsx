import React from 'react'
import { Link } from 'react-scroll'
import { ReactComponent as BarberChair } from '../../pictures/barber-chair.svg'
import { ReactComponent as Barber } from '../../pictures/barber.svg'
import { ReactComponent as Scissors } from '../../pictures/scissors.svg'


function Homepage() {
     return (
        <div className='home-page-sections'>
            <section className='first-section'>
                <div className='center-header'>
                     <h1>Välkomna!!!</h1> 
                </div>

                <div className='down-arrow-container'>
                   <Link
                   to='second-section'
                   activeClass='active'
                   spy={true}
                   smooth={true}
                   offset={-70}
                   duration={500}
                   >
                   </Link>
                </div>
            </section>

            <section className='second-section'>
                <div className='company-greetings'>
                    <div className='company-header'>
                        <h1>SAX DAX</h1>
                    </div>

                    <div className='about-us'>
                        <p>
                            Must go faster... go, go, go, go, go! 
                            You're a very talented young man, with your own clever thoughts and ideas. 
                            Do you need a manager? So you two dig up, dig up dinosaurs? Forget the fat lady! 
                            You're obsessed with the fat lady! Drive us out of here!
                        </p>
                    </div>

                    <div className='skills'>
                        <div className='skills-container'>
                            <Scissors className='scissor' height={90} width={'auto'} fill={'white'}/>
                            <p>Klippning</p>
                        </div>

                        <div className='skills-container'>
                            <BarberChair className='barber-chair' height={90} width={'auto'} fill={'white'}/>
                            <p>Service</p>
                        </div>
                        
                        <div className='skills-container'>
                            <Barber className='barber' height={90} width={'auto'} fill={'white'}/> 
                            <p>Skägg</p> 
                        </div>
                     
                    </div>
                </div>
            </section>

            <section className='third-section'>
                
            </section>
        </div>
    )
}

export default Homepage
