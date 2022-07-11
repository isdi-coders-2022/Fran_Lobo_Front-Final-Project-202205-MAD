import { Link } from 'react-router-dom';
import { iRouterItem } from '../../../interfaces/interfaces';

export function Header({ navOptions }: { navOptions: iRouterItem[] }) {
  navOptions = navOptions.filter((item) => (item.path !== '*' ? item : ''));
  navOptions = navOptions.filter((item) => (item.path !== '*' ? item : ''));
  navOptions = navOptions.filter((item) => (item.path !== '*' ? item : ''));
}
