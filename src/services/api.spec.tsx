import { ApiGames } from './api';
import { iGame, iReview, iUser, iUserApi } from '../interfaces/interfaces';
const mockUser: iUser = {
  _id: '123456',
  name: 'pepe',
  secondName: 'pepa',
  email: 'pepe@pepe.com',
  password: '232',
  avatar: '234',
  playList: [],
};
const mockUserApi: iUserApi = {
  id: '',
  token: 'string',
  userData: mockUser,
};

describe('Given ApiGames', () => {
  const mockReview: iReview = {
    _id: '123456',
    idUser: '12',
    idGame: '21',
    text: 'Esto va de lujo',
  };
  describe('When we instantiate', () => {
    describe('And we use method getAllReview', () => {
      test('Result.length to be 2', async () => {
        global.fetch = jest.fn().mockResolvedValue({
          json: jest.fn().mockResolvedValue([
            {
              _id: 1,
              text: 'Prueba 1',
            },
            {
              _id: 2,
              text: 'Prueba 2',
            },
          ]),
        });
        const result = await new ApiGames().getAllReview();
        expect(fetch).toBeCalled();
        expect(result.length).toBe(2);
      });
    });
    describe('And we use method getOneReview', () => {
      test('Then it should result.id to be 123456', async () => {
        global.fetch = jest.fn().mockResolvedValue({
          json: jest.fn().mockResolvedValue({ ...mockReview }),
        });
        const result = await new ApiGames().getOneReview(mockReview._id);
        expect(fetch).toBeCalled();
        expect(result._id).toBe('123456');
      });
    });
    describe('And we use method setOneReview', () => {
      test('Then it should result to setOnreReview', async () => {
        global.fetch = jest.fn().mockResolvedValue({
          json: jest.fn().mockResolvedValue({ ...mockReview }),
        });
        const result = await new ApiGames().setOneReview(mockReview);
        expect(fetch).toBeCalled();
        expect(result).toEqual(mockReview);
      });
    });
    describe('And we use method updateOneReview', () => {
      test('Then it should result to equal to mockUser with the NewReview', async () => {
        const mockNewReview = {
          _id: '1324',
          idUser: '22',
          idGame: '24',
          text: 'Esto continua de lujo',
        };

        global.fetch = jest.fn().mockResolvedValue({
          json: jest.fn().mockResolvedValue({
            ...mockReview,
            workouts: [mockNewReview],
          }),
        });
        const result = await new ApiGames().updateOneReview(
          mockNewReview._id as string,
          mockNewReview
        );
        expect(fetch).toBeCalled();
        expect(result).toEqual({
          ...mockReview,
          workouts: [mockNewReview],
        });
      });
    });
    describe('And we use method deleteReview', () => {
      test('Then it should result.review to be 0', async () => {
        global.fetch = jest.fn().mockResolvedValue({
          json: jest.fn().mockResolvedValue({}),
        });
        const result = await new ApiGames().deleteOneReview('');
        expect(fetch).toBeCalled();
        expect(result).toEqual({});
      });
    });
  });
  const mockUser: iUser = {
    _id: '123456',
    name: 'pepe',
    secondName: 'pepa',
    email: 'pepe@pepe.com',
    password: '232',
    avatar: '234',
    playList: [],
  };
  describe('When we use', () => {
    describe('And we use method getAllUser', () => {
      test('Result.length to be 1', async () => {
        global.fetch = jest.fn().mockResolvedValue({
          json: jest.fn().mockResolvedValue([
            {
              _id: 1,
              text: 'Prueba 1',
            },
          ]),
        });
        const result = await new ApiGames().getAllUser();
        expect(fetch).toBeCalled();
        expect(result.length).toBe(1);
      });
    });
    describe('And we use method getOneUser', () => {
      test('Then it should result.id to be dj87dj4nsl8sd', async () => {
        global.fetch = jest.fn().mockResolvedValue({
          json: jest.fn().mockResolvedValue({ ...mockUser }),
        });
        const result = await new ApiGames().getOneUser('');
        expect(fetch).toBeCalled();
        expect(result._id).toBe('123456');
      });
    });
    describe('And we use method setOneUser', () => {
      test('Then it should result to Equal to login User', async () => {
        const mockLoginUser = {
          _id: '123456',
          name: 'pepe',
          secondName: 'pepa',
          email: 'pepe@pepe.com',
          password: '232',
          avatar: '234',
          playList: [],
        };
        global.fetch = jest.fn().mockResolvedValue({
          json: jest.fn().mockResolvedValue({ ...mockLoginUser }),
        });
        const result = await new ApiGames().setOneUser(mockLoginUser);
        expect(fetch).toBeCalled();
        expect(result).toEqual(mockLoginUser);
      });
    });
    describe('And we use method loginUser', () => {
      test('Then it should result to Equal to login User', async () => {
        const mockLoginUser = {
          _id: '54536',
          name: 'pepa',
          secondName: 'lola',
          email: 'pepa@pepa.com',
          password: '432',
          avatar: '245',
          playList: [],
        };
        global.fetch = jest.fn().mockResolvedValue({
          json: jest.fn().mockResolvedValue({ ...mockLoginUser }),
        });
        const result = await new ApiGames().loginUser(mockLoginUser);
        expect(fetch).toBeCalled();
        expect(result).toEqual(mockLoginUser);
      });
    });
    describe('And we use method loginWithToken', () => {
      test('Then it should result oflogin with token', async () => {
        const mockToken = {
          _id: '43423',
          name: 'Ana',
          secondName: 'mena',
          email: 'ana@pepa.com',
          password: '4345567',
          avatar: '2',
          playList: [],
        };
        global.fetch = jest.fn().mockResolvedValue({
          json: jest.fn().mockResolvedValue({ ...mockToken }),
        });
        const result = await new ApiGames().loginUser(mockToken);
        expect(fetch).toBeCalled();
        expect(result).toEqual(mockToken);
      });
    });
    describe('And we use method updateOneUser', () => {
      test('should first', async () => {
        global.fetch = jest.fn().mockResolvedValue({
          json: jest.fn().mockResolvedValue({ ...mockUser, name: 'test' }),
        });
        const result = await new ApiGames().updateOneUser(mockUser, '');
        expect(fetch).toBeCalled();
        expect(result).toEqual({ ...mockUser, name: 'test' });
      });
    });
    describe('And we use method deleteOneUser', () => {
      test('should first', async () => {
        global.fetch = jest.fn().mockResolvedValue({
          json: jest.fn().mockResolvedValue({}),
        });
        const result = await new ApiGames().deleteOneUser(
          mockUser._id as string,
          'token'
        );
        expect(fetch).toBeCalled();
        expect(result).toEqual({});
      });
    });
    describe('when we instantiate', () => {
      const mockGame: iGame = {
        _id: '123456',
        name: 'lao',
        description: 'juego muy entrentenido ',
        url: '2345',
        image: 'foto',
      };
      describe('And we use method getAllGame', () => {
        test('Result.length to be 1', async () => {
          global.fetch = jest.fn().mockResolvedValue({
            json: jest.fn().mockResolvedValue([
              {
                _id: 1,
                name: 'continuo de lujo',
              },
            ]),
          });
          const result = await new ApiGames().getAllGame();
          expect(fetch).toBeCalled();
          expect(result.length).toBe(1);
        });
      });
      describe('And we use method getOneGame', () => {
        test('Then it should result.id to be 123456', async () => {
          global.fetch = jest.fn().mockResolvedValue({
            json: jest.fn().mockResolvedValue({ ...mockUser }),
          });
          const result = await new ApiGames().getOneUser('');
          expect(fetch).toBeCalled();
          expect(result._id).toBe('123456');
        });
      });
    });
  });
});
