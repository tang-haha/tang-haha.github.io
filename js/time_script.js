now = new Date();
localtime = now.toString();
utctime = now.toGMTString();
document.write("<p><strong>Local time: </strong>" + localtime + "</p>");
document.write("<p><strong>UTC time: </strong>" + utctime + "</p>");

