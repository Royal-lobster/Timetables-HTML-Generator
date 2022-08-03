async function main() {
  const data = await fetch("./data.json");
  const timetables = await data.json();

  const semTitles = Object.keys(timetables);
  const semWeeks = Object.values(timetables);

  const PERIODS_COUNT = 8;
  semWeeks.forEach((semWeek, i) => {
    const tableContainer = document.createElement("div");
    document.querySelector(".container").appendChild(tableContainer);

    const table = document.createElement("table");
    table.setAttribute("border", "1");
    table.setAttribute("cellpadding", "5");
    tableContainer.appendChild(table);

    const caption = document.createElement("caption");
    caption.textContent = `Time table for ${semTitles[i]}`.toUpperCase();
    table.appendChild(caption);

    const weekTitles = Object.keys(semWeek);
    const weekDays = Object.values(semWeek);

    Array.from(Array(PERIODS_COUNT + 1).keys()).forEach((i) => {
      const th = document.createElement("th");
      th.textContent =
        i === 0
          ? ""
          : `${(8 + i) % 12 || 12}:00 - ${(8 + i + 1) % 12 || 12}:00`;
      table.appendChild(th);
    });

    weekDays.forEach((weekDay, i) => {
      const weekDayRow = document.createElement("tr");

      const weekDayRowHeader = document.createElement("th");
      weekDayRowHeader.textContent = weekTitles[i];
      weekDayRow.appendChild(weekDayRowHeader);
      table.appendChild(weekDayRow);

      const dayRepeatedPeriods = [];

      let currentPeriod = -1;
      let currentPeriodLeft = 0;

      Array.from(Array(PERIODS_COUNT).keys()).forEach((j) => {
        debugger;
        if (i == 0 && j === 4) {
          const lunch = document.createElement("th");
          lunch.textContent = "Lunch Break";
          lunch.setAttribute("rowspan", weekDays.length);
          weekDayRow.appendChild(lunch);
        } else if (j != 4) {
          if (!currentPeriodLeft) {
            currentPeriod++;
            const period = weekDay[currentPeriod];
            const weekDayCell = document.createElement("td");
            const [periodName, periodCount] = period.split("-");
            weekDayCell.textContent = periodName;
            dayRepeatedPeriods.push(period);
            periodCount && weekDayCell.setAttribute("colspan", periodCount);
            weekDayRow.appendChild(weekDayCell);
            currentPeriodLeft = periodCount - 1;
          } else {
            currentPeriodLeft--;
          }
        }
      });
    });

    // create pre tag
    const codeBlock = document.createElement("p");
    codeBlock.style.width = "min(900px, 90vw)";
    codeBlock.style.border = "1px solid #000";
    codeBlock.style.padding = "10px";
    codeBlock.textContent = `
    <html>
      <head>
          <title>${semTitles[i]}</title>
      </head>
      <body>
        ${tableContainer.innerHTML}
      </body>
    </html>
    `;
    document.querySelector(".container").appendChild(codeBlock);
  });
}

main();
