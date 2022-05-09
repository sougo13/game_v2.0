import React from 'react';

interface ImageItemProps {
  src1: string;
  src2: string;
  text: string;
}

const ImageItem: React.FC<ImageItemProps> = ({ src1, src2, text = '' }) => {
  return (
    <div className='ImageItemBlock'>
      {text}
      <img className='glabels-img' src={src1} />
      <img className='glabels-img' src={src2} />
    </div>
  )
}

export default ImageItem