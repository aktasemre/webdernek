'use client';

import { useState } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

export default function ImageWithFallback({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  ...props
}) {
  const [error, setError] = useState(false);

  return error ? (
    <div 
      className={`flex items-center justify-center bg-gray-100 ${className}`}
      style={{ width, height }}
    >
      <p className="text-gray-500 text-center p-4">{alt}</p>
    </div>
  ) : (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      onError={() => setError(true)}
      {...props}
    />
  );
}

ImageWithFallback.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  className: PropTypes.string,
  priority: PropTypes.bool
}; 