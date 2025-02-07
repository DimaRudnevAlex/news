import React from 'react';
import cl from "./styles.module.css"

const Image = ({image}) => {
	return (
		<div className={cl.wrapper}>
			{image ? <img className={cl.image} src={image} alt="Image"/> : null }
		</div>
	);
};

export default Image;