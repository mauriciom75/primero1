msgid = msg._msgid.replace(".","1")


var paths = ["camino1","camino2"];
var pathsLength = paths.length;

for (var i = 0; i < pathsLength; i++) {
    if (msg.paths[paths[i]])
        flow.set(msgid+paths[i],msg.paths[paths[i]]);
}

for (var i = 0; i < pathsLength; i++) {
    msg.paths[paths[i]] = flow.get(msgid+paths[i]);
}

// evaluo si ya estan todos
for (var i = 0; i < pathsLength; i++) {
    if ( !msg.paths[paths[i]] )
        break;
}
// si están todos devuelvo msg y elimino auxiliares.
if ( i == pathsLength )
{
    for (var i = 0; i < pathsLength; i++) {
        flow.set(msgid+paths[i],undefined);
    }
    return msg;
}
