//const pg= require('pg')
//require('dotenv').config();
import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const {Pool} = pg;

let localPoolConfig = {
    user:process.env.POSTGRESQL_ADDON_USER,
    password:process.env.POSTGRESQL_ADDON_PASSWORD,
    host:process.env.POSTGRESQL_ADDON_URI,
    port:process.env.POSTGRESQL_ADDON_PORT,
    database:process.env.POSTGRESQL_ADDON_DB

};

const poolConfig = process.env.POSTGRESQL_ADDON_URI ? {
    connectionString:process.env.POSTGRESQL_ADDON_URI,
    ssl:{
        rejectUnauthorized:false
    }
} : 
localPoolConfig

const pool  = new Pool(poolConfig);

export default pool;