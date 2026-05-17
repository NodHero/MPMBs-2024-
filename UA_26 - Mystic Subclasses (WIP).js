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

