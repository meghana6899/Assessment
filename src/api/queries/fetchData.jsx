import React from 'react'
import axios from 'axios'

const fetchData = async(capital) => {
 try {
    console.log("From API" ,capital)
    const response = await axios.get(`https://restcountries.com/v3.1/capital/${capital}`)
    return response.data
 } catch (error) {
    console.log(error)
 }
}

export default fetchData