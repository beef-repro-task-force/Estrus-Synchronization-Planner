const { Engine } = require('json-rules-engine');
const engineRules = require('./components/test-rules.json');

const facts = {
    "BreedType" : "Bos Taurus",
    "SemenType" : "Conventional",
    "SystemType": "Estrus AI"
}

// create an array to hold all valid protocols
let preferList = [];


test("breedtype = Bos Taurus, systemType = Estrus AI", async () =>{
    for(let i = 1; i <= Object.keys(engineRules["Cow Preferred Systems"]).length; i ++){
        let engine = new Engine();
        engineRules["Cow Preferred Systems"][i].forEach(item => {
            engine.addRule(item);
        });

        let events = await engine.run(facts);
        events.events.forEach((item) => {
            preferList.push(item.type);
        });
    }

    expect(preferList).toStrictEqual(["7", "14", "34"]);
})