// create your App component here
import React, {useEffect, useState} from 'react'

function App() {
    const [imageLink, setImageLink] = useState('')

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => setImageLink(data.message))
            .catch(error => console.log(`Error fetching dog image ${error}`))
    }, [])

    if(!imageLink) return <p>Loading...</p>

  return (
    <img src={imageLink} alt='A Random Dog'></img>
  )
}

export default App
