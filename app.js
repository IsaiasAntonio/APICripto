
jQuery('document').ready(function(){
    var miner = 'd7049af37A18BEDC9A85FE7b378f6085F17050C6';
    $.get("https://api.ethermine.org/miner/:miner/workers", function(data){
        $(".result").html(data);
        alert("");
    });
    getMinerHistory(miner);
});

function getMinerHistory (miner) {
  jQuery.get('https://api.ethermine.org/miner/' + miner + '/history', function(result) {
    if (result.status === "OK") {
      renderMinerHistory(result.data);
    } else {
      window.alert("Something went wrong when getting miner history");
    }
  });
}

function renderMinerHistory (minerHistory) {
  let historyBody = jQuery('#js-miner-history-body');
  historyBody.empty();
  minerHistory.forEach(function(element) {
    let row = jQuery('<tr></tr>');
    row.append('<td>' + element.time + '</td>');
    row.append('<td>' + element.reportedHashrate + '</td>');
    row.append('<td>' + element.currentHashrate + '</td>');
    row.append('<td>' + element.validShares + '</td>');
    row.append('<td>' + element.invalidShares + '</td>');
    row.append('<td>' + element.staleShares + '</td>');
    row.append('<td>' + element.averageHashrate + '</td>');
    row.append('<td>' + element.activeWorkers + '</td>');
    historyBody.append(row);
  });
}


