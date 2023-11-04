const makeCalculator = document.createElement("div");
makeCalculator.className = "calculator";
makeCalculator.style.display = "grid";
makeCalculator.style.gridTemplateAreas = `"rslt rslt rslt rslt""cancel bracket percent divide""a7 a8 a9 multiply""a4 a5 a6 sub""a1 a2 a3 add""negative a0 dot equal"`;
makeCalculator.style.margin = "0 auto";
makeCalculator.style.width = "100px";

// make number buttons
for (i=9; i>=0;i--) {
    const makeNumberButtons = document.createElement("button");
    makeNumberButtons.value = `${i}`;
    makeNumberButtons.textContent = `${i}`;
    makeNumberButtons.style.gridArea = `a${i}`;
    makeNumberButtons.style.padding = "10px"
    makeNumberButtons.addEventListener("click", (e) => {
        if (highlighResult.value === "0" && e.target.value !== "0") return highlighResult.value = e.target.value;
            highlighResult.value = Number(highlighResult.value) + e.target.value;
    })
    makeCalculator.appendChild(makeNumberButtons);
}

// make function buttons
const libFunction = {
    '+': 'add',
    '-': 'sub',
    '/': 'divide',
    '*': 'multiply',
    '-/+': 'negative',
    '()': 'bracket',
    'c': 'cancel',
    '.': 'dot',
    '=': 'equal',
    '%': 'percent'
};
for (lib in libFunction) {
    const makeFuncButtons = document.createElement("button");
    makeFuncButtons.textContent = lib;
    makeFuncButtons.style.gridArea = `${libFunction[lib]}`;
    makeCalculator.appendChild(makeFuncButtons);
}

const highlighResult = document.createElement("input");
highlighResult.type = "number";
highlighResult.style.gridArea = "rslt";
highlighResult.value = 0;
highlighResult.style.textAlign = "right";
makeCalculator.appendChild(highlighResult);
document.body.appendChild(makeCalculator);


