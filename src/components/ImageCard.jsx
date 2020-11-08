import React from 'react'

const ImageCard = ({image}) => {
	const tags = image.tags.split(',')

	return (
		<div>
			<div className="max-w-sm rounded overflow-hidden shadow-lg">
				<img className="w-full" src={image.webformatURL} />

				<div className="px-6 py-4">
					<div className="font-bold text-indigo-400 text-md mb-2">
						Fotografía por { image.user }
					</div>
					<ul className="text-sm">
						<li>
							<strong>Vistas: </strong>{ image.views }
						</li>
						<li>
							<strong>Descargas: </strong>{ image.downloads }
						</li>
						<li>
							<strong>Likes: </strong>{ image.likes }
						</li>
						<li>
							<strong>Favoritos: </strong>{ image.favorites }
						</li>
					</ul>
				</div>

				<div className="px-6 pb-4">
					{
						tags.map((tag, index) => (
							<span key={index}
								className="inline-block bg-gray-300 rounded-full px-3 py-1 m-1 text-sm font-semibold text-black">
								{tag}
							</span>
						))
					}
				</div>
			</div>
		</div>
	)
}

export default ImageCard
