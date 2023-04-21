import React from 'react'

function Volunteering() {
  const textblocks = Array.from({length: 50}, (_, index) => {
    return <div>Volunteering Page</div>;
  });

  return (
    <>
      <div>{textblocks}</div>
    </>
  );
}

export default Volunteering