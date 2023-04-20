import React from 'react'

function Contact() {
  const textblocks = Array.from({length: 50}, (_, index) => {
    return <div>Contact Page</div>;
  });

  return (
    <>
      <div>{textblocks}</div>
    </>
  );
}

export default Contact