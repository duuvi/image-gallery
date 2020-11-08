import React, { useState } from 'react'

const ImageSearch = ({searchText}) => {
	const [text, setText] = useState('')

	const onSubmit = (e) => {
		e.preventDefault()

		searchText(text)
	}
	
	return (
		<div className="shadow-md p-2 mb-5">
			<form onSubmit={ onSubmit }>
				<input
					className="h-12 w-9/12 border border-gray-300 focus:border-gray-300 my-2"
					onChange={ e => setText(e.target.value) }
					type="text" placeholder="Buscar imágenes..." />
				<button className="h-12 w-3/12 bg-red-400 hover:bg-red-500 text-white my-2">
					<p className="font-semibold text-xl">Buscar</p>
				</button>
			</form>
		</div>
	)
}

export default ImageSearch
