import React from 'react';
// import Tachyons from 'tachyons';
const Card = ({name, email, id}) =>{
	
	return(
		<div className='bg-light-green dib br3 pa1 ma2 grow bw2 shadow-5'>
		<img alt='robots' src={`https://robohash.org/${id}?200*200`}/>
		<div>
			<h2>{name}</h2>
			<p>{email}</p>
		</div>
		</div>
		)
}

export default Card;