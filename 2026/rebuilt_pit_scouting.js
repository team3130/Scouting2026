var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2026 PIT",
  "page_title": "PIT",
  "pitConfig": "true",

  "prematch": [
    { "name": "Team Number",
      "code": "t",
      "type": "number"
    },
    { "name": "Height",
      "code": "hei",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Width",
      "code": "wid",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Weight",
      "code": "wei",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Drivetrain",
      "code": "drv",
      "type": "radio",
      "choices": {
        "s": "Swerve<br>",
        "w": "West Coast/Tank<br>",
        "b": "Butterfly/Grashopper<br>",
        "m": "Mechanum<br>",
        "o": "Other"
      },
      "defaultValue": "o"
    },
    { "name": "Other Drivetrain",
      "code": "odt",
      "type": "text",
      "size": 20,
      "maxSize": 50
    },
    { "name": "Swerve Ratio",
      "code": "sr",
      "type": "radio",
      "choices": {
        "1": "L1 (8.14:1)<br>",
        "2": "L2 (6.75:1)<br>",
        "3": "L3 (6.12:1)<br>",
        "4": "L4 (5.14:1)<br>",
        "o": "Other ratio (put in comments)<br>",
        "x": "Not Swerve"
      },
      "defaultValue":"x"
    },
    { "name": "Drivetrain Motor",
      "code": "mot",
      "type": "radio",
      "choices": {
        "n": "Neo<br>",
        "f": "Falcon<br>",
        "c": "CIM<br>",
        "x": "Other<br>"
      },
      "defaultValue":"x"
    },
    { "name": "# of Batteries",
      "code": "nob",
      "type": "number"
    },

    { "name": "Fuel Capacity",
      "code": "pfc",
      "type": "number",
      "defaultValue": "0"
    },

    { "name": "Floor pickup Fuel",
      "code": "fpu",
      "type": "bool"
    },
    { "name": "Depot pickup Fuel",
      "code": "dpu",
      "type": "bool"
    },
    { "name": "Outpost pickup Fuel",
      "code": "opu",
      "type": "bool"
    },

    { "name": "Can go over Bump",
      "code": "pbm",
      "type": "bool"
    },
    { "name": "Can go through Trench",
      "code": "ptr",
      "type": "bool"
    },

    { "name": "Autos",
      "code": "aut",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },

    { "name": "What does an ideal alliance look like?",
      "code": "pia",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },

    { "name": "Preferred Robot Strategy",
      "code": "pps",
      "type": "radio",
      "choices": {
        "scorer": "Scorer<br>",
        "defense": "Defense<br>",
        "shuttle": "Shuttle<br>",
        "hybrid": "Hybrid"
      },
      "defaultValue": "scorer"
    },

    { "name": "Scouting Method /<br>Program (ScoutingPASS?)",
      "code": "sct",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 20,
      "maxSize": 250
    }
  ],

  "auton": [],
  "teleop": [],
  "endgame": [],
  "postmatch": [],
  "analysis": [
    { "name": "Fuel Capacity", "code": "pfc", "type": "number", "newline": true },

    { "name": "Pickup from Depot", "code": "ppd", "type": "bool" },
    { "name": "Pickup from Outpost", "code": "ppo", "type": "bool" },
    { "name": "Pickup from Neutral Zone", "code": "ppn", "type": "bool", "newline": true },

    { "name": "Bump", "code": "pbump", "type": "bool" },
    { "name": "Trench", "code": "ptrench", "type": "bool", "newline": true },

    { "name": "Additional Type Notes", "code": "ptype", "type": "text", "newline": true },

    { "name": "Preferred Robot Strategy",
      "code": "pstrat",
      "type": "radio",
      "choices": {
        "S": "Scorer",
        "D": "Defense",
        "P": "Shuttle",
        "H": "Hybrid"
      },
      "newline": true
    }
  ]
}`;
