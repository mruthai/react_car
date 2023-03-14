import { useState } from "react"

export default function Counter(props) {

    const [ carCount, setCarCount] = useState(props.initialCarCount || 150)
    const [ count, setCount ] = useState(props.initialCount || 0)

    function incrementCar (incrementor) {
        setCarCount(carCount + incrementor)
       
    }


    function increment (incrementor) {
        setCount(count + incrementor)
      
    }
    

   

    return (
        <div>
            <h2> { props.title || 'Number of Cars' } </h2>
            <h4> { props.description || 'Details Unvailable'}</h4>
            <h5> {props.color || 'Color N/A'}</h5>
              Current Count: { count}
            <div>
                
                

                
               
                {
                (carCount < 0) ?
                <button onClick={ () => incrementCar(-1) }>Decrement</button>
                :
                <></>
                }
                
            </div>

            <div>   
                <button onClick={ () => increment(1) }>Increment</button>
                {
                (count > 0) ?
                <button onClick={ () => increment(-1) }>Decrement</button>
                :
                <></>
                }
                
            </div>
        </div>
    )

}

