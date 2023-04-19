//const validProtocol = require('./components/validProtocols');

// create a rules engine and grab the rules
const { Engine } = require('json-rules-engine');
const engineRules = require('./components/test-rules.json');

// object variable to hold the user's inputs and compare it to the rules
const facts = {
    "BreedType" : "Bos Taurus",
    "SemenType" : "Conventional",
    "SystemType": "Estrus AI"
} 

// create an array to hold all valid protocols
let preferList = [];
let lessPreferList = [];


test("breedtype = Bos Taurus, systemType = Estrus AI", async () =>{
    for(let i = 1; i <= Object.keys(engineRules["Cow Preferred Systems"]).length; i ++){
        let engine = new Engine();
        engineRules["Cow Preferred Systems"][i].forEach(item => {
            engine.addRule(item);
        });

        let events = await engine.run(facts);
        // add all the results into the filterList array
        events.events.forEach((item) => {
            preferList.push(item.type);
            //setPreferList(preferList);
        });

        expect(preferList).toBe(["7", "14", "34"]);

    }
})