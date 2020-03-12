# Learn Something!
`npm i`

## Passwords
`admin@test.foo`: `adminpass`
`user@test.foo`: `iwishiwasadmin`

THIS APPLICATION IS VERY INSECURE!!! When logging in as a user, the 'user' cookie is set to the user's password hash, and that is used to specify which user is logged in. Don't do this.

To check if a user is logged in, look for the `user` cookie. It will have the `password` field of a user object. You can use that to find the appropriate user object (`db.GetUserByPassword(password)`)