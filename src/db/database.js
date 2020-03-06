var data = require('./data.json')

class Database {
    constructor() {
        this.data = data;
    }

    /*
     * Get a topic object from the database
     * @param topicID: ID for requested topic
     */
    getTopic(topicID) {
        try {
            return data.topics[topicID];
        } catch (err) {
            console.error(`Failed to get topic ${topicID}:`, JSON.stringify(err));
            return {};
        }
    }

    getHomework(homeworkID) {
        try {
            return data.homework[homeworkID];
        } catch (err) {
            console.error(`Failed to get homework ${homeworkID}:`, JSON.stringify(err));
            return {};
        }
    }

    getResource(resourceID) {
        try {
            return data.resources[resourceID];
        } catch (err) {
            console.error(`Failed to get resource ${resourceID}:`, JSON.stringify(err));
            return {};
        }
    }
    
    getParentTopics() {
        try {
            var topics = this.data.topics;

            var parents = Object.keys(topics)
            .filter((k) => {
                return topics[k].parent == null; // parent topics don't have a parent value set
            })
            .reduce((obj, key) => {
                obj[key] = topics[key];
                return obj
            }, {});

            return parents;
        } catch (err) {
            console.error("Failed to get parent topics:", JSON.stringify(err));
            return {};
        }
    }

    getChildTopics(parentID) {
        try {
            var topics = this.data.topics;

            var children = Object.keys(topics)
            .filter((k) => {
                return topics[k].parent == parentId; // only want children with the correct parent
            })
            .reduce((obj, key) => {
                obj[key] = topics[key];
                return obj
            }, {});

            return children;
        } catch (err) {
            console.error(`Failed to get child topics for parent (parentID=${parentID}):`, JSON.stringify(err));
            return {};
        }
    }

    getHomeworkForTopic(topicID) {
        try {
            var homework = this.data.homework;

            var topicHomework = Object.keys(homework)
            .filter((k) => {
                return homework[k].topic == topicID; // only want homework for the correct topic
            })
            .reduce((obj, key) => {
                obj[key] = homework[key];
                return obj
            }, {});

            return topicHomework;
        } catch (err) {
            console.error(`Failed to get homework for topic (topicID=${topicID}):`, JSON.stringify(err));
            return {};
        }
    }

    getResourcesForTopic(topicID) {
        try {
            var resources = this.data.resources;

            var topicResources = Object.keys(resources)
            .filter((k) => {
                return resources[k].topic == topicID; // only want resources for the correct topic
            })
            .reduce((obj, key) => {
                obj[key] = resources[key];
                return obj
            }, {});

            return topicResources;
        } catch (err) {
            console.error(`Failed to get resources for topic (topicID=${topicID}):`, JSON.stringify(err));
            return {};
        }
    }
}

module.exports = Database;