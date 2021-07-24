import React from 'react'
import Trending from '../../components/Trending'

const TrendingPage = () => {
    const  getData = async () => {
        let data = await fetch('https://api.themoviedb.org/3/trending/all/week?api_key=0869793797f938ae11efc2397000a89e')
        let result =  data.json()
        console.log(result)

    }
    getData()
    return (
        
        <div>
           <Trending />
        </div>
    )
}

export default TrendingPage
