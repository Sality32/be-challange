import httpStatus from 'http-status';

const Controller = service => {
  const { userService } = service;
  const getUsers = async (req, res, next) => {
    try {
      const users = await userService.getUsers();

      res.status(users.length > 0 ? httpStatus.OK: httpStatus.NO_CONTENT).json({ data: users, message: users.length > 0 ? 'List Users' : 'No Data' });
    } catch (error) {
      next(error);
    }
  }
  const getUser = async(req, res, next) => {
   try {
      const { params } = req;
      const user = await userService.getUser(params.id);

      res.status(user ? httpStatus.OK : httpStatus.NOT_FOUND).json({ data: user, message: user ? 'Get User success' : 'User Not Found'});
   } catch (error) {
    next(error);
   } 
  }
  const create = async(req, res, next) => {
    try {
      const { body } = req;
      const user = await userService.create(body);

      res.status(httpStatus.CREATED).json({ data: user, message: 'User created'});
    } catch (error) {
      next(error);
    }
  }
  const update = async(req, res, next) => {
    try {
      const { body, params } = req;
      const newUser = await userService.update(body, params.id);

      res.status(newUser ? httpStatus.OK : httpStatus.BAD_REQUEST).json({ data: newUser, message: 'User data was updated'});
    } catch (error) {
      next(error);
    }
  }
  const deleteUser = async(req, res, next) => {
    try {
      const { params } = req;
      const result = await userService.deleteUser(params.id);
      
      res.status(result ? httpStatus.NO_CONTENT : httpStatus.BAD_REQUEST).json({ message: 'User was deleted'});
    } catch (error) {
      next(error);
    }
  }

  return {
    getUser, getUsers, create, update, deleteUser
  }
}

export default Controller;