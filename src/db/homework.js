class Homework {
    constructor(dao) {
        this.dao = dao;
    }

    createTable() {
        const stmt = `CREATE TABLE IF NOT EXISTS homework (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            ts DATETIME DEFAULT CURRENT_TIMESTAMP,
            question TEXT NOT NULL,
            answer TEXT NOT NULL,
            link TEXT,
            topic INTEGER NOT NULL,
            submitter INTEGER NOT NULL,
            FOREIGN KEY(topic) REFERENCES topics(id),
            FOREIGN KEY(submitter) REFERENCES users(id)
        );`;

        return this.dao.exec(stmt);
    }

    // add homework
    addHomework(question, answer, link, topic, submitter) {
        const stmt = 'INSERT INTO homework (question, answer, link, topic, submitter) VALUES (?, ?, ?, ?, ?);';
        const params = [question, answer, link, topic, submitter];

        return this.dao.exec(stmt, params);
    }

    // TODO edit question

    // TODO edit answer

    // TODO edit link

    // TODO delete homework

    // get homework for a specific topic
    // returns id and question
    getHomeworkByTopicId(topicId) {
        const stmt = 'SELECT id, question FROM homework WHERE topic = ?;';
        const params = [topicId];

        return this.dao.all(stmt, params);
    }

    // get homework by id
    // returns id, question, answer, link
    getHomeworkById(id) {
        const stmt = 'SELECT id, question, answer, link FROM homework WHERE id = ?;';
        const params = [id];

        return this.dao.get(stmt, params);
    }
}

module.exports = Homework;