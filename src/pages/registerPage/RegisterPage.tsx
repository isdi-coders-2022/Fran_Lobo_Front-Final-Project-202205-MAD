import { SyntheticEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loadUserAction } from '../../reducers/users/action.creators';
import { ApiGames } from '../../services/api';
import { LocalStoreService } from '../../services/localStorage';

export default function RegisterPage() {
  const localStorage = new LocalStoreService();
  const apiGames = new ApiGames();
  const dispatcher = useDispatch();
  const navigate = useNavigate();
  const initialState = { name: '', secondName: '', email: '', password: '' };
  const [formData, setFormData] = useState(initialState);

  const handleChange = (ev: SyntheticEvent) => {
    const element = ev.target as HTMLFormElement;
    const value = element.value;
    setFormData({ ...formData, [element.name]: value });
  };

  const handleSubmit = async (ev: SyntheticEvent) => {
    ev.preventDefault();

    apiGames.setOneUser(formData).then((user) => {
      dispatcher(loadUserAction(user));
      localStorage.setUser(user);
      navigate(`/`);
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <h1 data-testid="1">REGISTER</h1>
          <div>
            <label htmlFor="">Name:</label>
          </div>
          <div>
            <input type="text" name="name" onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="">Second Name:</label>
          </div>
          <div>
            <input type="text" name="secondName" onChange={handleChange} />
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
