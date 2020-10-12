let log = console.log;

function ButtonClick(element) {
    var btn = element.id;
    if (parseFloat(btn)) {
        document.getElementById("ledInput").innerHTML += btn;
        document.getElementById("ledResult").innerHTML = "";
    } 
    else if (btn == "num0") {
        document.getElementById("ledInput").innerHTML += 0;
        document.getElementById("ledResult").innerHTML = "";
    } 
    else {
        let result = document.getElementById("ledResult").innerHTML;
        if (result != "") 
        {
            document.getElementById("ledInput").innerHTML = result;
            document.getElementById("ledResult").innerHTML = "";
        }

        let calc = document.getElementById("ledCalc").innerHTML;
        let doc = document.getElementById("ledInput").innerHTML;
        if (doc[doc.length - 1] != ".") {
            if (btn == "plus") {
                document.getElementById("ledCalc").innerHTML += doc + " + ";
                document.getElementById("ledInput").innerHTML = "";
            } 
            else if (btn == "minus") {
                document.getElementById("ledCalc").innerHTML += doc + " - ";
                document.getElementById("ledInput").innerHTML = "";
            } 
            else if (btn == "mult" && (calc.length > 0 || doc.length > 0)) {
                if (calc.length > 0) {
                    document.getElementById("ledCalc").innerHTML += " * ";
                    document.getElementById("ledInput").innerHTML = "";
                } 
                else if (doc.length > 0) {
                    document.getElementById("ledCalc").innerHTML += doc + " * ";
                    document.getElementById("ledInput").innerHTML = "";
                }
            }
            else if (btn == "divisao") {
                if (calc.length > 0 && doc.length < 1) {
                    document.getElementById("ledCalc").innerHTML += " / ";
                    document.getElementById("ledInput").innerHTML = "";
                } 
                else if (doc.length > 0) {
                    document.getElementById("ledCalc").innerHTML += doc + " / ";
                    document.getElementById("ledInput").innerHTML = "";
                }
            }

        } 
        if (btn == "sinal") {
            
            if (calc[0] != "-" && calc != "" && doc == "") {
                document.getElementById("ledCalc").innerHTML = "-" + calc;
            } 
            else if (calc[0] != undefined && calc[0] == "-") {
                document.getElementById("ledCalc").innerHTML = document.getElementById("ledCalc").innerHTML.replace("-", "");
            } 
            else if (doc[0] != "-" && doc.length > 0) {
                document.getElementById("ledInput").innerHTML = "-" + doc;
            } 
            else {
                document.getElementById("ledInput").innerHTML = document.getElementById("ledInput").innerHTML.replace("-", "");
            }
        } 
        else if (btn == "point") {
            let pointCount = 0;
            for (num = 0; num < doc.length; num++) {
                if (doc[num] == ".") {
                    pointCount++;
                }
            }
            if (pointCount < 1 && doc != "") {
                document.getElementById("ledInput").innerHTML = doc + ".";
            }
        } 
        else if (btn == "result") {
            document.getElementById("ledCalc").innerHTML += doc;
            document.getElementById("ledResult").innerHTML = eval(document.getElementById("ledCalc").innerHTML);
            document.getElementById("ledCalc").innerHTML = "";
            document.getElementById("ledInput").innerHTML = "";
        }

        if (btn == "clear") {
            document.getElementById("ledResult").innerHTML = "";
            document.getElementById("ledCalc").innerHTML = "";
            document.getElementById("ledInput").innerHTML = "";
        }
    }
}