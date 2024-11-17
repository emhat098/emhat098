import { FC, ImgHTMLAttributes } from 'react';
import Image from '@/components/image/image';

interface FigureProps extends ImgHTMLAttributes<HTMLImageElement> {
  caption?: string;
}

const Figure: FC<FigureProps> = ({ caption, ...props }) => {
  return (
    <figure className={'flex flex-col w-full justify-center py-2'}>
      <Image
        {...props}
        alt={caption ?? props.alt}
        className={'max-h-80'}
      />
      {caption && (
        <figcaption className={'flex justify-center w-full font-serif py-2'}>
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default Figure;
