class Topics {
    constructor(dao) {
        this.dao = dao;
    }

    createTable() {
        const stmt = `CREATE TABLE IF NOT EXISTS topics (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            ts DATETIME DEFAULT CURRENT_TIMESTAMP,
            name TEXT NOT NULL,
            description TEXT NOT NULL,
            parent INTEGER,
            FOREIGN KEY(parent) REFERENCES topics(id)
        );`;

        return this.dao.exec(stmt);
    }

    // add topic
    addTopic(name, description, parent = null) {
        const stmt = "INSERT INTO channels(name, description, parent) VALUES(?, ?, ?);"
        const params = [name, description, parent];

        return this.dao.exec(stmt, params);
    }

    // TODO edit description

    // TODO delete topic

    // get topic
    getTopicByName(name) {
        return new Promise((resolve, reject) => {
            var stmt = 'SELECT id, name, description, parent FROM topics WHERE name = ?;';
            var params = [name];

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

    getTopicByIdNoParent(id) {
        const stmt = 'SELECT id, name, description FROM topics WHERE id = ?;';
        const params = [id];

        return this.dao.get(stmt, params);
    }

    // get parent topics
    getParentTopics() {
        stmt = 'SELECT id, name, description FROM topics WHERE parent IS NULL;';

        return this.dao.all(stmt);
    }

    // get topics for parent
    getChildTopicsByName(name) {
        return new Promise((resolve, reject) => {
            var stmt = 'SELECT id FROM topics WHERE name = ?;';
            var params = [name];

            var
        });
    }
}

module.exports = Topics;