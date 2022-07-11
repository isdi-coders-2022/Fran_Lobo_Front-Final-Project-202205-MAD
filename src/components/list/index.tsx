import { iGame } from '../../interfaces/interfaces';
import { Card } from '../card';

export function List({ data }: { data: iGame[] }) {
  return (
    <ul>
      {data.map((item) => (
        <li key={item._id}>
          <Card game={item} />
        </li>
      ))}
    </ul>
  );
}
