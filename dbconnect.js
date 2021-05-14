const {Sequelize,Model,DateTypes}=  require('sequelize');
const sequelize=new Sequelize(process.env.DATABASE_URL|'postgres://postgres:@localhost:5432/ltweb2');



