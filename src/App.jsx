import { useState } from 'react'
import './App.css'
import { useQuery , gql } from '@apollo/client'

const QUERY = gql`
  query{
     authors{
      name
     }
  }
`

function App() {
  const {loading , data } = useQuery(QUERY)
  console.log(data);

  return (
    <>
      <h1>Hello world</h1>
    </>
  )
}

export default App
