import bcrypt from 'bcryptjs'

const users = [
    {
        name: "Admin user",
        email: "admin@email.com",
        password: bcrypt.hashSync('123456',10),
        isAdmin: true,
        createdAt: Date.now()
    },
    {
        name: "mary",
        email: "mary@email.com",
        password: bcrypt.hashSync('123456',10),
        isAdmin: false,
        createdAt: Date.now()
    },
    {
        name: "John",
        email: "john@email.com",
        password: bcrypt.hashSync('123456',10),
        isAdmin: false,
        createdAt: Date.now()
    }
];
export default users