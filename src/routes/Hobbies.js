import React from 'react'

function Hobbies() {
  const textblocks = Array.from({length: 50}, (_, index) => {
    return <div>Hobbies Page</div>;
  });

  return (
    <>
      <div>{textblocks}</div>
    </>
  );
}

export default Hobbies