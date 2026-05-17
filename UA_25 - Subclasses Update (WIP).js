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

/* Path of the Spiritual Guardian XUA25SU p1
This subclass was published on October 29th, 2025.

Barbarians who walk the Path of the Spiritual Guardian call upon spirits—whether bestial spirits of nature, spirits of departed ancestors, or spirits of raw elemental power—to guide and protect them. When these Barbarians rage, they contact the realm of the spirits and call on them for aid.

Level 3: Spiritual Protectors XUA25SU p1
Your Rage summons spectral warriors to your aid. While your Rage is active, when you hit a creature with a weapon or an Unarmed Strike, it becomes the target of the spirits, which cause one of the following effects of your choice.
	Distract. Until the start of your next turn, the target has Disadvantage attack rolls against targets other than you or another Barbarian who has this feature.
	Protect. Until the end of the target's next turn, the next time it hits a creature other than you with an attack roll, that creature has Resistance to the damage dealt by the attack.
	Strike. The target takes an extra 1d6 damage, which can be Acid, Cold, Fire, Force, Lightning, or Thunder damage (your choice).

Level 6: Spirit Shield XUA25SU p2
Your guardian spirits can provide supernatural protection to those you defend. While your Rage is active, when another creature you can see within 30 feet of you takes damage, you can take a Reaction to reduce that damage. To determine the amount the damage is reduced by, roll a number of d6s equal to your Rage Damage bonus, and add them together.

Level 10: Consult the Spirits XUA25SU p2
You gain the ability to consult with your guardian spirits. When you do so, you cast the Augury or Clairvoyance spell, without expending a spell slot or needing Material components. Rather than creating a spherical sensor, this use of Clairvoyance invisibly summons one of your guardian spirits to the chosen location. Wisdom is your spellcasting ability for these spells.
After you cast either spell in this way, you can't use this feature again until you finish a Short or Long Rest.

Level 14: Vengeful Spirits XUA25SU p2
When you make an attack roll with a Melee weapon as part of the Attack action and roll 18–20 on the d20, you can make one additional attack roll with the same weapon as part of that action. Once you use this feature, you can't do so again until the start of your next turn. */
