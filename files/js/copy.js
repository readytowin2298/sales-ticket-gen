// This file only contains code to make all the copy buttons functional

function addCopy ($target){
    $target.select();
    document.execCommand("copy");
}


// Install Ticket
$("#it-sub-btn").on('click', function() {addCopy($("#itSubject"))})
$("#it-bod-btn").on('click', function () {addCopy($("#itBody"))})