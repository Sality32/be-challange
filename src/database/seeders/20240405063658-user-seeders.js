import { forEachAsync } from '../../libs/forEachAsync';
import { User as userRepository } from '../../models'

const records = [
  {
    id: 1,
    username: 'user1',
    password: 'pass1'
  },
  {
    id: 2,
    username: 'user2',
    password: 'pass2'
  }
]

const schema = process.env.DB_SCHEMA;

export default {
  up: queryInterface => 
    forEachAsync(records, async user => {

      try {
        
      await userRepository.create(user);
      } catch (error) {}
    }).then(()=> queryInterface.sequelize.query(`ALTER SEQUENCE "${schema}"."users_id_seq" RESTART WITH ${records.length+1};`)),
  down: queryInterface => 
    queryInterface.bulkDelete({ tableName: 'users', schema })

};
