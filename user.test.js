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

// addUser
test('Checking if DB properly saves a new user', () => {
    db.addUser("test_user_123@foo.com", "password_hash", "Test User 123");
    expect(db.getUserByEmail("test_user_123@foo.com").name).toBe("Test User 123");
});