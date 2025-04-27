const { Engine } = require('json-rules-engine');
const engineRules = require('./components/test-rules.json');

// Helper function to run engine with facts for a specific system
async function runEngineWithFacts(facts, systemType = "Cow Preferred Systems") {
    const preferList = [];

    // Handle null/undefined facts
    if (!facts) {
        return preferList;
    }

    // For Less Preferred Systems, only use rule set 1
    const maxRuleSet = systemType.includes("Less Preferred") ? 1 : Object.keys(engineRules[systemType]).length;

    // Get all rules for this system type
    const allRules = [];
    for(let i = 1; i <= maxRuleSet; i++) {
        if (engineRules[systemType][i]) {
            allRules.push(...engineRules[systemType][i]);
        }
    }

    // Filter rules based on fact requirements
    const validRules = allRules.filter(rule => {
        const ruleFacts = new Set(rule.conditions.all.map(condition => condition.fact));
        const providedFacts = new Set(Object.keys(facts));

        // Rule is valid if all its required facts are provided and have non-empty values
        return Array.from(ruleFacts).every(fact =>
            providedFacts.has(fact) && facts[fact] !== "" && facts[fact] !== undefined
        );
    });

    if (validRules.length === 0) {
        return preferList;
    }

    // Create a single engine instance with all valid rules
    let engine = new Engine([], { allowUndefinedFacts: true });
    validRules.forEach(rule => {
        engine.addRule(rule);
    });

    // Run engine once with all facts
    let events = await engine.run(facts);
    events.events.forEach((item) => {
        preferList.push(item.type);
    });

    return preferList;
}

