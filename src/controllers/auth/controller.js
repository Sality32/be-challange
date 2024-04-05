const Controller = service => {
  const { authService } = service;

  const login = async(req, res, next) => {
    try {
      const { body } = req;

      const [token, refreshToken] = await authService.login(body.username, body.password);

      res.status(200).json({ data: { token, refreshToken }, message: 'Login Success'});
    } catch (error) {
      next(error); 
    }

  }

  const refreshToken = async(req, res, next) => {
    console.log('inside refreshtoken')
    res.json({message: 'oke'});
    
  }

  return {
    login, refreshToken
  }
}

export default Controller;