var data = require('./data.json')

class Database {
    constructor() {
        this.data = data;
    }

    /** 
     * Return a topic object from the database
     * 
     * @param {number,string} topicID: ID for requested topic
     */
    getTopic(topicID) {
        var topic = data.topics.find(x => x.id == topicID);

        if (!topic) {
            console.error(`Failed to get topic ${topicID}`);
        }

        return topic;
    }

    /**
     * Return a homework object from the database
     * 
     * @param {number,string} homeworkID: ID for the requested homework
     */
    getHomework(homeworkID) {
        var homework = data.homework.find(x => x.id == homeworkID);

        if (!homework) {
            console.error(`Failed to get homework ${homeworkID}`);
        }

        return homework;
    }

    /**
     * Return a resource object from the database
     * 
     * @param {number,string} resourceID: ID for the requested resource
     */
    getResource(resourceID) {
        var resource = data.resources.find(x => x.id == resourceID);

        if (!resource) {
            console.error(`Failed to get resource ${resourceID}`);
        }

        return resource;
    }
   
    /**
     * Return all parent topics from the database
     * (any topic w/o a 'parent' param set)
     */
    getParentTopics() {
        var topics = data.topics.filter(x => x.parent == null);

        if (!topics) {
            console.error("Failed to find any parent topics");
        }

        return topics;
    }

    /**
     * Returns an array of topic objects for the corresponding parent ID
     * (any topic with 'parent' set to parentID) 
     * 
     * @param {number,string} parentID The parent id of the topic
     */
    getChildTopics(parentID) {
        var topics = data.topics.filter(x => x.parent == parentID);

        if (topics.length === 0) {
            console.error(`Failed to find any child topics for parent topic ${parentID}`)
        }

        return topics;
    }

    /**
     * Returns an array of all child topics 
     * ('parent' set to non-null)
     */
    getAllChildTopics() {
        var topics = data.topics.filter(x => x.parent);

        if (topics.lenght === 0) {
            console.error("Failed to get any child topics");
        }

        return topics;
    }

    /**
     * Returns an array of homework objects for the corresponding homework ID
     * (any homework with 'topic' set to topicID)
     */
    getHomeworkForTopic(topicID) {
        var homework = data.homework.filter(x => x.topic == topicID);

        if (homework.length === 0) {
            console.error(`Failed to find any homework for topic ${topicID}`);
        }

        return homework;
    }

    /**
     * Returns an array of resource objects for the specified topic
     * @param {number,string} topicID The topic to find resources for
     */
    getResourcesForTopic(topicID) {
        var resources = data.resources.filter(x => x.topic == topicID);

        if (resources.length === 0) {
            console.error(`Failed to find any resources for ${topicID}`);
        }

        return resources;
    }


    /**
     * return array of popular topics in descending order
     * 
     * @param {number} n popular topics to return
     */
    getPopularTopics(n) {
        return shuffle(this.getAllChildTopics()).slice(n);
    }

    /**
     * returns n amount of popular resources in descending order.
     * 
     * @param {number} n popular resources to reurn 
     */
    getPopularResources(n) {
        return shuffle(data.resources).slice(n);
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