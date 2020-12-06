var beginnerTips = [
  {
    "level": 2,
    "tip": "Gun and run from these guys, picking off one or two at a time",
  },
];

var allTips = [
  { n: "beginnerTips", a: beginnerTips },
];

function initializeTips() {
  for (var tips of allTips) {
    if (localStorage.getItem(tips.n)) {
      continue;
    }
    localStorage.setItem(tips.n, JSON.stringify(tips.a));
  }
}

function show 
