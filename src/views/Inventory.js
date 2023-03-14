import { useState } from 'react'
import Counter from '../components/CarInfo'

export default function Inventory() {
    
    const [carCounter, setCarCount] = useState([
        {
            title: 'Total Cars on Lot',
            description: 'Only 150 available vehicles',
            intialCarCount: 145
        }
    ])

    const [counters, setCounter] = useState([
        
        {
            title: 'Saturn Geo',
            description: 'The Cream of Cars!',
            intialCount: 24
        },
        {
            title: 'Saturn Vue 2WD',
            description: 'Best mini SUV on the market',
            intialCount: 5
        },
        {
            title: 'Saturn Ion Level 3',
            description: '',
            intialCount: 10
        },
        {
            title: 'Saturn Sky',
            description: 'Remember Outrun ',
            intialCount: 1
        },
        {
            title: 'Saturn SW2',
            description: 'The Wagon of all Wagons',
            intialCount: 2
        },

    ])
    

    return (
        <div className="App">
                <h1>Inventory</h1>
                
            {
                carCounter.map((counter) => <Counter title={counter.title} description={counter.description} initialCount={counter.intialCarCount} />)
            }
            {
                counters.map((counter) => <Counter title={counter.title} description={counter.description} initialCount={counter.intialCount} />)  
            }


        </div>
    );
}