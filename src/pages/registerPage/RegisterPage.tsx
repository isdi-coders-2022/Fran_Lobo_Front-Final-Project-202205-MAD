import { SyntheticEvent, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { LocalStoreService } from '../../services/localStorage';

export function Register() {
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
    // const apiGames = new ApiGames();
    // const resp = await apiGames.loginUser;
    // const reviews = await apiGames.getAllReview();
    // const games = await apiGames.getAllGame();

    // dispatcher(loadLoggedUsersAction([user]));
    // dispatcher(loadReviewAction(reviews));
    // dispatcher(loadGameAction(games));

    // localStorage.setUser(user);

    navigate(`/`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <h1>REGISTER</h1>
          <div>
            <label htmlFor="">Name:</label>
          </div>
          <div>
            <input type="text" name="email" onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="">Second Name:</label>
          </div>
          <div>
            <input type="text" name="email" onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="">Email:</label>
          </div>
          <div>
            <input type="email" name="email" onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="">Password:</label>
          </div>
          <div>
            <input type="password" name="password" onChange={handleChange} />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </div>
      </form>
    </div>
  );
}
