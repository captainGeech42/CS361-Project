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
            console.error(`Failed to get topic ${topicID}:`, err);
            return {};
        }
    }

    getHomework(homeworkID) {
        try {
            return data.homework[homeworkID];
        } catch (err) {
            console.error(`Failed to get homework ${homeworkID}:`, err);
            return {};
        }
    }

    getResource(resourceID) {
        try {
            return data.resources[resourceID];
        } catch (err) {
            console.error(`Failed to get resource ${resourceID}:`, err);
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
            // .reduce((obj, key) => {
            //     obj[key] = topics[key];
            //     return obj
            // }, {});

            return parents;
        } catch (err) {
            console.error("Failed to get parent topics:", err);
            return {};
        }
    }

    /**
     * Returns an array of child objects. 
     * 
     * @param {number} parentID The parent id of the topic
     */
    getChildTopics(parentID) {
        try {
            var topics = this.data.topics;

            var children = Object.keys(topics)
            .filter((k) => {
                return topics[k].parent == parentID; // only want children with the correct parent
            })
            .reduce((obj, key) => {
                obj[key] = topics[key];
                return obj
            }, {});
            
            var output = new Array();
            Object.keys(children).forEach(function(key){
                output.push(children[key]);
            });

            return output;
        } catch (err) {
            console.error(`Failed to get child topics for parent (parentID=${parentID}):`, err);
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
            console.error(`Failed to get homework for topic (topicID=${topicID}):`, err);
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
            console.error(`Failed to get resources for topic (topicID=${topicID}):`, err);
            return {};
        }
    }


    /**
     * return array of popular topics in descending order
     * 
     * @param {number} n popular topics to return
     */
    getPopularTopics(n) {
        var topics = shuffle(Object.keys(data.topics))
        var outputArray = new Array()
        for (var x = 0; x < Math.min(n, topics.length); x++) {
            outputArray.push(data.topics[topics[x]])
            
        }

        return outputArray;

    }
    /**
     * returns n amount of popular resources in descending order.
     * 
     * @param {number} n popular resources to reurn 
     */
    getPopularResources(n) {
        var topicResources = shuffle(Object.keys(data.resources))
        var outputArray = new Array()
        for (var x = 0; x < Math.min(n, topicResources.length); x++) {
            outputArray.push(data.resources[topicResources[x]])
            
        }

        return outputArray;

    }
    
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

module.exports = Database;