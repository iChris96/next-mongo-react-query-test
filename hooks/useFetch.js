import { useEffect, useRef, useState } from 'react'


const useFetch = (url) => { //'api/todos'
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const getData = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json()
            setData(data)
        } catch (error) {
            console.log({ error })
            setError(error)
        }
        setIsLoading(false)
    }

    const reload = () => {
        setIsLoading(true)
        setTimeout(() => {
            getData()
        }, 3000);
    }


    useEffect(() => {
        setTimeout(() => {
            getData()
        }, 1000);
    }, [])

    return { data, error, isLoading, reload }
}

export default useFetch