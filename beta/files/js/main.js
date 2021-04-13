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



// Install Ticket Generation

$("#instTicketGen").on('click', ()=>{
  let subject = "";
  let body = "";
  let requiredInput = [];
  const rentOwn = $("#rentOwn").val();
  const lla = $("#lla").prop('checked');
  const accNum = $("#accountNumber").val();
  const msg = $("#message").val();
  const planType = $("input[name='planType']:checked").val();
  let planOption = $(`#${planType}PlanType`).val();


})