import jwt from 'jsonwebtoken';
import config from '../config';

const {
  jwtSecret, jwtRefreshTokenSecret, jwtExpiration, jwtRefreshTokenExpiration
} = config;

const generateToken = async ({ id, username: name, root}) => jwt.sign({ id, name, root}, jwtSecret, { expiresIn: jwtExpiration });

const generateRefreshToken = async ({ id, username: name, root }) => jwt.sign({ id, name, root }, jwtRefreshTokenSecret, { expiresIn: jwtRefreshTokenExpiration });

const verifyRefreshToken = async token => {
  try {
    return jwt.verify(token, jwtRefreshTokenSecret);
  } catch (error) {
    return false;
  }
}

const verifyToken = async token => {
  try {
    return jwt.verify(token, jwtSecret);
  } catch (error) {
    return false;
  }
}

export default {
  generateToken,
  generateRefreshToken,
  verifyRefreshToken,
  verifyToken
};
