class Topics {
    constructor(dao) {
        this.dao = dao;
    }

    createTable() {
        const stmt = `CREATE TABLE IF NOT EXISTS topics (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            ts DATETIME DEFAULT CURRENT_TIMESTAMP,
            name TEXT NOT NULL,
            description TEXT,
            parent INTEGER,
            FOREIGN KEY(parent) REFERENCES topics(id)
        );`;

        return this.dao.exec(stmt);
    }

    // add topic
    addTopic(name, description = null, parent = null) {
        const stmt = "INSERT INTO topics(name, description, parent) VALUES(?, ?, ?);"
        const params = [name, description, parent];

        return this.dao.exec(stmt, params);
    }

    // TODO edit description

    // TODO delete topic

    // get topic
    // this returns id, name, description, and parent name (as .parent)
    getTopicById(id) {
        return new Promise((resolve, reject) => {
            var stmt = 'SELECT id, name, description, parent FROM topics WHERE id = ?;';
            var params = [id];

            this.dao.get(stmt, params)
            .then((row) => {
                if (row.parent != null) {
                    // get parent data
                    this.getTopicByIdNoParent(row.parent)
                    .then((parentRow) => {
                        row.parent = parentRow.name;
                    })
                    .catch((err) => {
                        reject(err);
                    });
                }
                resolve(row);
            })
            .catch((err) => {
                reject(err);
            });
        });
    }

    // get a topic without the parent information
    // just the id, name, description
    getTopicByIdNoParent(id) {
        const stmt = 'SELECT id, name, description FROM topics WHERE id = ?;';
        const params = [id];

        return this.dao.get(stmt, params);
    }
    
    // get a topic without the parent information
    // just the id, name, description
    getTopicByNameNoParent(name) {
        const stmt = 'SELECT id, name, description FROM topics WHERE name = ?;';
        const params = [name];

        return this.dao.get(stmt, params);
    }

    // get parent topics
    getParentTopics() {
        stmt = 'SELECT id, name, description FROM topics WHERE parent IS NULL;';

        return this.dao.all(stmt);
    }

    // get topics for parent
    getChildTopicsByName(name) {
        var stmt = 'SELECT id FROM topics WHERE name = ?;';
        var params = [name];

        return this.dao.get(stmt, params)
        .then((row) => {
            stmt = 'SELECT name FROM topics WHERE parent = ?;';
            params = [row.id];

            return this.dao.all(stmt, params)
        })
        .catch((err) => {
            console.error("Error getting child topics by name:", JSON.stringify(err));
        });
    }
}

module.exports = Topics;