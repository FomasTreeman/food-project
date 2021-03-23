const Card = ({ key, id, name, readyInMinutes}) => {
	return (
		<div className='light-yellow bg-light-red w5 h5 grow br3 pa3 ma2 dib bw2 shadow-5 '>
			<h1 className=' f3'> { name } </h1>
			<p> { readyInMinutes } minutes </p>
		</div>
		);
}

export default Card;