import React, {FC, ReactElement, useRef} from 'react';
import cl from "./styles.module.css"

interface Props {
	step?: number
	children: ReactElement;
}

const Slider: FC<Props> = ({children, step = 150}) => {
	const sliderRef = useRef<HTMLElement | null>(null);

	const scrollLeft = () => {
		if (!sliderRef.current) return;
		sliderRef.current.scrollLeft -= step;
	}
	const scrollRight = () => {
		if (!sliderRef.current) return;
		sliderRef.current.scrollLeft += step;
	}


	return (
		<div className={cl.slider}>
			<button onClick={scrollLeft} className={cl.arrow}>{`<`}</button>
			{React.cloneElement(children as ReactElement, {ref: sliderRef })}
			<button onClick={scrollRight} className={cl.arrow}>{`>`}</button>
		</div>
	);
};

export default Slider;