import Skeleton from "../../components/Skeleton/Skeleton.tsx";
import {ComponentType} from "react";
import {DirectionType, SkeletonType} from "../../interfaces";


interface Props {
    isLoading: boolean;
}

function withSkeleton<P extends object>(Component: ComponentType<P>, type?: SkeletonType, count?: number, direction?: DirectionType) {
    return function WithSkeleton(props: Props & P) {
        const {isLoading, ...restProps} = props

        if (isLoading) {
            return <Skeleton type={type}
                             count={count}
                             direction={direction}/>
        }

        return <Component {...(restProps as P)}/>
    }
}

export default withSkeleton;