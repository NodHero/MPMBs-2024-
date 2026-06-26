var iFileName = "UA 2025 - Subclasses Update.js";
RequiredSheetVersion("13.2.3", 15);

SourceList["UA-SU"] = {
	name : "Subclasses Update",
	abbreviation : "UA-SU",
	abbreviationSpellsheet: "SU",
	date : "2025/10/30",
	group : "UA",
	url : "https://www.dndbeyond.com/sources/dnd/ua/subclasses-update/",
};	

// Add Path of the Spiritual Guardian (BARBARIAN)
AddSubClass("barbarian", "spiritual guardian", {
	regExpSearch: /^(?=.*(barbarian))(?=.*(spiritual))(?=.*(guardian)).*$/i,
	subname : "Path of the Spiritual Guardian",
	source : [["UA-SU", 1]],
	features : {
		"subclassfeature3" : {
			name : "Spiritual Protectors",
			source : [["UA-SU", 1]],
			minlevel : 3,
			description : desc([
				"While Raging, when I hit with a weapon or an Unarmed Strike, I can use one of these effects:\n"+
				"   \u2022 Distract. Until the start of my next turn, target has Disadv on attack rolls against targets\n"+
				"     other than me or another Barbarian who has this feature\n"+
				"   \u2022 Protect. Until end of the target's next turn, the next time it hits a creature other than me\n"+ 
				"     with an attack roll, that creature has Resistance to the damage dealt by the attack\n"+
				"   \u2022 Strike. The target takes +1d6 Acid, Cold, Fire, Force, Lightning, or Thunder dmg (my choice)",
			])
		},
		"subclassfeature6" : {
			name : "Spirit Shield",
			source : [["UA-SU", 1]],
			minlevel : 6,
			description : desc([
				"As a reaction while raging when an ally I see within 30 ft is damaged, I can reduce it",
				"My guardian spirits reduce the damage by an amount equal to the roll of the dice"
			]),
			additional : levels.map(function (n) { return n < 6 ? "" : (n < 10 ? 2 : n < 14 ? 3 : 4) + "d6 damage reduced"; }),
			action : [["reaction", " (in Rage)"]]
		},
		"subclassfeature10" : {
			name : "Consult the Spirits",
			source : [["UA-SU", 1]],
			minlevel : 10,
			description : desc([
				"I can cast either Clairvoyance or Augury, without a spell slot or material components",
				"Augury consults guardian spirits; Clairvoyance summons an invisible guardian spirit",
				"Wisdom is my spellcasting ability for these spells"
			]),
			spellcastingAbility : 5,
			spellcastingBonus : [{
				name : "Consult the Spirits",
				spells : ["augury"],
				selection : ["augury"],
				firstCol : 'oncesr'
			}, {
				name : "Consult the Spirits",
				spells : ["clairvoyance"],
				selection : ["clairvoyance"],
				firstCol : 'oncesr'
			}],
			usages : 1,
			recovery : "short rest",
			spellChanges : {
				"augury" : {
					components : "V,S",
					compMaterial : "",
					description : "Omen about specific course of action I plan to take in the next 30 min",
					changes : "My casting of Augury is a practice of consulting my guardian spirits, thus requiring no material components."
				},
				"clairvoyance" : {
					components : "V,S",
					compMaterial : "",
					changes : "My casting of Clairvoyance is a practice of consulting my a guardian spirit of mine, thus requiring no material components."
				}
			}
		},
		"subclassfeature14" : {
			name : "Vengeful Spirits",
			source : [["UA-SU", 1]],
			minlevel : 14,
			usages: 1,
			recovery: "SoNT",
			description : desc([
				"When I roll an 18-20 with Melee weapon as part of Attack action, I can make one extra attack",
				"with that same weapon as part of that Attack action. I can't make this extra attack again until",
				"the start of my next turn",
			]),

		}
	}
});

// Add Warrior of Intoxication (MONK)
AddSubClass("monk", "intoxication", {
	regExpSearch: /^(?=.*monk)(?=.*intoxication).*$/i,
	subname: "Warrior of Intoxication",
	source: [["UA-SU", 4]],
	features: {
    "subclassfeature3": {
		name : "Bonus Proficiencies",
		source : [["UA-SU", 4]],
		minlevel : 3,
		description : desc(["I gain proficiency in Charisma (Performance) and Brewer's Supplies"]),
		skills: ["Performance"],
		toolProfs: ["Brewer's supplies"],
    },
    "subclassfeature3.1": {
		name : "Drunken Technique",
		source : [["UA-SU", 4]],
		minlevel : 3,
		description : desc(["When I use Flurry of Blows, +10 ft speed and don't provoke Opportunity Attacks during turn"]),
    },
   "subclassfeature6": {
		name: "Tipsy Sway",
		source : [["UA-SU", 4]],
		minlevel: 6,
		description : "\n   " + "1 focus point: as a reaction if missed in melee, attacker instead hits other I see within 5 ft",
		additional : "Standing up from Prone costs only 5 ft",
		action : [["reaction", "Redirect Attack"]]
	},
   "subclassfeature6.1": {
		name: "Mystic Brew",
		source : [["UA-SU", 4]],
		minlevel: 6,
		description: desc([
			"I can produce one Magical Beverage when I finish a Short/Long Rest while holding Brewer’s",
			"Supplies. The beverage appears in a bottle or cask, and remaining beverage and container", 
			"vanishes when the beverage is drunk, poured out, or I finish a Short/Long Rest",
			"\u2022 Drinking a Magical Beverage. Only I can benefit from the Magical Beverage, which takes", 
			"one minute to drink (at least one pint). The benefits last for 1 hour unless I spend 1 Focus",
			"point when produced to enhance it to 8 hours"]),
		additional : "see Notes page",
		toNotesPage: [{
        name: "Mystic Brew Magical Beverages",
        note: [
            "\u2022 Cinnamon Dragon. I can take a Magic action to exhale toxic flames in a 30-ft",
			"   Cone. Each creature makes a Dex save (DC 8 + my Wis mod + my Prof Bonus)",
			"   On a failed save, a creature takes Fire damage equal to four rolls of my Martial",
			"   Arts die and has the Poisoned condition until the end of its next turn",
			"   On a successful save, a creature takes half as much damage only",
            "\u2022 Heavenly Spirit. I gain Resistance to Psychic and Radiant damage.",
            "\u2022 Refreshing Dip. Whenever I regain Hit Points, I regain additional Hit Points",
			"   equal to a roll of my Martial Arts die.",
			"\n\u25C6 Master Brewer Magical Beverages (Warrior of Intoxication 11, UA-SU 5)",
			"\u2022 Blue Lightning. Whenever I take a Reaction not making an Opportunity Attack",
			"   or casting a spell, I can make one Unarmed Strike as part of that Reaction",
            "\u2022 Drunkard’s Luck. I gain Heroic Inspiration if I don’t already have it",
			"   In addition, I can give myself Heroic Inspiration when I roll Initiative without it."],
		}],
	},
	"subclassfeature11": {
		name: "Master Brewer",
		source : [["UA-SU", 5]],
		minlevel: 11,
		description: desc([
			"I learn more Mystic Brew options [see Notes page]",
		]),
	},
	"subclassfeature17": {
		name: "Intoxicated Frenzy",
		source : [["UA-SU", 5]],
		minlevel: 17,
		description: desc([
			"I can make 3 extra attacks with Flurry of Blows if each is used on a different target",
		]),
	},
},
});
