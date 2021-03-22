import {useEffect, useState} from "react";

export function useHover(ref) {
    const [isHovering, setHovering] = useState(false)

    const on = () => setHovering(true)
    const off = () => setHovering(false)

    useEffect(() => {
        if (!ref.curren) {
            return;
        }
        const node = ref.curren;
        node.addEventListener('mouseenter', on)
        node.addEventListener('mousemove', on)
        node.addEventListener('mouseleave', off)

        return function () {
            node.removeEventListener('mouseenter', on)
            node.removeEventListener('mousemove', on)
            node.removeEventListener('mouseleave', off)
        }
    }, [ref.current])

    return isHovering;
}