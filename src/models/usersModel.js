const connection = require('./connection');

const getAll = async () =>{
    const users = await connection.execute(' SELECT * FROM users');
    return users[0];
};

const createUser = async (user) => {
    const {name, email, password} = user

    const dateUTC = new Date(Date.now()).toUTCString();

    const createdUser = await connection.execute('INSERT INTO users (name, email, password, created_at) VALUES (?,?,?,?)',[name, email, password, dateUTC]);

    return createdUser;
};

module.exports = {
    createUser,
    getAll
};