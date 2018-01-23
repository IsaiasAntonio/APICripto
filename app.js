jQuery('document').ready(function(){
    var miner = 'd7049af37A18BEDC9A85FE7b378f6085F17050C6';
    getWorkerInfo(miner);
});

function getWorkerInfo(miner){
    jQuery.get('https://api.ethermine.org/miner/' + miner + '/workers', function(result) {
        if (result.status === "OK") {
          renderWorkers(result.data);
        } 
    });
}

function renderWorkers (minerHistory) {
    let workerBody = jQuery('#workerInfo');
    workerBody.empty();
    minerHistory.forEach(function(element) {
      let rows = jQuery('<tr></tr>');
      rows.append('<td>' + element.worker+ '</td>');
      rows.append('<td>' + element.time + '</td>');
      rows.append('<td>' + element.lastSeen + '</td>');
      rows.append('<td>' + element.reportedHashrate+ '</td>');
      rows.append('<td>' + element.averageHashrate+ '</td>');
      rows.append('<td>' + element.currentHashrate + '</td>');
      rows.append('<td>' + element.validShares + '</td>');
      rows.append('<td>' + element.invalidShares + '</td>');
      rows.append('<td>' + element.staleShares + '</td>');
      workerBody.append(rows);
    });
}

