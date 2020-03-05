class Uploads {
    constructor(dao) {
        this.dao = dao;
    }

    createTable() {
        const stmt = `CREATE TABLE IF NOT EXISTS popularity (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            ts DATETIME DEFAULT CURRENT_TIMESTAMP,
            topic INTEGER NOT NULL,
            path TEXT NOT NULL,
            submitter INTEGER NOT NULL,
            FOREIGN KEY(topic) REFERENCES topics(id),
            FOREIGN KEY(submitter) REFERENCES users(id)
        );`;

        return this.dao.exec(stmt);
    }

    // add new file

    // remove file
}

module.exports = Uploads;