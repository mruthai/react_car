import { useParams } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import CarInfo from '../components/CarInfo'
import { DataContext } from '../contexts/DataProvider'

export default function CarId() {
    const { id } = useParams()
    const [carId, setCarId] = useState({})
    const [carError, setCarError] = useState(false)
    const { getCar } = useContext(DataContext)

    useEffect(() => {
        async function handleload() {
            try {
                const data = await getCar(id)
                setCarId(data)
            } catch (error) {
                setCarError(true)
            }
        }
        handleload()

    }, [])

    return (
        <div className="App">
            {carError ?
                <>
                    <h3> 404 error</h3>
                    <p>Post with id {id} could not be found</p>
                </> :

                <>
                    <h1>D&L's Car's for Sale</h1>
                    <h2>Car Id# {id} </h2>
                    <CarInfo car={carId} hidelink={true} />
                </>
            }
        </div>
    )

}