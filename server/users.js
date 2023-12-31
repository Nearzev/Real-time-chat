const {trimStr} = require('./utils');

const users = [];

const addUser = (user) => {;
    const userName = trimStr(user.name);
    const userRoom = trimStr(user.room);

    const isExist = users.find((user) => trimStr(user.name) === userName && trimStr(user.room) === userRoom);

    !isExist && users.push(user);

    const currentUser = isExist || user;

    return { isExist: !!isExist, user: currentUser};
};

module.exports = { addUser }