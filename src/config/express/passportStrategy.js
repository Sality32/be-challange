import { ExtractJwt, Strategy } from 'passport-jwt';

export default config => {
  const { jwtSecret, jwtSchema } = config;

  if (!jwtSchema) throw new Error('JWT_SCHEMA cannot be empty');
  if (!jwtSecret) throw new Error('JWT_SECRET cannot be empty');

  const callback = (jwtPayload, done) => {
    done(null, { id: jwtPayload.id, name: jwtPayload.name });
  };

  return new Strategy(
    {
      secretOrKey: jwtSecret,
      jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme(jwtSchema),
    },
    callback,
  );
};
