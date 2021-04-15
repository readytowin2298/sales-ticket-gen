//  LLA view toggle Script
$("#llaLabel").hide()

$("#rentOwn").on('change', ()=>{
  if($("#rentOwn").val() === 'rent'){
    $("#llaLabel").show()
  } else{
    $("#llaLabel").hide()
  }
})

// Show Plan type drop-down based on radio input

$("#M2MPlanType, #HUBBPlanType").hide()

$("input[name='planType']").on('click', ()=>{
  $(".planType").hide()
  const selected = $("input[name='planType']:checked").val()
  const id = selected + "PlanType"
  $(`#${id}`).show()
})


// Stores plan pricing, used for ticket generation and to fill html, must be edited when prices change

const planPricing = {
  "2Yr" : {
    "Next15" : 49.95,
    "Next20" : 59.95,
    "Next25" : 69.95,
    "Next35" : 79.95,
    "Next50" : 99.95,
    "Next100" : 119.95
  },
  "M2M" : {
    "Next10" : 59.95,
    "Next15" : 69.95,
    "Next20" : 79.95,
    "Next25" : 89.95,
    "Next35" : 99.95,
    "Next50" : 119.95,
    "Next100" : 139.95
  },
  "HUBB" : {
    "Next10" : 59.95,
    "Next15" : 69.95,
    "Next20" : 79.95,
    "Next25" : 89.95,
    "Next35" : 99.95,
    "Next50" : 109.95,
    "Next100" : 119.95
  }
}


// Install Ticket Generation

$("#instTicketGen").on('click', (e)=>{
  let subject = "";
  let body = "";
  // let requiredInput = []; ---> For Future implementation
  const rentOwn = $("#rentOwn").val();
  const lla = $("#lla").prop('checked');
  const accNum = $("#accountNumber").val();
  const msg = $("#message").val();
  const planType = $("input[name='planType']:checked").val();
  const planOption = $(`#${planType}PlanType`).val();
  const price = planPricing[planType][planOption];
  const zyxel = $("#itZyxel").prop('checked') ? $("#itZyxel").parent().text() : "";
  const mikro = $("#itMikrotik").prop('checked') ? $("#itMikrotik").parent().text() : "";
  const static = $("#itStatic").prop('checked') ? $("#itStatic").parent().text() : "";
  const voip = $("#itVOIP").prop('checked') ? $("#itVOIP").parent().text() : "";
  const hap = $("#ithAP").prop('checked') ? $("#ithAP").parent().text() : "";
  const exRDish = $("#itExRDish").prop('checked') ? $("#itExRDish").parent().text() : "";
  const lDrop = $("#itLDrop").prop('checked') ? $("#itLDrop").parent().text() : "";
  
})