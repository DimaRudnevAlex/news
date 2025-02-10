import {FC} from 'react';
import cl from "./styles.module.css"

interface Props {
	image: string;
}

const Image: FC<Props> = ({image}) => {
	return (
		<div className={cl.wrapper}>
			{image ? <img className={cl.image} src={image} alt="Image"/> : null }
		</div>
	);
};

export default Image;