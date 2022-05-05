import { Client } from 'faunadb'

export const faina = new Client ({
    secret: process.env.FAUNADB_KEY
})