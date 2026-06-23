var iFileName = "UA 2026 - Mystic Subclasses.js";
RequiredSheetVersion("13.2.3", 15);

SourceList["UA-MS"] = {
	name : "Mystic Subclasses",
	abbreviation : "UA-MS",
	abbreviationSpellsheet: "MS",
	date : "2026/01/15",
	group : "UA",
	url : "https://www.dndbeyond.com/sources/dnd/ua/mystic-subclasses",
};	

// SUBCLASS: Warrior of the Mystic Arts (MONK) - Coded by Nod
AddSubClass("monk", "mystic arts", {
	regExpSearch: /^(?=.*monk)(?=.*mystic)(?=.*arts).*$/i,
	subname: "Warrior of the Mystic Arts",
	source: [["UA-MS", 1]],
	spellcastingFactor: 3,
	spellcastingAbility: 5,
	spellcastingList: { "class": "sorcerer", level: [0, 4], },
	spellcastingKnown: {
		cantrips: [0, 0, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
		spells: [0, 0, 3, 4, 4, 4, 5, 6, 6, 7, 8, 8, 9, 10, 10, 11, 11, 11, 12, 13],
		prepared: false,
	},
	features: {
		"subclassfeature3": {
			name: "Spellcasting",
			source: [["UA-MS", 1]],
			minlevel: 3,
			additional: levels.map(function(n, idx) {
				var cantr = [0, 0, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3][idx];
				var splls = [0, 0, 3, 4, 4, 4, 5, 6, 6, 7, 8, 8, 9, 10, 10, 11, 11, 11, 12, 13][idx];
				return cantr + " cantrips \u0026 " + splls + " spells prepared";
			}),
			description: desc([
				"I can cast known sorcerer cantrips and spells, using Wisdom as my spellcasting ability",
				"When I gain a Monk level, I can replace one cantrip and one spell. I can use an Arcane Focus",
			]),
		},
        "subclassfeature6": {
            name: "Mystic Focus",
            source: [["UA-MS", 2]],
            minlevel: 6,
            description: desc([
				"I can expend a spell slot to regain Focus Points equal to the slot’s level (no action required)",
                "As a Bonus Action, I can use Focus Points to recover one spell slot no higher than 4th level,", 
				"as follows: 2 Focus Points for Level 1 (min Monk 6); 3 Focus Points for Level 2 (min Monk 7);",
                "5 Focus Points for Level 3 (min Monk 13); 6 Focus Points for Level 4 (min Monk 19)"
            ]),
            action: [["bonus action", " (regain spell slot)"]],
        },
		"subclassfeature6.1": {
            name: "Mystic Fighting Style",
            source: [["UA-MS", 2]],
            minlevel: 6,
            description: desc(["When I take the Attack action on my turn, I can cast a Sorcerer cantrip that has a casting", 
			"time of an action in place of one of those attacks"]),
        },
        "subclassfeature11": {
            name: "Centered Focus",
            source: [["UA-MS", 2]],
            minlevel: 11,
            description: desc([
                "Whenever I expend a Focus Point to use Flurry of Blows, Patient Defense, or Step of the Wind,", 
				"I have Advantage on any save I make to maintain Concentration until the start of my next turn"]),
		},
		"subclassfeature17": {
            name: "Improved Mystic Fighting Style",
            source: [["UA-MS", 2]],
            minlevel: 17,
            description: desc(["When I take the Attack action on my turn, I can cast a 1st or 2nd level Sorcerer spell that has",
			"a casting time of an action in place of two of those attacks"]),
		},	
    },
});


// SUBCLASS: Vestige Patron (WARLOCK) - coded by spookedspookysheep
AddSubClass("warlock", "vestige patron", {
    regExpSearch: /^(?=.*warlock)(?=.*vestige).*$/i,
    subname: "Vestige Patron",
    source: [["UA-MS", 5]],
    spellcastingExtra: [""],
    spellcastingExtraApplyNonconform: true,
    features: {
        "subclassfeature3": {
            name: "Vestige Companion",
            source: [["UA-MS", 6]],
            minlevel: 3,
            description: desc([
                "My pact with my patron strengthens, allowing me to manifest a vestige of my patron."
            ]),
	    additional : "also see notes page",
	    toNotesPage : [{
		  name : "Vestige Companion Features",
		  note : desc([
                "The vestige manifests, aiding me to do so and drawing strength from my pact. It uses the Vestige Companion stat block and is a Celestial, Fiend, or Undead (choose when I gain this feature). You determine what the vestige looks like, but regardless of its form, the vestige bears features indicating its supernatural origin. For example, I might decide my vestige is an oversize floating skull etched with sigils, a circle of glowing runes, or a constantly shifting abstract shape. The vestige is Friendly to me and my allies and obeys my commands. It vanishes if I die.",
		"The Vestige in Combat. In combat, the vestige acts during my turn. It can move and use its Reaction on its own, but the only action it takes is the Dodge action unless I take a Bonus Action to command it to take an action in its stat block or some other action. You can also sacrifice one of my attacks when I take the Attack action to command the vestige to take the Vestige’s Strike action. If I have the Incapacitated condition, the vestige acts on its own and isn’t limited to the Dodge action.",
		"Disappearance of the Vestige. When the vestige drops to 0 Hit Points, it disappears. You can spend 1 minute performing a magic ceremony to manifest the vestige again; it reappears with its maximum Hit Points in an unoccupied space within 5 feet of me. As a Magic action, I can temporarily dismiss the vestige to a pocket dimension. As a Magic action while it is temporarily dismissed, I can cause the vestige to reappear in an unoccupied space within 30 feet of me. Whenever the vestige drops to 0 Hit Points or disappears into the pocket dimension, it leaves behind in its space anything it was wearing or carrying.",
		"Whenever I finish a Long Rest, I can summon the vestige in a new form, which appears in an unoccupied space within 5 feet of me. You choose its appearance and whether it is a Celestial, Fiend, or Undead. If the vestige is already manifested from this feature, its form changes to the new one."
		  ])
	    }],
            action: [
		    ["bonus action", " (command)"],
		    ["action", " (Vestige's Strike)"],
		    ["action", " (dismiss vestige)"],
		    ["action", " (reappear vestige)"]
	    ],
	    choices: ["Celestial", "Fiend", "Undead"],
            choicesNotInMenu: false,
	    choiceDependencies: [{
		feature: "subclassfeature14",
		choiceAttribute: true
	    }],
            "celestial": {
                name: "Vestige Companion: Celestial",
                source: [["UA-MS", 5]],
                description: desc([
                    "My pact with my patron strengthens, allowing me to manifest a vestige of my patron. (Celestial vestige)"
                ]),
    	        dependentChoices: "celestial semblance",
		creaturesAdd : [["Vestige Companion (Celestial)", true]],
		creatureOptions : [{
		    name : "Vestige Companion (Celestial)",
		    source : [["UA-MS", 5]],
		    defaultExcluded : true,
		    size : 4,
		    type : "Celestial",
		    alignment : "Neutral",
		    ac : "13+oCha",
		    hp : 16,
		    hd : [1, 6],
 		    hdLinked : ["warlock"],
		    speed : "5 ft, fly 30 ft",
		    scores : [4, 14, 10, 15, 15, 16],
		    senses : "Darkvision 60 ft",
		    damage_resistances : "radiant",
		    condition_immunities : "charmed, frightened, prone",
		    passivePerception : 11,
		    languages : "Speaks the languages of its beneficiary",
		    challengeRating : "0",
		    proficiencyBonus : 1,
		    proficiencyBonusLinked : true,
		    attacksAction : 1,
		    attacks : [{
			  name : "Vestige's Strike",
			  ability : 6,
			  damage : [1, 6, "radiant"],
			  range : "Reach 5 ft, Range 60 ft",
			  description : "",
			  modifiers : [8, ""],
			  abilitytodamage : false,
			  useSpellMod : "warlock"
		    }],
		    features : [{
			  name : "Healing Touch",
			  description : "The vestige touches another creature. The target regains Hit Points equal to 2d8 plus your Charisma modifier and ends one condition on it: Blinded, Deafened, or Poisoned."
		    }],
		    traits : [{
			  name : "Pact Bond",
			  description : "Add my Proficiency Bonus to any ability check or saving throw the vestige makes."
		    }],
		    actions : [{
			  name : "Divine Power (1/Day)",
			  description : "As a Bonus Action, my vestige manifests a remnant of its divine power (Healing Touch)."
		    }],
		    calcChanges : {
		    hp : function (totalHD, HDobj, prefix) {
		    	if (!classes.known.warlock) return;
		    	var wlkLvl = classes.known.warlock.level;
		    	var wlkLvl4 = 4 * wlkLvl;
		    	HDobj.alt.push(4 + wlkLvl4);
		    	HDobj.altStr.push(" = 16 as a base\n + 4 \xD7 " + wlkLvl + " from four times its benefactor's warlock level (" + wlkLvl4 + ")");
		    },
		    setAltHp : true
		    }
		}]
            },
            "fiend": {
                name: "Vestige Companion: Fiend",
                source: [["UA-MS", 5]],
                description: desc([
                     "Once per Long Rest, I can cast Summon Fiend if my vestige is within 90 feet of me for free. (Fiend vestige)"
                ]),
	        dependentChoices: "fiend semblance",
		creaturesAdd : [["Vestige Companion (Fiend)", true]],
		creatureOptions : [{
		    name : "Vestige Companion (Fiend)",
		    source : [["UA-MS", 5]],
		    defaultExcluded : true,
		    size : 4,
		    type : "Fiend",
		    alignment : "Neutral",
		    ac : "13+oCha",
		    hp : 4,
		    hd : [1, 6],
 		    hdLinked : ["warlock"],
		    speed : "5 ft, fly 30 ft",
		    scores : [4, 14, 10, 15, 15, 16],
		    senses : "Darkvision 60 ft",
		    damage_resistances : "fire",
		    condition_immunities : "charmed, frightened, prone",
		    passivePerception : 11,
		    languages : "Speaks the languages of its beneficiary",
		    challengeRating : "0",
		    proficiencyBonus : 1,
		    proficiencyBonusLinked : true,
		    attacksAction : 1,
		    attacks : [{
			  name : "Vestige's Strike",
			  ability : 6,
			  damage : [1, 6, "fire"],
			  range : "Reach 5 ft, Range 60 ft",
			  description : "",
			  modifiers : [8, ""],
			  abilitytodamage : false,
			  useSpellMod : "warlock"
		    }],
		    features : [{
			  name : "Fiendish Swap",
			  description : "If you and the vestige are within 60 feet of each other, you both teleport, swapping places."
		    }],
		    traits : [{
			  name : "Pact Bond",
			  description : "Add my Proficiency Bonus to any ability check or saving throw the vestige makes."
		    }],
		    actions : [{
			  name : "Divine Power (1/Day)",
			  description : "As a Bonus Action, my vestige manifests a remnant of its divine power (Fiendish Swap)."
		    }],
		    calcChanges : {
		    hp : function (totalHD, HDobj, prefix) {
		    	if (!classes.known.warlock) return;
		    	var wlkLvl = classes.known.warlock.level;
		    	var wlkLvl4 = 4 * wlkLvl;
		    	HDobj.alt.push(4 + wlkLvl4);
		    	HDobj.altStr.push(" = 16 as a base\n + 4 \xD7 " + wlkLvl + " from four times its benefactor's warlock level (" + wlkLvl4 + ")");
		    },
		    setAltHp : true
		    }
		}]
            },
            "undead": {
                name: "Vestige Companion: Undead",
                source: [["UA-MS", 5]],
                description: desc([
                     "Once per Long Rest, I can cast Summon Undead if my vestige is within 90 feet of me for free. (Undead vestige)"
                ]),
    	        dependentChoices: "undead semblance",
		creaturesAdd : [["Vestige Companion (Undead)", true]],
		creatureOptions : [{
		    name : "Vestige Companion (Undead)",
		    source : [["UA-MS", 5]],
		    defaultExcluded : true,
		    size : 4,
		    type : "Undead",
		    alignment : "Neutral",
		    ac : "13+oCha",
		    hp : 4,
		    hd : [1, 6],
 		    hdLinked : ["warlock"],
		    speed : "5 ft, fly 30 ft",
		    scores : [4, 14, 10, 15, 15, 16],
		    senses : "Darkvision 60 ft",
		    damage_resistances : "necrotic",
		    condition_immunities : "charmed, frightened, prone",
		    passivePerception : 11,
		    languages : "Speaks the languages of its beneficiary",
		    challengeRating : "0",
		    proficiencyBonus : 1,
		    proficiencyBonusLinked : true,
		    attacksAction : 1,
		    attacks : [{
			  name : "Vestige's Strike",
			  ability : 6,
			  damage : [1, 6, "necrotic"],
			  range : "Reach 5 ft, Range 60 ft",
			  description : "",
			  modifiers : [8, ""],
			  abilitytodamage : false,
			  useSpellMod : "warlock"
		    }],
		    features : [{
			  name : "Cursed Invocation",
			  description : "The vestige places a curse on a creature you can see within 30 feet of the vestige for 1 minute. While cursed, the target has Disadvantage on attack rolls against you and the vestige."
		    }],
		    traits : [{
			  name : "Pact Bond",
			  description : "Add my Proficiency Bonus to any ability check or saving throw the vestige makes."
		    }],
		    actions : [{
			  name : "Divine Power (1/Day)",
			  description : "As a Bonus Action, my vestige manifests a remnant of its divine power (Cursed Invocation)."
		    }],
		    calcChanges : {
		    hp : function (totalHD, HDobj, prefix) {
		    	if (!classes.known.warlock) return;
		    	var wlkLvl = classes.known.warlock.level;
		    	var wlkLvl4 = 4 * wlkLvl;
		    	HDobj.alt.push(4 + wlkLvl4);
		    	HDobj.altStr.push(" = 16 as a base\n + 4 \xD7 " + wlkLvl + " from four times its benefactor's warlock level (" + wlkLvl4 + ")");
		    },
		    setAltHp : true
		    }
		}]
	    }
        },

        "subclassfeature3.1": {
            name: "Vestige Spells",
            source: [["UA-MS", 5]],
            minlevel: 3,
            description: desc([
		    "Select one of the following Cleric Domains: Life, Light, Trickery, or War. The Domain Spells of the chosen Domain count as Warlock spells."
                ]),
            choices: ["Life", "Light", "Trickery", "War"],
            choicesNotInMenu: false,
            "life": {
                name: "Vestige Spells: Life",
                source: [["UA-MS", 5]],
                description: desc([
                    "I always have the Cleric Life Domain spells prepared, and these count as Warlock spells."
                ]),
                spellcastingExtra: ["aid", "bless", "cure wounds", "lesser restoration", "mass healing word", "revivify", "aura of life", "death ward", "greater restoration", "mass cure wounds"]
            },
            "light": {
                name: "Vestige Spells: Light",
                source: [["UA-MS", 5]],
                description: desc([
                    "I always have the Cleric Light Domain spells prepared, and these count as Warlock spells."
                ]),
                spellcastingExtra: ["burning hands", "faerie fire", "scorching ray", "see invisibility", "daylight", "fireball", "arcane eye", "wall of fire", "flame strike", "scrying"]
            },
            "trickery": {
                name: "Vestige Spells: Trickery",
                source: [["UA-MS", 5]],
                description: desc([
                    "I always have the Cleric Trickery Domain spells prepared, and these count as Warlock spells."
                ]),
                spellcastingExtra: ["charm person", "disguise self", "invisibility", "pass without trace", "hypnotic pattern", "nondetection", "confusion", "dimension door", "dominate person", "modify memory"]
            },
            "war": {
                name: "Vestige Spells: War",
                source: [["UA-MS", 5]],
                description: desc([
                    "I always have the Cleric War Domain spells prepared, and these count as Warlock spells."
                ]),
                spellcastingExtra: ["guiding bolt", "magic weapon", "shield of faith", "spiritual weapon", "crusader's mantle", "spirit guardians", "fire shield", "freedom of movement", "hold monster", "steel wind strike"]
            }
        },
        "subclassfeature6": {
            name: "Vestige Recovery",
            source: [["UA-MS", 6]],
            minlevel: 6,
            description: desc([
                "My Vestige Companion now regains its use of Divine Power whenever I finish a Short or Long Rest or when I use my Magical Cunning feature." 
            ]),
        },
        "subclassfeature10": {
            name: "Aura of Power",
            source: [["UA-MS", 6]],
            minlevel: 10,
            description: desc([
                "As a Magic Action, I can cause the vestige to manifest an aura in a 30-foot Emanation that originates from the vestige."
            ]),
	    additional : "also see notes page",
	    toNotesPage : [{
		  name : "Aura of Power Feature",
		  note : desc([
			"As a Magic Action, I can cause the vestige to manifest an aura in a 30-foot Emanation that originates from the vestige. The aura lasts a number of hours equal to my Charisma modifier or until the vestige disappears or is temporarily dismissed. Me, the vestige, and my allies within the aura gain Resistance to Fire, Necrotic, and Radiant damage and have Immunity to the Charmed and Frightened conditions. Once I manifest this aura, I can’t do so again until I finish a Long Rest.",
			"In addition, when I drop to 0 Hit Points while within the aura, I instead change my Hit Points to a number equal to my Warlock level plus my Charisma modifier. The vestige is then dismissed into a pocket dimension and can’t return until I finish a Long Rest."
		  ])
	    }],
	    action: [["action", "Manifest Aura"]],
            usages: 1,
            recovery: "long rest",
        },
        "subclassfeature14": {
            name: "Semblance of Life",
            source: [["UA-MS", 6]],
            minlevel: 14,
            description: desc([
                "Depending on the vestige’s type, I can cast one of the following spells while the vestige is within 90 feet of me without expending a spell slot or needing Material components: Summon Celestial (Celestial vestige), Summon Fiend (Fiend vestige), or Summon Undead (Undead vestige). When I cast the spell with this feature, the vestige becomes the summoned creature. Its game statistics are replaced by the summoned creature’s stat block, the spell’s level is equal to half my Warlock level (round down; maximum level 9), and the spell’s duration is 1 minute. When the spell ends, the vestige returns to its previous form.",
		"Once I have cast the spell in this way, I can’t do so again until I finish a Long Rest."
            ]),
	    usages: 1,
	    recovery: "long rest",
	    choices: ["Celestial Semblance", "Fiend Semblance", "Undead Semblance"],
            choicesNotInMenu: true,
            "celestial semblance": {
                name: "Semblance of Life: Celestial",
                source: [["UA-MS", 6]],
                description: desc([
                    "Once per Long Rest, I can cast Summon Celestial if my vestige is within 90 feet of me for free."
                ]),
		additional : "also see notes page",
		toNotesPage : [{
			name : "Semblance of Life",
			note : desc([
         	           "Depending on the vestige’s type, I can cast one of the following spells while the vestige is within 90 feet of me without expending a spell slot or needing Material components: Summon Celestial (Celestial vestige), Summon Fiend (Fiend vestige), or Summon Undead (Undead vestige). When I cast the spell with this feature, the vestige becomes the summoned creature. Its game statistics are replaced by the summoned creature’s stat block, the spell’s level is equal to half my Warlock level (round down; maximum level 9), and the spell’s duration is 1 minute. When the spell ends, the vestige returns to its previous form.",
			    "Once I have cast the spell in this way, I can’t do so again until I finish a Long Rest."
			])
		}],
		usages: 1,
            	recovery: "long rest",
		spellcastingBonus: [{
			name: "Summon Celestial (Celestial Vestige)",
			spells: ["summon celestial"],
			selection: ["summon celestial"],
			firstCol: "oncelr"
                }]
            },
            "fiend semblance": {
                name: "Semblance of Life: Fiend",
                source: [["UA-MS", 6]],
                description: desc([
                     "Once per Long Rest, I can cast Summon Fiend if my vestige is within 90 feet of me for free."
                ]),
		additional : "also see notes page",
		toNotesPage : [{
			name : "Semblance of Life",
			note : desc([
         	           "Depending on the vestige’s type, I can cast one of the following spells while the vestige is within 90 feet of me without expending a spell slot or needing Material components: Summon Celestial (Celestial vestige), Summon Fiend (Fiend vestige), or Summon Undead (Undead vestige). When I cast the spell with this feature, the vestige becomes the summoned creature. Its game statistics are replaced by the summoned creature’s stat block, the spell’s level is equal to half my Warlock level (round down; maximum level 9), and the spell’s duration is 1 minute. When the spell ends, the vestige returns to its previous form.",
			    "Once I have cast the spell in this way, I can’t do so again until I finish a Long Rest."
			])
		}],
		usages: 1,
            	recovery: "long rest",
		spellcastingBonus: [{
			name: "Summon Fiend (Fiend Vestige)",
			spells: ["summon fiend"],
			selection: ["summon fiend"],
			firstCol: "oncelr"
                }]
            },
            "undead semblance": {
                name: "Semblance of Life: Undead",
                source: [["UA-MS", 6]],
                description: desc([
                     "Once per Long Rest, I can cast Summon Undead if my vestige is within 90 feet of me for free."
                ]),
		additional : "also see notes page",
		toNotesPage : [{
			name : "Semblance of Life",
			note : desc([
         	           "Depending on the vestige’s type, I can cast one of the following spells while the vestige is within 90 feet of me without expending a spell slot or needing Material components: Summon Celestial (Celestial vestige), Summon Fiend (Fiend vestige), or Summon Undead (Undead vestige). When I cast the spell with this feature, the vestige becomes the summoned creature. Its game statistics are replaced by the summoned creature’s stat block, the spell’s level is equal to half my Warlock level (round down; maximum level 9), and the spell’s duration is 1 minute. When the spell ends, the vestige returns to its previous form.",
			    "Once I have cast the spell in this way, I can’t do so again until I finish a Long Rest."
			])
		}],
		usages: 1,
            	recovery: "long rest",
		spellcastingBonus: [{
			name: "Summon Undead (Undead Vestige)",
			spells: ["summon undead"],
			selection: ["summon undead"],
			firstCol: "oncelr"
                }]
            }
        }
    }
});

/* Magic Stealer (XUA26MS p4)

This subclass was published on January 14th, 2026.

While ordinary thieves are cutting purses and burgling homes, a Magic Stealer is after a much more valuable prize: magic. The Magic Stealer preys on spellcasters, repurposing their magic and eluding divination spells to take magical power at the point of a knife.

Level 3: Empower Sneak Attack
Immediately after a creature you can see within 30 feet of you casts a level 1+ spell, you can take a Reaction to absorb magical energy from the spell. When you do so, until the end of your next turn, the next time you hit with your Sneak Attack you deal extra Force damage. To determine the extra damage, roll a number of d6s equal to the spell's level, and add them together.
You can take this Reaction a number of times equal to your Intelligence modifier (minimum of once), and you regain all expended uses when you finish a Long Rest.

Level 3: Drain Magic
You can drain power from ongoing spells to recharge your allies' magic. As a Magic Action, you can touch a willing creature and end one ongoing level 1 or level 2 spell on it; the creature immediately recovers one expended spell slot of level 2 or lower (the target's choice).
Once you use this feature, you can't do so again until you finish a Short or Long Rest.

Level 9: Magical Sabotage
You gain the following Cunning Strike options.
Spell Susceptibility (Cost: 2d6). The target has Disadvantage on the next saving throw it makes against a spell until the start of your next turn.

Disrupt Spell (Cost: 3d6). The target's magical acuity is disrupted until the start of your next turn. Whenever the target casts a spell during that time, it must succeed on an Intelligence saving throw or the spell dissipates with no effect, and the action, Bonus Action, or Reaction used to cast it is wasted. If that spell was cast with a spell slot, the slot isn't expended.

Steal Resistance (Cost: 2d6). Choose one kind of damage. If the target has Resistance to that kind of damage, until the start of your next turn, the target loses that Resistance and you gain Resistance to that damage type.

Level 13: Occult Shroud
Whenever you finish a Long Rest, you can cast the Nondetection spell, using Intelligence as your spellcasting ability. When you do so, you can target only yourself, and the duration increases to 24 hours.

Level 13: Improved Drain Magic
You can now use Drain Magic as a Bonus Action. In addition, when you use Drain Magic, you can end one ongoing level 1, level 2, or level 3 spell on the target, and the target recovers one expended spell slot of level 3 or lower (the target's choice).

Level 17: Eldritch Implosion
When you use Empower Sneak Attack, you can force the target to make a Constitution saving throw (DC 8 plus your Dexterity modifier and Proficiency Bonus). On a failed save, the spell dissipates with no effect, and the target has the Stunned condition until the start of its next turn. */

