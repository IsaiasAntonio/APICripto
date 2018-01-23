
jQuery('document').ready(function(){
    var miner = 'd7049af37A18BEDC9A85FE7b378f6085F17050C6';
    $.get("https://api.ethermine.org/miner/:miner/workers", function(data){
        $(".result").html(data);
        alert("");
    });

    getPayout(miner);
});

function getPayout(miner)
{
    $.get( "https://api.ethermine.org/miner/d7049af37A18BEDC9A85FE7b378f6085F17050C6/payouts", function( data ) {
        
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

