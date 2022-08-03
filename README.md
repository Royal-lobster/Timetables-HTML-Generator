# Timetables-HTML-Generator

<center>
  <img src="screenshot.png" />
</center>

## Instructions
- clone the repo to get the code to your local machine

  ```bash
  git clone https://github.com/Royal-lobster/Timetables-HTML-Generator
  ```
- update the data.json with rest of the timetables in the given format. (use format ```name-x``` where name: name of subject and x for number of times the subject has periods consecutivly )

  ```json
    {
    "semester 7": {
      "monday": ["r programming-2", "machine learning-2", "iot-2", "sports"],
      "tuesday": [
        "iot-2",
        "machine learning-2",
        "environmental science-2",
        "sports"
      ],
      "wednesday": ["", "web technologies lab-3", "oe sct-2", "sports"],
      "thursday": [
        "environmental science",
        "r programming-2",
        "",
        "web technologies-2",
        "sports"
      ],
      "friday": ["oe sct-2", "web technologies-2", "library-3"],
      "saturday": ["project 1-4", "project 1-3"]
    }
  }
  ```
- open index.html with a browser for the generated codes and outputs
- the code for tables with colspan and rowspans are displayed at bottom of each table from data.json which can be copied normally by selecting the text an ctrl+c


