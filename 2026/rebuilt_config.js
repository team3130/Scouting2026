var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2026",
  "page_title": "REBUILT",
  "checkboxAs": "10",

  "prematch": [
    { "name": "Scouter Initials", "code": "s", "type": "scouter", "size": 5, "maxSize": 5, "required": "true" },
    { "name": "Event", "code": "e", "type": "event", "defaultValue": "", "required": "true" },
    { "name": "Match Level", "code": "l", "type": "level",
      "choices": { "qm": "Quals<br>", "sf": "Semifinals<br>", "f": "Finals" },
      "defaultValue": "qm", "required": "true"
    },
    { "name": "Match #", "code": "m", "type": "match", "min": 1, "max": 150, "required": "true" },
    { "name": "Robot", "code": "r", "type": "robot",
      "choices": {
        "r1": "Red-1", "b1": "Blue-1<br>",
        "r2": "Red-2", "b2": "Blue-2<br>",
        "r3": "Red-3", "b3": "Blue-3"
      },
      "required": "true"
    },
    { "name": "Team #", "code": "t", "type": "team", "min": 1, "max": 99999, "required": "true" },

    { "name": "Auto Start Location",
      "code": "as",
      "type": "clickable_image",
      "filename": "2026/half_field.png",
      "clickRestriction": "one",
      "dimensions": "7 10",
      "allowableResponses": "4 11 18 25 32 39 46 53 60 67",
      "shape": "circle 5 black red true"
    }
  ],

  "auton": [
    { "name": "Leave Starting Location", "code": "als", "type": "bool" },

    { "name": "Auto Shooting Location",
      "code": "asl",
      "type": "clickable_image",
      "filename": "2026/half_field.png",
      "dimensions": "7 10",
      "allowableResponses": "1 2 3 4 8 9 10 11 15 16 17 18 22 23 24 25 29 30 31 32 36 37 38 39 43 44 45 46 50 51 52 53 57 58 59 60 64 65 66 67",
      "expectedMax": 5,
      "shape": "circle 5 black red true"
    },

    { "name": "Fuel Scored", "code": "afs", "type": "counter", "expectedMax": 32, "altInc1": 10, "altInc2": 5, "newline": true },
    
    { "name": "Fuel Missed", "code": "afm", "type": "counter", "expectedMax": 32, "newline": true },
    { "name": "Fuel Dropped", "code": "afd", "type": "counter", "expectedMax": 32, "newline": true },

    { "name": "Pass from Neutral Zone", "code": "apn", "type": "counter", "expectedMax": 60, "altInc1": 10, "altInc2": 5 },

    { "name": "Attempt Climb", "code": "aca", "type": "bool" },
    { "name": "Climb Successful", "code": "acs", "type": "bool" },
    { "name": "Climb Time (sec)", "code": "act", "type": "timer" },

    { "name": "Pickup from Depot", "code": "afd2", "type": "bool" },
    { "name": "Pickup from Outpost", "code": "afo", "type": "bool" },
    { "name": "Pickup from Neutral Zone", "code": "aff", "type": "bool" }
  ],

  "teleop": [
    { "name": "Fuel Scored", "code": "tfs", "type": "counter", "expectedMax": 150, "altInc1": 10, "altInc2": 5 },

    { "name": "Fuel Missed", "code": "tfm", "type": "counter", "expectedMax": 150 },
    { "name": "Fuel Dropped", "code": "tfd", "type": "counter", "expectedMax": 150 },

    { "name": "Pass from Neutral Zone", "code": "pnz", "type": "counter", "expectedMax": 250, "altInc1": 10, "altInc2": 5 },
    { "name": "Pass from Opp Alliance Zone", "code": "poa", "type": "counter", "expectedMax": 250, "altInc1": 10, "altInc2": 5 },

    { "name": "Shooting Cycles", "code": "tsc", "type": "counter", "expectedMax": 50 },

    { "name": "Pickup from Depot", "code": "tfd2", "type": "bool" },
    { "name": "Pickup from Outpost", "code": "tfo", "type": "bool" },
    { "name": "Pickup from Floor", "code": "tff", "type": "bool" }
  ],

  "endgame": [
    { "name": "Climb Time (sec)", "code": "ect", "type": "timer" },

    { "name": "Climb Level",
      "code": "ecl",
      "type": "radio",
      "choices": {
        "0": "0 (No Climb)<br>",
        "1": "Level 1<br>",
        "2": "Level 2<br>",
        "3": "Level 3"
      }
    },

    { "name": "Attempt Climb", "code": "eca", "type": "bool" },
    { "name": "Climb Successful", "code": "ecs", "type": "bool" }
  ],

  "postmatch": [
    { "name": "Energized RP", "code": "erp", "type": "bool" },
    { "name": "Supercharged RP", "code": "srp", "type": "bool" },

    { "name": "Driver Skill", "code": "ds", "type": "radio",
      "choices": {
        "0": "Not Observed<br>",
        "1": "Not Effective<br>",
        "2": "Average<br>",
        "3": "Very Effective"
      }
    },

    { "name": "Defense Rating", "code": "dra", "type": "radio",
      "choices": {
        "0": "Did not play defense<br>",
        "1": "Below Average<br>",
        "2": "Average<br>",
        "3": "Good<br>",
        "4": "Excellent"
      }
    },

    { "name": "Defense Response", "code": "dre", "type": "radio",
          "choices": {
            "0": "No defense experienced<br>",
            "1": "Below Average<br>",
            "2": "Average<br>",
            "3": "Good<br>",
            "4": "Excellent"
          }
        },

    { "name": "Speed Rating", "code": "sr", "type": "radio",
      "choices": {
        "1": "1 (slow)<br>",
        "2": "2<br>",
        "3": "3<br>",
        "4": "4<br>",
        "5": "5 (fast)"
      }
    },

    { "name": "Crossed Bump", "code": "bmp", "type": "bool" },
    { "name": "Crossed Trench", "code": "tre", "type": "bool" },

    { "name": "Was Defended", "code": "def", "type": "bool" },
    { "name": "Died/Immobilized", "code": "die", "type": "bool" },

    { "name": "Beached on Balls", "code": "bob", "type": "bool" },

    { "name": "Make good alliance partner?", "code": "all", "type": "bool" },

    { "name": "Comments", "code": "co", "type": "text", "size": 15, "maxSize": 55 }
  ]
}`;
