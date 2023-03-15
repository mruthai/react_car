import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import CarInfo from '../components/CarInfo'

export default function CarId() {
    const { id } = useParams()
    const [carId, setCarId] = useState({})
    const [carError, setFalse] = useState(false)

    useEffect(() => {
        async function getCarId() {
            const response = await fetch(`https://my-json-server.typicode.com/Llang8/cars-api/cars/${id}`)
            if (response.status === 404){
                setFalse(true)
            }else {
                const data = await response.json()
                setCarId(data)
            }
            
        }
        getCarId()
    }, [id])

        return (
            <div className="App">
                <h1>D&L's Car's for Sale</h1>     
                <h2>Car Id# { id } </h2>
                {
                    carError ?(
                        <p>404 Error Car not Found</p>
                    ) : (
                <div > 
                
                <CarInfo car={carId} hidelink={true} />
                </div>
                )}
            </div>
        )


}