import { useRef, useEffect } from "react";

const useTimeout= (callback, delay) => {
    const callbackRef = useRef(null)
    callbackRef.current = callback
  
    useEffect(
      () => {
        if (delay !== null) return
        const id = setTimeout(() => callbackRef.current(), delay)
        return () => clearTimeout(id)
      },
      [delay]
    )
};

export default useTimeout;