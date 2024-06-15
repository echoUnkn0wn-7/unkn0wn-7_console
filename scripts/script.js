const input = document.getElementById("input");
const output = document.getElementById("output");
const final_output = document.getElementById("final-output");

let progress = 0;

const terminal = document.getElementById("the-terminal-lol");


function executeCommand(command) {
    if (command === "NEVER") {
        if (progress === 0) {
            output.textContent = "[OUTPUT] Successfuly logged in.";
            progress ++;
        } else {
            output.textContent = "[ERROR] Command not found.";
            progress = 0;
        }
    } else if (command === "from hacks.python.hacklibs import PyHacks") {
        if (progress === 1) {
            output.textContent = "[OUTPUT] Successfuly imported module 'PyHacks' from hacks/python/hacklibs.";
            progress ++;
        } else {
            output.textContent = "[ERROR] Command not found.";
            progress = 0;
        }
    } else if (command === "CREATE TABLE trixam (id INT PRIMARY KEY, letter1 TEXT, letter2 TEXT)") {
        if (progress === 2) {
            output.textContent = "[OUTPUT] marxit.db: Successfuly created table 'trixam'.";
            progress ++;
        } else {
            output.textContent = "[ERROR] Command not found.";
            progress = 0;
        }
    } else if (command === "if __name__ == '__main__':") {
        if (progress === 3) {
            output.textContent = "[OUTPUT] main.py: Successfuly added if __name__ == '__main__: to line 4.";
            progress ++;
        } else {
            output.textContent = "[ERROR] Command not found.";
            progress = 0;
        }
    } else if (command === "defM = PyHacks.encrypt(PyHacks.encode(m, 'utf-8'))") {
        if (progress === 4) {
            output.textContent = "[OUTPUT] main.py: Successfuly added   defM = PyHacks.encrypt(PyHacks.encode(m, 'utf-8')) to line 6.";
            progress ++;
        } else {
            output.textContent = "[ERROR] Command not found.";
            progress = 0;
        }
    } else if (command === "PyHacks.Hack(defM)") {
        if (progress === 5) {
            output.textContent = "[OUTPUT] main.py: Successfuly added   PyHacks.Hack(defM) to line 7.";
            progress ++;
        } else {
            output.textContent = "[ERROR] Command not found.";
            progress = 0;
        }
    } else if (command === "INSERT INTO trixam (letter1, letter2) VALUES (‘n’, ‘u’)") {
        if (progress === 6) {
            output.textContent = "[OUTPUT] marxit.db: Successfuly inserted 'n' and 'u' into table 'trixam'.";
            final_output.textContent = "[OUTPUT] Successfuly hacked the matrix, inserted into 'matrix.py' v = dQw4w9WgXcQ&ab";
            console.log("Officialy 0000000000 the entire world lol.");
        } else {
            output.textContent = "[ERROR] Command not found.";
            progress = 0;
        }
    } else {
        output.textContent = "[ERROR] Command not found.";
        progress = 0;
    }
}

function inputAlign() {
    var terminalWidth = terminal.offsetWidth;
    input.style.left = terminalWidth + 5 + 'px';
}

inputAlign();

window.addEventListener('resize', inputAlign());

terminal.addEventListener('input', inputAlign());

input.addEventListener('keydown', function(event) {
    console.log("[INFO] key pressed: ", event.key)
    if (event.key === "Enter") {
        console.log("[INFO] enter key pressed, executing command...");
        executeCommand(input.value);
    }
});
