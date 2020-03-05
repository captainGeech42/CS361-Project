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
    addResource(name, description, link, type, topic, submitter) {
        const stmt = 'INSERT INTO resources (name, description, link, type, topic, submitter) VALUES (?, ?, ?, ?, ?, ?);';
        const params = [name, description, link, type, topic, submitter];

        return this.dao.exec(stmt, params);
    }

    // TODO edit name

    // TODO edit description

    // TODO edit link

    // TODO delete resource 

    // get resource
    getResourceById(id) {
        const stmt = 'SELECT name, description, link, type FROM resources WHERE id = ?';
        const params = [id];

        return this.dao.get(stmt, params);
    }
}

module.exports = Resources;