import React from 'react';
import cl from "./styles.module.css"


const Skeleton = ({count = 1, type = "banner"}) => {
	return (<>
			{count > 1 ? (
				<ul className={cl.list}>
					{[...Array(count)].map((_, i) => (
						<li key={i}
						    className={type === "banner" ? cl.banner : cl.item}></li>
					))}
				</ul>
			) : <li className={type === "banner" ? cl.banner : cl.item}></li>
			}
		</>
	);
};

export default Skeleton;