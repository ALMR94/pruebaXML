var textXML = '<preguntes><pregunta tipus="text"><titol>Quin és el color del cel?</titol>'+
'<resposta>blau</resposta></pregunta></preguntes>';

parser = new DOMParser();
xmlDoc = parser.parseFromString(textXML ,"text/xml");
document.getElementById("p1").innerHTML = xmlDoc.getElementsByTagName("titol")[0].childNodes[0].nodeValue;
document.getElementById("t1").innerHTML = xmlDoc.getElementsByTagName("pregunta")[0].getAttribute("tipus");
document.getElementById("r1").innerHTML = xmlDoc.getElementsByTagName("resposta")[0].childNodes[0].nodeValue;
