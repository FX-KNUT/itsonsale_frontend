import React, { Dispatch, useEffect, useRef } from "react";

interface Props {
  loading: boolean;
  setPage: Dispatch<React.SetStateAction<number>>;
}

const FetchMore = ({ loading, setPage }: Props) => {
  const fetchMoreTrigger = useRef(null);

  useEffect(() => {
    const fetchMoreObserver = new IntersectionObserver(
      ([{ isIntersecting }]) => {
        if (isIntersecting) setPage((prev) => prev + 1);
      }
    );
    fetchMoreObserver.observe(fetchMoreTrigger.current!);
    return () => {
      fetchMoreObserver.unobserve(fetchMoreTrigger.current!);
    };
  }, []);

  return <div id="fetchMore" ref={fetchMoreTrigger}></div>;
};

export default FetchMore;
