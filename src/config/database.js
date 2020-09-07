import dotenv from 'dotenv';
dotenv.config();

const config = {
  dialect: 'postgres',
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  username: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    freezeTableName: true
  },
};

module.exports = config;