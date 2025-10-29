
// api calls - look on localhost:300 inspect element --> console to see how it parses thru data
async function test() {
    let response = await fetch("https://csc336-fall2025-efwe.onrender.com/");
    let json = await response.json(); 
    console.log(json); 

}

test(); 

const SHEET_ID = "11XhA5zlgcSNtbhrCKjInq330YgjbAxXrl41rbtzc8Yw"; 
const SHEET_URL = "https://docs.google.com/spreadsheets/d/${SHEET_ID}/edit?usp=sharing"; 

async function fetchAndParseSheet() {
    try {
        const res = await fetch(SHEET_URL); 
        const text = await res.text(); 

        let lines = text.split("\n");
        let headers = lines[0].split("\,");
        let studentInfo = [];

        for (let i=1; i < lines.length; i++) {
            let line = lines[i].trim(); // gets rid of all white space and non visible characters (at the start and end)
            let entries = line.split(","); 
            let student = {}; 
            for (let j = 0; j < entries.length; j++) {
                student[header[j]] = entries[j];
            }
            studentInfos.push(student);


        }
        for (let student of studentInfos) {
            if (student["render-link"] !== undefined) {
                console.log(student["First"])
            }
        }
    } catch {

    }
} 

// translates data into this object format, the data didn't make it easy to get this
// conceptually, to make the HTML to visualize a card for a person, this is what it is
// there are faster/more clever ways to do this

