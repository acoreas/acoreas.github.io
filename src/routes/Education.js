import React from 'react'

function Education() {
  const textblocks = Array.from({length: 50}, (_, index) => {
    return <div>Education Page</div>;
  });

  return (
    <>
      <div>{textblocks}</div>
    </>
  );
}

export default Education