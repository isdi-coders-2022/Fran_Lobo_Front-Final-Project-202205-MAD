import { SyntheticEvent, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loadLoggedUsersAction } from '../../reducers/logged-user/action.creators';
import { loadGameAction } from '../../reducers/games/action.creators'; 
import { loadReviewAction } from '../../reducers/reviews/action.creators'; 
import { ApiGames } from '../../services/api';
import { LocalStoreService } from '../../services/local-storage';

export default function LoginPage() {
  const localStorage = new LocalStoreService();

  const dispatcher = useDispatch();
  const apiChat = useMemo(() => new ApiChat(), []);

  const navigate = useNavigate();
  const initialState = { email: '', password: '' };
  const [formData, setFormData] = useState(initialState);

  const handleChange = (ev: SyntheticEvent) => {
    const element = ev.target as HTMLFormElement;
    const value = element.value;
    setFormData({ ...formData, [element.name]: value });
  };

  const handleSubmit = async (ev: SyntheticEvent) => {
    ev.preventDefault();
    const resp = await apiChat.login(formData);
    const games = await apiChat.getAllRoomsByUser(resp.user._id, resp.token);
    const reviews = await apiChat.getAllUsers(resp.user._id, resp.token);

    let user = resp.user;
    user = { ...user, token: resp.token };

    dispatcher(loadLoggedUsersAction([user]));
    dispatcher(loadUsersAction(reviews));
    dispatcher(loadRoomsAction(games);

    // const users = await apiChat.getAllUsers(resp.user._id, resp.token);
    // const otherUsers = users.filter(user => user._id !== resp.user._id);

    // const usersArray = [user, ...otherUsers];

    localStorage.setUser(user);
    // localStorage.setRooms(rooms);

    navigate(`/`);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="login-form">
        <label htmlFor="">Email</label>
        <input type="email" name="email" onChange={handleChange} />
        <label htmlFor="">Password</label>
        <input type="password" name="password" onChange={handleChange} />
        <button type="submit">Login</button>
      </form>
    </>
  );
}
