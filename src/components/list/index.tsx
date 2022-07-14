import { iGame } from '../../interfaces/interfaces';
import { Card } from '../card';
import { CardFav } from '../card/CardFav';

export function List({ data }: { data: iGame[] }) {
  return (
    <ul>
      {data.map((item) => (
        <li key={item._id as string}>
          <Card game={item} />
        </li>
      ))}
    </ul>
  );
}
