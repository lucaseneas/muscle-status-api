const { response } = require('express');
const usersModel = require('../models/usersModel')

const getAll = async (request, response) => {
    const users = await usersModel.getAll();
    return response.status(200).json(users)
};

const createUser = async (request,response) => {
    const createdUser = await usersModel.createUser(request.body);

    return response.status(201).json(createdUser);
};

module.exports = {
    getAll,
    createUser
}