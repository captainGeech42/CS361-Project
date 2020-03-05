class Resources {
    constructor(dao) {
        this.dao = dao;
    }

    createTable() {
        const stmt = `CREATE TABLE IF NOT EXISTS resources (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            ts DATETIME DEFAULT CURRENT_TIMESTAMP,
            name TEXT NOT NULL,
            description TEXT NOT NULL,
            link TEXT NOT NULL,
            type TEXT NOT NULL,
            topic INTEGER NOT NULL,
            submitter INTEGER NOT NULL,
            FOREIGN KEY(topic) REFERENCES topics(id),
            FOREIGN KEY(submitter) REFERENCES users(id)
        );`;

        return this.dao.exec(stmt);
    }

    // add resource

    // edit name

    // edit description

    // edit link

    // delete resource 

    // get resource
}

module.exports = Resources;