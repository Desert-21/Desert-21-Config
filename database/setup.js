const user = process.env['DATABASE_USERNAME'];
const pwd = process.env['DATABASE_PASSWORD'];

db.createUser({
  user,
  pwd,
  roles: [{ role: "readWrite", db: "desert21" }],
  passwordDigestor: "server",
});