describe('Rule Engine Tests', () => {
    describe('Cow Protocols', () => {
        describe('Preferred Systems', () => {
            describe('Estrus AI Tests', () => {
                test("Bos Taurus with Estrus AI and Conventional semen", async () => {
                    const facts = {
                        "BreedType": "Bos Taurus",
                        "SemenType": "Conventional",
                        "SystemType": "Estrus AI"
                    };
                    const preferList = await runEngineWithFacts(facts);
                    expect(preferList).toContain("7");
                    expect(preferList).toContain("14");
                    expect(preferList).toContain("34");
                    expect(preferList.length).toBe(3);
                });
            });

            describe('Fixed-Time AI Tests', () => {
                test("Bos Taurus with Fixed-Time AI and Conventional semen", async () => {
                    const facts = {
                        "BreedType": "Bos Taurus",
                        "SemenType": "Conventional",
                        "SystemType": "Fixed-Time AI"
                    };
                    const preferList = await runEngineWithFacts(facts);
                    expect(preferList).toContain("22");
                    expect(preferList).toContain("29");
                    expect(preferList).toContain("39");
                    expect(preferList.length).toBe(3);
                });

                test("Bos Indicus with Fixed-Time AI and Conventional semen", async () => {
                    const facts = {
                        "BreedType": "Bos Indicus",
                        "SemenType": "Conventional",
                        "SystemType": "Fixed-Time AI"
                    };
                    const preferList = await runEngineWithFacts(facts);
                    expect(preferList).toContain("37");
                    expect(preferList.length).toBe(1);
                });
            });

            describe('Split-Time AI Tests', () => {
                test("Bos Taurus with Split-Time AI and Conventional semen", async () => {
                    const facts = {
                        "BreedType": "Bos Taurus",
                        "SemenType": "Conventional",
                        "SystemType": "Split Time AI"
                    };
                    const preferList = await runEngineWithFacts(facts);
                    expect(preferList).toContain("40");
                    expect(preferList.length).toBe(1);
                });

                test("Bos Taurus with Split-Time AI and Conventional & Sexed semen", async () => {
                    const facts = {
                        "BreedType": "Bos Taurus",
                        "SemenType": "Conventional & Sexed",
                        "SystemType": "Split Time AI"
                    };
                    const preferList = await runEngineWithFacts(facts);
                    expect(preferList).toContain("44");
                    expect(preferList.length).toBe(1);
                });
            });

            describe('Estrus AI + Clean-up AI Tests', () => {
                test("Bos Taurus with Estrus AI + Clean-up AI and Conventional semen", async () => {
                    const facts = {
                        "BreedType": "Bos Taurus",
                        "SemenType": "Conventional",
                        "SystemType": "Estrus AI + Clean-up AI"
                    };
                    const preferList = await runEngineWithFacts(facts);
                    expect(preferList).toContain("16");
                    expect(preferList).toContain("19");
                    expect(preferList).toContain("33");
                    expect(preferList.length).toBe(3);
                });
            });
        });

        describe('Less Preferred Systems', () => {
            test("Bos Taurus with Estrus AI and Conventional & Sexed semen", async () => {
                const facts = {
                    "BreedType": "Bos Taurus",
                    "SemenType": "Conventional & Sexed",
                    "SystemType": "Estrus AI"
                };
                const preferList = await runEngineWithFacts(facts, "Cow Less Preferred Systems");
                expect(preferList).toContain("1");
                expect(preferList).toContain("7");
                expect(preferList.length).toBe(2);
            });

            test("Bos Taurus with Fixed-Time AI and Conventional & Sexed semen", async () => {
                const facts = {
                    "BreedType": "Bos Taurus",
                    "SemenType": "Conventional & Sexed",
                    "SystemType": "Fixed-Time AI"
                };
                const preferList = await runEngineWithFacts(facts, "Cow Less Preferred Systems");
                expect(preferList).toContain("39");
                expect(preferList.length).toBe(1);
            });
        });
    });

    describe('Heifer Protocols', () => {
        describe('Preferred Systems', () => {
            test("Bos Taurus Heifer with Estrus AI", async () => {
                const facts = {
                    "BreedType": "Bos Taurus",
                    "SystemType": "Estrus AI"
                };
                const preferList = await runEngineWithFacts(facts, "Heifer Preferred Systems");
                expect(preferList).toContain("1");
                expect(preferList).toContain("6");
                expect(preferList).toContain("15");
                expect(preferList.length).toBe(3);
            });

            test("Bos Taurus Heifer with Fixed-Time AI and Conventional semen", async () => {
                const facts = {
                    "BreedType": "Bos Taurus",
                    "SemenType": "Conventional",
                    "SystemType": "Fixed-Time AI"
                };
                const preferList = await runEngineWithFacts(facts, "Heifer Preferred Systems");
                expect(preferList).toContain("23");
                expect(preferList).toContain("27");
                expect(preferList).toContain("32");
                expect(preferList).toContain("38");
                expect(preferList).toContain("48");
                expect(preferList.length).toBe(5);
            });
        });

        describe('Less Preferred Systems', () => {
            test("Bos Taurus Heifer with Estrus AI and Conventional semen", async () => {
                const facts = {
                    "BreedType": "Bos Taurus",
                    "SemenType": "Conventional",
                    "SystemType": "Estrus AI"
                };
                const preferList = await runEngineWithFacts(facts, "Heifer Less Preferred Systems");
                expect(preferList).toContain("3");
                expect(preferList.length).toBe(1);
            });
        });
    });

    describe('Edge Cases and Special Conditions', () => {
        test("Empty facts object should return empty list", async () => {
            const facts = {};
            const preferList = await runEngineWithFacts(facts);
            expect(preferList).toHaveLength(0);
        });

        test("Null facts should return empty list", async () => {
            const facts = null;
            const preferList = await runEngineWithFacts(facts);
            expect(preferList).toHaveLength(0);
        });

        test("Facts with empty strings should return empty list", async () => {
            const facts = {
                "BreedType": "",
                "SemenType": "",
                "SystemType": "",
                "AnimalType": ""
            };
            const preferList = await runEngineWithFacts(facts);
            expect(preferList).toHaveLength(0);
        });

        test("Facts with wrong case should return empty list", async () => {
            const facts = {
                "BreedType": "BOS TAURUS",
                "SemenType": "CONVENTIONAL",
                "SystemType": "ESTRUS AI",
                "AnimalType": "HEIFER"
            };
            const preferList = await runEngineWithFacts(facts);
            expect(preferList).toHaveLength(0);
        });
    });

    describe('Invalid Combinations', () => {
        test("Bos Indicus with non-Fixed-Time AI should return empty list", async () => {
            const facts = {
                "BreedType": "Bos Indicus",
                "SemenType": "Conventional",
                "SystemType": "Estrus AI"
            };
            const preferList = await runEngineWithFacts(facts);
            expect(preferList).toHaveLength(0);
        });

        test("Bos Indicus with non-Conventional semen should return empty list", async () => {
            const facts = {
                "BreedType": "Bos Indicus",
                "SemenType": "Conventional & Sexed",
                "SystemType": "Fixed-Time AI"
            };
            const preferList = await runEngineWithFacts(facts);
            expect(preferList).toHaveLength(0);
        });

        test("Split Time AI without required SemenType should return empty list", async () => {
            const facts = {
                "BreedType": "Bos Taurus",
                "SystemType": "Split Time AI"
            };
            const preferList = await runEngineWithFacts(facts);
            expect(preferList).toHaveLength(0);
        });
    });

    describe('Rule Set Validation', () => {
        test("Rule sets should have expected structure", () => {
            expect(engineRules).toHaveProperty("Cow Preferred Systems");
            expect(engineRules).toHaveProperty("Cow Less Preferred Systems");
            expect(engineRules).toHaveProperty("Heifer Preferred Systems");
            expect(engineRules).toHaveProperty("Heifer Less Preferred Systems");
            expect(engineRules["Cow Preferred Systems"]).toHaveProperty("1");
            expect(engineRules["Cow Preferred Systems"]).toHaveProperty("2");
            expect(engineRules["Cow Preferred Systems"]).toHaveProperty("3");
        });

        test("Each rule should have required properties", () => {
            const ruleSet1 = engineRules["Cow Preferred Systems"]["1"];
            ruleSet1.forEach(rule => {
                expect(rule).toHaveProperty("conditions");
                expect(rule).toHaveProperty("event");
                expect(rule.conditions).toHaveProperty("all");
                expect(rule.event).toHaveProperty("type");
            });
        });

        test("Each condition should have required properties", () => {
            const ruleSet1 = engineRules["Cow Preferred Systems"]["1"];
            ruleSet1.forEach(rule => {
                rule.conditions.all.forEach(condition => {
                    expect(condition).toHaveProperty("fact");
                    expect(condition).toHaveProperty("operator");
                    expect(condition).toHaveProperty("value");
                });
            });
        });
    });
});