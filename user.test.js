const Database = require('./src/db/database');
var db = new Database();

// getUser
test('Checking if DB pulls the correct user based on ID', () => {
    expect(db.getUser("1").email).toBe("admin@test.foo");
    expect(db.getUser(1).email).toBe("admin@test.foo");
});

// getUserByEmail
test('Checking if DB pulls the correct user based on email', () => {
    expect(db.getUserByEmail("admin@test.foo").id).toBe(1);
});