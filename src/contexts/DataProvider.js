import { useState, useEffect, createContext, useContext } from "react";
import { getFirestore, getDocs, collection, getDoc, doc } from '@firebase/firestore'

export const DataContext = createContext()

export const DataProvider = function(props) {
    const[cars, setCars] = useState([])
    const db = getFirestore();
    console.log(cars)
    useEffect(() => {
        async function getCars() {
            const querySnapshot = await getDocs(collection(db, 'cars'))
            const loadedCars = []
            querySnapshot.forEach((doc) => {
                loadedCars.push({
                    id: doc.id,
                    ...doc.data()
                })
                
            })
            setCars(loadedCars)
           
        }
        getCars()
    }, [])

    async function getCar(id) {
        const docRef = doc(db, 'cars', id)
        const docSnap = await getDoc(docRef)

        if (!docSnap.exists()){
            throw new Error
        }

       return docSnap.data()
    }
       
    const value = {
        cars,
        getCar
        
    }
       
    return (
        <DataContext.Provider value={value}>
            { props.children }
        </DataContext.Provider>
    )
}