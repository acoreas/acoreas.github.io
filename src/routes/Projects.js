import React from 'react'

function Projects() {
  const textblocks = Array.from({length: 50}, (_, index) => {
    return <div>Projects Page</div>;
  });

  return (
    <>
      <div>{textblocks}</div>
    </>
  );
}

export default Projects