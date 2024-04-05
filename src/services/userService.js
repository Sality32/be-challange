const service = (userRepository) => {
  const create = async(payload) => {
    const created = await userRepository.create({ ...payload });

    if (!created) throw new Error('Failed to create new user');

    return created;
  }
  const getUsers = async() => {
    const users = await userRepository.findAll();

    if (!users) return [];
    return users;

  }
  const getUser = async(id) => {
    const user = await userRepository.findOne({ where: { id } });

    if (!user) return null;
    return user;
  }
  const update = async(payload, id) => {
    const user = await userRepository.findOne({ where: { id } });
    if (!user) return false;

    await user.update({ ...payload });
    return true;
  }
 
  const deleteUser = async(id) => {
    const user = await userRepository.findOne({ where: { id } });
    if (!user) return false;
    await user.destroy();
    return true;
  }

  return {
    create, getUser, getUsers, update, deleteUser
  };
}

export default service;