
jQuery('document').ready(function(){
    var miner = 'd7049af37A18BEDC9A85FE7b378f6085F17050C6';
    getPayout(miner);
    getMinerHistory(miner);
    getWorkerInfo(miner);
});

function getMinerHistory (miner) {
  getApi('https://api.ethermine.org/miner/:miner/history', { miner: miner }, function(data, error) {
    if (error) {
      alert(error);
    } else {
      jQuery('#js-miner-history').text(miner);
      renderTable('js-miner-history-table', {
        time: 'Time',
        reportedHashrate: 'Reported Hashrate',
        currentHashrate: 'Current Hashrate',
        validShares: 'Valid Shares',
        invalidShares: 'Invalid Shares',
        staleShares: 'Stale Shares',
        averageHashrate: 'Average Hashrate',
        activeWorkers: 'Active Workers'
      }, data);
    }
  });
}

function getPayout(miner)
{
    $.get( "https://api.ethermine.org/miner/" + miner + "/payouts", function( data ) {
        
        for(var i in data.data) {
            $( "#content" ).append("<tr>")
            $( "#content" ).append("<th>" + data.data[i].paidOn+ "</th>")
            $( "#content" ).append("<th>" + data.data[i].start+ "</th>")
            $( "#content" ).append("<th>" + data.data[i].end+ "</th>")
            $( "#content" ).append("<th>" + data.data[i].amount+ "</th>")
            $( "#content" ).append("<th>" + data.data[i].txHash+ "</th>")
            $( "#content" ).append("</tr>")
        }
        alert( "Load was performed." );
      });
}   

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
