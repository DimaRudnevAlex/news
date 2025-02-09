import Skeleton from "../../components/Skeleton/Skeleton.jsx";

function withSkeleton(Component, type, count) {
	return function WithSkeleton(props) {
		const {isLoading, ...restProps} = props

		if (isLoading) {
			return <Skeleton type={type} count={count} {...restProps} />
		}

		return <Component {...restProps}/>
	}
}

export default withSkeleton;