import '../App.css';
import '../styles/FancyList.css';
import _ from 'lodash';

interface FancyListProps {
  data: Record<string, unknown>[];
  type?: 'breeds' | 'facts';
}

function FancyList({ data, type = 'breeds' }: FancyListProps) {
  const items = createChildren(data);

  return (
    <div className={`brutalist-list ${type}-list`}>
      {items.map((item, index) => (
        <div key={`item-${index}`} className="list-card">
          <div className="card-index">{String(index + 1).padStart(2, '0')}</div>
          <div className="card-content">{item}</div>
        </div>
      ))}
    </div>
  );
}

function createChildren(data: Record<string, unknown>[]) {
  return _.map(data, (obj, objIndex) => {
    const children: JSX.Element[] = [];
    _.forOwn(obj, function (value, key) {
      if (value) {
        children.push(
          <div key={`${objIndex}-${key}`} className="data-row">
            <span className="data-label">{key}</span>
            <span className="data-value">{String(value)}</span>
          </div>
        );
      }
    });
    return children;
  });
}

export default FancyList;
