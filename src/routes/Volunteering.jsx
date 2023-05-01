import React, { useEffect } from 'react'

function Volunteering() {
  const textblocks = Array.from({length: 50}, (_, index) => {
    return <div>Volunteering Page</div>;
  });

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Optional if you want to skip the scrolling animation
    });
  },[])

  return (
    <>
      <div>{textblocks}</div>
    </>
  );
}

export default Volunteering