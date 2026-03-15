function auditReport(reportJSON) {
 const report = JSON.parse(reportJSON);

    let okCount = 0;
    let failCount = 0;
    for (let module in report.modules) {

        if (report.modules[module] === "OK") {
            okCount++;
        }

        if (report.modules[module] === "FAIL") {
            failCount++;
            break; 
        }
    }

    const summary = {
        app: report.app,
        status: report.status,
        okCount: okCount,
        failCount: failCount
    };

    const summaryJSON = JSON.stringify(summary);

    return {
        summaryObject: summary,
        summaryJSONString: summaryJSON
    };
}

//First we convert the JSON string to an object using JSON.parse().

//Then we use a for...in loop to scan all modules.

//If module value is "OK" we increase okCount.

///If module value is "FAIL" we increase failCount and use break to stop scanning.

//Finally we create a summary object and convert it to JSON using JSON.stringify().