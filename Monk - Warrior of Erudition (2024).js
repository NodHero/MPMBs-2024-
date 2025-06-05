/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Subclass
	Effect:		This script adds a subclass for the Monk, called "Warrior of Erudition"
				Subclass created by NodHero, based on the Way of the Cobalt Soul from Tal’Dorei Campaign Setting Reborn (https://shop.critrole.com/collections/new-products/products/taldorei-campaign-setting-reborn)
	Code by:	NodHero
	Date:		2025-06-05
*/

var iFileName = "Monk - Warrior of Erudition (2024).js";
RequiredSheetVersion("13.2.3");

SourceList["M-WoE"] = {
	name : "Warrior of Erudition",
	abbreviation : "M-WoE",
	group : "Nod's Homebrew",
	url: "https://github.com/NodHero/MPMBs-2024-/blob/main/Monk%20-%20Warrior%20of%20Erudition.pdf",
	date: "2025/06/05",
};

AddSubClass("monk", "warrior of erudition", {
  regExpSearch: /^(?=.*(monk))(?=.*(erudition|erudite)).*$/i,
  subname: "Warrior of Erudition",
  source: [["M-WoE"]],
  features: {
    "subclassfeature3" : {
      name: "Analytical Blow",
      source: [["M-WoE"]],
      minlevel: 3,
      description: "",
      toNotesPage: [
        {
          name: "Analytical Blow",
          source: ["M-WoE"],
          popupName: "Analytical Blow",
          page3notes: true,
          note: [
            "When I hit a creature with a Flurry of Blows attack, I can analyze it",
            "As a reaction when an analyzed target within reach misses me, I can retaliate",
            "I make an unarmed strike against it; this benefit lasts until my next rest",
            "Additionally, when I analyze a creature I learn all of its:",
            " Damage vulnerabilities, damage resistances, damage immunities, and condition immunities",
          ],
        },
      ],
      action: ["reaction", "Unarmed Strike (on analyzed creature miss)"],
      additional: "See 3rd page",
    },
    "subclassfeature6" : {
      name: "Unmask Intent",
      source: [["M-WoE"]],
      minlevel: 6,
      description: desc([ "If I hit a creature with an unarmed strike, I can spend 1 focus to compel it to tell the truth", ]),
      toNotesPage: [
        {
          name: "Unmask Intent",
          additional: "1 focus",
          source: ["M-WoE"],
          popupName: "Unmask Intent",
          page3notes: true,
          note: [
            "When I hit a creature with an unarmed strike, I can spend 1 focus to make it unable to lie",
            "I can choose for the unarmed strike to deal no damage, imposing the effect without injury",
            "The creature makes a Charisma save or it can't speak a deliberate lie",
            "All Charisma checks against the creature are made with advantage",
            "These effects last for 10 min and I know whether the creature saved or not",
            "The creature is aware of this effect and can avoid answering, instead of telling a lie",
          ],
        },
      ],
      additional: "1 focus; See 3rd page",
    },
    "subclassfeature6.1": {
      name: "Studious Aptitude",
      source: [["M-WoE"]],
      minlevel: 6,
      description: desc([
        "At 6th, 11th, and 17th level gain a language and skill/expertise; See 3rd page",
      ]),
      toNotesPage: [
        {
          name: "Studious Aptitude",
          source: ["M-WoE"],
          popupName: "Studious Aptitude",
          page3notes: true,
          note: [
            "At 6th, 11th, and 17th level gain a language and skill, or expertise if already proficient",
            "I can gain proficiency/expertise in Arcana, History, Investigation, Nature, or Religion",
          ],
        },
      ],
      languageProfs: [1],
      additional: levels.map(function (n) {
        if (n < 3) return "";
        var num = n < 11 ? 1 : n < 17 ? 2 : 3;
        return (
          num +
          " language" +
          (n < 11 ? "" : "s") +
          " \u0026 " +
          num +
          " skill" +
          (n < 11 ? "" : "s")
        );
      }),
      changeeval: function (level) {
        if (level[1] >= 11 && level[0] < 11) {
          processLanguages(
            true,
            "Monk (Knowledge Seeker): Studious Aptitude 11",
            [1]
          );
        } else if (level[1] < 11 && level[0] >= 11) {
          processLanguages(
            false,
            "Monk (Knowledge Seeker): Studious Aptitude 11",
            [1]
          );
        }

        if (level[1] >= 17 && level[0] < 17) {
          processLanguages(
            true,
            "Monk (Knowledge Seeker): Studious Aptitude 17",
            [1]
          );
        } else if (level[1] < 17 && level[0] >= 17) {
          processLanguages(
            false,
            "Monk (Knowledge Seeker): Studious Aptitude 17",
            [1]
          );
        }
      },
      extraname: "Studious Aptitude",
      extrachoices: [
        "Arcana Proficiency",
        "Arcana Expertise",
        "History Proficiency",
        "History Expertise",
        "Investigation Proficiency",
        "Investigation Expertise",
        "Nature Proficiency",
        "Nature Expertise",
        "Religion Proficiency",
        "Religion Expertise",
      ],
      extraTimes: levels.map(function (n) {
        return n < 11 ? 1 : n < 17 ? 2 : 3;
      }),
      "arcana proficiency": {
        name: "Arcana Proficiency",
        description: "",
        source: [["M-WoE"]],
        prereqeval: function (v) {
          return v.skillProfs.indexOf("Arcana") == -1;
        },
        skills: ["Arcana"],
      },
      "arcana expertise": {
        name: "Arcana Expertise",
        description: "",
        source: [["M-WoE"]],
        prereqeval: function (v) {
          return (
            classes.known.monk &&
            classes.known.monk.level >= 11 &&
            v.skillProfs.indexOf("Arcana") !== -1
          );
        },
        skills: [["Arcana", "only"]],
      },
      "history proficiency": {
        name: "History Proficiency",
        description: "",
        source: [["M-WoE"]],
        prereqeval: function (v) {
          return v.skillProfs.indexOf("History") == -1;
        },
        skills: ["History"],
      },
      "history expertise": {
        name: "History Expertise",
        description: "",
        source: [["M-WoE"]],
        prereqeval: function (v) {
          return (
            classes.known.monk &&
            classes.known.monk.level >= 11 &&
            v.skillProfs.indexOf("History") !== -1
          );
        },
        skills: [["History", "only"]],
      },
      "investigation proficiency": {
        name: "Investigation Proficiency",
        description: "",
        source: [["M-WoE"]],
        prereqeval: function (v) {
          return v.skillProfs.indexOf("Investigation") == -1;
        },
        skills: ["Investigation"],
      },
      "investigation expertise": {
        name: "Investigation Expertise",
        description: "",
        source: [["M-WoE"]],
        prereqeval: function (v) {
          return (
            classes.known.monk &&
            classes.known.monk.level >= 11 &&
            v.skillProfs.indexOf("Investigation") !== -1
          );
        },
        skills: [["Investigation", "only"]],
      },
      "nature proficiency": {
        name: "Nature Proficiency",
        description: "",
        source: [["M-WoE"]],
        prereqeval: function (v) {
          return v.skillProfs.indexOf("Nature") == -1;
        },
        skills: ["Nature"],
      },
      "nature expertise": {
        name: "Nature Expertise",
        description: "",
        source: [["M-WoE"]],
        prereqeval: function (v) {
          return (
            classes.known.monk &&
            classes.known.monk.level >= 11 &&
            v.skillProfs.indexOf("Nature") !== -1
          );
        },
        skills: [["Nature", "only"]],
      },
      "religion proficiency": {
        name: "Religion Proficiency",
        description: "",
        source: [["M-WoE"]],
        prereqeval: function (v) {
          return v.skillProfs.indexOf("Religion") == -1;
        },
        skills: ["Religion"],
      },
      "religion expertise": {
        name: "Religion Expertise",
        description: "",
        source: [["M-WoE"]],
        prereqeval: function (v) {
          return (
            classes.known.monk &&
            classes.known.monk.level >= 11 &&
            v.skillProfs.indexOf("Religion") !== -1
          );
        },
        skills: [["Religion", "only"]],
      },
    },
    "subclassfeature11" : {
      name: "Honed Reflexes",
      source: [["M-WoE"]],
      minlevel: 11,
      description: desc([
        "Once per turn, if I've used my reaction this round, I can spend 1 focus to take a reaction",
      ]),
      action: ["reaction", " (1 focus; 1/turn)"],
      additional: "1 focus; once per turn",
    },
    "subclassfeature17" : {
      name: "Impose Vulnerability",
      source: [["M-WoE"]],
      minlevel: 17,
      description: desc([
        "When I hit a creature with an unarmed strike, I can use 3 focus to make it vulnerable",
      ]),
      toNotesPage: [
        {
          name: "Impose Vulnerability",
          additional: "1 focus",
          source: ["M-WoE"],
          popupName: "Impose Vulnerability",
          page3notes: true,
          note: [
            "When I hit a creature with an unarmed strike, I can use 3 focus to make it vulnerable",
            "It gains vulnerability to a damage type of my choice",
            "This lasts for 1 min or until the end of a turn in which it has taken damage of that type",
            "If the creature has resistance to the type, it loses it for 1 min instead",
            "If the creature has immunity to the type it's unaffected",
            "A creature can only be affected once every 24 hours",
          ],
        },
      ],
      additional: "3 focus; See 3rd page",
    },
  },
});
