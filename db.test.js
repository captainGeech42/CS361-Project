const Database = require('./src/db/database');
var db = new Database();


//getTopic
test('Checking if DB pulls correct topic. (1/2)', () => {
    expect(db.getTopic("1").name).toBe("Math");
});

test('Checking if DB pulls correct topic. (2/2)', () => {
    expect(db.getTopic("17").name).toBe("Rise of Communist China");
});


//getHomework
test('Checking if DB pulls correct homework problem/s. (1/2)', () => {
    expect(db.getHomework("1").question).toBe("2+2=?");
});

test('Checking if DB pulls correct homework problem/s. (1/2)', () => {
    expect(db.getHomework("1").question).toBe("2+2=?");
});

//getResource
test('Checking if DB pulls correct resource. (1/2)', () => {
    expect(db.getResource("3").link).toBe("https://bim.easyaccessmaterials.com/index.php?level=12.00");
});

test('Checking if DB pulls correct resource. (2/2)', () => {
    expect(db.getResource("4").link).toBe("http://ocw.mit.edu/ans7870/resources/Strang/Edited/Calculus/Calculus.pdf");
});


//getParentTopics
test('Checking if DB pulls the correct parent topics. (1/1)', () => {
    var parentTopics = db.getParentTopics();

    expect(parentTopics["1"].name).toBe("Math");
    expect(parentTopics["2"].name).toBe("Science");
    expect(parentTopics["3"].name).toBe("English");
    expect(parentTopics["4"].name).toBe("History");
});


//getChildTopics
test('Checking if DB pulls correct child topics. (1/1)', () => {
    var childTopics = db.getChildTopics("1");

    expect(childTopics["5"].name).toBe("Algebra");
    expect(childTopics["6"].name).toBe("Geometry");
    expect(childTopics["7"].name).toBe("Calculus");
});


//getHomeworkForTopic
test('Checking if DB pulls correct homework for a topic. (1/1)', () => {
    var homework = db.getHomeworkForTopic("5");

    expect(homework["1"].question).toBe("2+2=?");
    expect(homework["2"].question).toBe("3x+1=7. What is x?");
    expect(homework["3"].question).toBe("(8x*3)/2=20. What is x?");
});

//getResourcesForTopic
test('Checking if DB pulls correct resources for a topic. (1/1)', () => {
    var resources = db.getResourcesForTopic("5");

    expect(resources["1"].link).toBe("https://bim.easyaccessmaterials.com/index.php?level=11.00");
    expect(resources["2"].link).toBe("https://bim.easyaccessmaterials.com/index.php?level=13.00");
});
