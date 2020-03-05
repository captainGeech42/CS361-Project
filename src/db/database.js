const DAO = require("./dao");
const Homework = require("./homework");
const Popularity = require("./popularity");
const Resources = require("./resources");
const Topics = require("./topics");
const Uploads = require("./uploads");
const Users = require("./users");

class Database {
    constructor(path = ":memory:") {
        this.path = path;
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
        return new Promise((resolve, reject) => {
            this.users.createTable()
            .then(() => {
                return this.topics.createTable()
            })
            .then(() => {
                return this.resources.createTable()
            })
            .then(() => {
                return this.popularity.createTable()
            })
            .then(() => {
                return this.uploads.createTable()
            })
            .then(() => {
                return this.homework.createTable()
            })
            .catch((err) => {
                reject(err);
            });
            resolve();
        });
    }

    insertDummyData() {
        return new Promise((resolve, reject) => {
            this.topics.addTopic("Math")
            // this.homework.addHomework("a", "s", "d", 0, 0)
            .then(() => {
                return this.topics.getTopicByNameNoParent("Math")
            })
            .then((row) => {
                var parentId = row.id;
                this.topics.addTopic("Algebra", parent=parentId);
                return parentId;
            })
            .then((parentId) => {
                this.topics.addTopic("Geometry", parent=parentId);
                return parentId;
            })
            .then((parentId) => {
                this.topics.addTopic("Calc 1", parent=parentId);
                return parentId;
            })
            .then((parentId) => {
                this.topics.addTopic("Calc 2", parent=parentId);
                return parentId;
            })
            .then((parentId) => {
                this.topics.addTopic("Calc 3", parent=parentId);
                return parentId;
            })
            .then((parentId) => {
                this.topics.addTopic("Linear Algebra", parent=parentId);
            })
            .catch((err) => {
                reject(err);
            });
            resolve();
        });
    }
}

module.exports = Database;