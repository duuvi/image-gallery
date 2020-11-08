import React, { useState, useEffect } from 'react'
import ImageCard from './components/ImageCard'
import ImageSearch from './components/ImageSearch'

function App() {
	const PIXABAY_API_KEY = '19023687-665983c6ca257d688e5d021a0'

	const [images, setImages] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [term, setTerm] = useState('')

	useEffect(() => {
		fetch(`https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
			.then(res => res.json())
			.then(data => {
				setImages(data.hits)
				setIsLoading(false)
			})
			.catch(err => console.log(err))
	}, [term]);

	return (
		<div className="container mx-auto mt-5">
			<ImageSearch searchText={ (text) => setTerm(text) } />

			{
				!isLoading && images.length === 0 &&
				<h1 className="text-6xl text-center mx-auto mt-32">No se encontraron imágenes para esa búsqueda...</h1>
			}

			{	isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Cargando...</h1> :
				<div className="grid grid-cols-4 flex flex-wrap gap-6">
					{
						images.map(image => (
							<ImageCard key={image.id} image={image} />
						))
					}
				</div>
			}
		</div>
	);
}

export default App;
