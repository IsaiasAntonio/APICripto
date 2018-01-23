jQuery('document').ready(function(){
    var miner = 'd7049af37A18BEDC9A85FE7b378f6085F17050C6';
    $.get("https://api.ethermine.org/miner/:miner/workers", function(data){
        $(".result").html(data);
        alert("");
    });
});
