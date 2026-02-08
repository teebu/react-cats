import Skeleton from './Skeleton';

const ImageGridSkeleton = ({ count = 15 }) => {
  return (
    <div className="brutalist-grid" style={{ padding: '2rem' }}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="grid-item">
          <div className="item-number">{String(i + 1).padStart(3, '0')}</div>
          <div className="image-wrapper">
            <Skeleton height="300px" width="100%" borderRadius="0px" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGridSkeleton;
