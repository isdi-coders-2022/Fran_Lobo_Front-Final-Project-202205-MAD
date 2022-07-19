import { SyntheticEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loadUserAction } from '../../reducers/users/action.creators';
import { ApiGames } from '../../services/api';
import { LocalStoreService } from '../../services/localStorage';

export function LoginPage() {
  const localStorage = new LocalStoreService();
  const apiGames = new ApiGames();
  const dispatcher = useDispatch();

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

    // const resp = await apiGames.loginUser;
    // const reviews = await apiGames.getAllReview();
    // const games = await apiGames.getAllGame();

    // dispatcher(loadLoggedUsersAction([user]));
    // dispatcher(loadReviewAction(reviews));
    // dispatcher(loadGameAction(games));

    apiGames.loginUser(formData).then((user) => {
      dispatcher(loadUserAction(user));
      localStorage.setUser(user);
      navigate(`/`);
    });
  };

  return (
    <div>
      <form data-testid="1" onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="">Email</label>
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="">Password</label>
          </div>
          <div>
            <input
              type="password"
              value={formData.password}
              name="password"
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <div>
            <button type="submit">Login</button>
          </div>
        </div>
        <p>Don´t you have an account? </p>
        <div></div>
      </form>
      <Link to={'/register'}>
        <p>Create Account</p>
      </Link>
    </div>
  );
}
