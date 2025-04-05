import { knex as setupKnex, Knex } from 'knex'
import { env } from './env'

export const configDB: Knex.Config = {
  client: 'sqlite3',
  connection: {
    filename: env.DATABASE_URL,
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

export const knex = setupKnex(configDB)
