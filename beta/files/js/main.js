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

$(".planType").hide()

$("input[name='planType']").on('click', ()=>{
  $(".planType").hide()
  const selected = $("input[name='planType']:checked").val()
  const id = selected + "PlanType"
  $(`#${id}`).show()
})