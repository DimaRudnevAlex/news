import cl from "./styles.module.css"
import {DirectionType, SkeletonType} from "../../interfaces";
import {FC} from "react";

interface Props {
    type?: SkeletonType,
    count?: number,
    direction?: DirectionType
}

const Skeleton: FC<Props> = ({count = 1, type = "banner", direction = "column"}) => {
    return (<>
            {count > 1 ? (
                <ul className={direction === "column" ? cl.columnList : cl.rowList}>
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