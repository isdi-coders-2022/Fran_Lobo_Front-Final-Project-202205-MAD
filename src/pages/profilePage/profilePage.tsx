import { SyntheticEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { iStore, iUser, iUserApi } from '../../interfaces/interfaces';
import {
  deleteUserAction,
  loadUserAction,
  updateUserAction,
} from '../../reducers/users/action.creators';

import { ApiGames } from '../../services/api';
import { LocalStoreService } from '../../services/localStorage';

export default function ProfilePage() {
  const localStorage = new LocalStoreService();
  const user = useSelector((store: iStore) => store.user.userData);
  const userApi = useSelector((store: iStore) => store.user);
  const token = useSelector((store: iStore) => store.user.token);

  const apiGames = new ApiGames();
  const dispatcher = useDispatch();
  const navigate = useNavigate();
  const initialState = {
    name: user?.name,
    secondName: user?.secondName,
    email: user?.email,
    password: user?.password,
  };
  useEffect(() => {
    setFormData(initialState);
  }, [user]);

  const [formData, setFormData] = useState(initialState);

  const handleChange = (ev: SyntheticEvent) => {
    const element = ev.target as HTMLFormElement;
    const value = element.value;
    setFormData({ ...formData, [element.name]: value });
  };

  const handleSubmit = async (ev: SyntheticEvent) => {
    ev.preventDefault();

    apiGames.updateOneUser(formData, token as string).then((user) => {
      dispatcher(updateUserAction(user));

      navigate(`/`);
    });
  };
  const handleDelete = async (ev: SyntheticEvent) => {
    ev.preventDefault();

    apiGames.deleteOneUser(user._id, userApi.token as string).then((user) => {
      dispatcher(deleteUserAction(user.userData));

      navigate(`/`);
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <h1 data-testid="1">PROFILE:</h1>
          <div>
            <label htmlFor="">Name:</label>
          </div>
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="">Second Name:</label>
          </div>
          <div>
            <input
              type="text"
              name="secondName"
              value={formData.secondName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="">Email:</label>
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <button className="SubmitButton" type="submit">
              ss Submit
            </button>
          </div>
          <div></div>
        </div>
      </form>
      <button onClick={handleDelete} className="deleteButton" type="button">
        Delete Profile
      </button>
    </div>
  );
}
