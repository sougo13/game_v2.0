import React from 'react';

interface ImageItemProps {
  src1: string;
  src2: string;
}

const ImageItem: React.FC<ImageItemProps> = ({ src1, src2 }) => {
  return (
    <div className='ImageItemBlock'>
      <img className='glabels-img' src={src1} />
      <img className='glabels-img' src={src2} />
    </div>
  )
}

export default ImageItem