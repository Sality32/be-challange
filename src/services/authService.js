import { AuthError } from '../libs/error/auth';
import jwtHelper from '../libs/jwt'

const service = (userRepository) => {
  const login = async(username, password) => {
    const user = await userRepository.findOne({
      where: { username },
      attributes: ['id', 'username', 'password'],
    });

    if (!user && (await user.validatePassword(password))) throw new AuthError('User Not Found');

    const token = await jwtHelper.generateToken(user.toJSON());
    const refreshToken = await jwtHelper.generateRefreshToken(user.toJSON());

    return [token, refreshToken];
  }

  const refreshToken = async(token) => {
    const refreshTokenInfo = await jwtHelper.verifyRefreshToken(token);
    if (!refreshTokenInfo) throw new Error('Invalid Refresh Token');
    
    const newToken = await jwtHelper.generateToken({ id: refreshTokenInfo.id });

    return newToken;
  }

  return {
    login, refreshToken
  }
}

export default service;
