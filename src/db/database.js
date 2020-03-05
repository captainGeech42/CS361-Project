const DAO = require("./dao");
const Homework = require("./homework");
const Popularity = require("./popularity");
const Resources = require("./resources");
const Topics = require("./topics");
const Uploads = require("./uploads");
const Users = require("./users");

class Database {
    constructor(path = ":memory:") {
        this.path = path
    }

    init() {
        // initialize the DAO
        this.dao = new DAO(this.path);

        // make the objects for each table
        this.homework = new Homework(this.dao);
        this.popularity = new Popularity(this.dao);
        this.resources = new Resources(this.dao);
        this.topics = new Topics(this.dao);
        this.uploads = new Uploads(this.dao);
        this.users = new Users(this.dao);

        // create the tables
        this.users.createTable()
        .then(() => this.topics.createTable())
        .then(() => this.resources.createTable())
        .then(() => this.popularity.createTable())
        .then(() => this.uploads.createTable())
        .then(() => this.homework.createTable())
        .catch((err) => {
            console.error("Error initializing database structure")
        })
    }
}

module.exports = Database;