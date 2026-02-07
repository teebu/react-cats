import Skeleton from './Skeleton';

const ImageGridSkeleton = ({ count = 15 }) => {
  return (
    <ul className="fancy-img-list shadowlink">
      {Array.from({ length: count }).map((_, i) => (
        <li key={i} style={{ borderRadius: '120px' }}>
          <Skeleton height="300px" borderRadius="120px" />
        </li>
      ))}
    </ul>
  );
};

export default ImageGridSkeleton;
