(function(b){"function"===typeof define&&define.amd?define(["jquery","moment","datatables.net"],b):b(jQuery,moment)})(function(b,d){b.fn.dataTable.moment=function(c,e){var f=b.fn.dataTable.ext.type;f.detect.unshift(function(a){a&&(a.replace&&(a=a.replace(/(<.*?>)|(\r?\n|\r)/g,"")),a=b.trim(a));return""===a||null===a?"moment-"+c:d(a,c,e,!0).isValid()?"moment-"+c:null});f.order["moment-"+c+"-pre"]=function(a){a&&(a.replace&&(a=a.replace(/(<.*?>)|(\r?\n|\r)/g,"")),a=b.trim(a));return d(a,c,e,!0).isValid()?
parseInt(d(a,c,e,!0).format("x"),10):Infinity}}});