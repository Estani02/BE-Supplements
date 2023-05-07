import { Sequelize } from 'sequelize'
const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_NAME
} = process.env

if ((DB_USER == null) || (DB_PASSWORD == null) || (DB_HOST == null) || (DB_NAME == null)) {
  throw new Error('Missing environment variables')
}

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'postgres'
})

export default sequelize
