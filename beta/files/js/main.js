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
    "" : 0,
    "Next15" : 49.95,
    "Next20" : 59.95,
    "Next25" : 69.95,
    "Next35" : 79.95,
    "Next50" : 99.95,
    "Next100" : 119.95
  },
  "M2M" : {
    "" : 0,
    "Next10" : 59.95,
    "Next15" : 69.95,
    "Next20" : 79.95,
    "Next25" : 89.95,
    "Next35" : 99.95,
    "Next50" : 119.95,
    "Next100" : 139.95
  },
  "HUBB" : {
    "" : 0,
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

$("#installTicketForm").on('submit', (e)=>{
    e.preventDefault()
    let subject = "";
    let body = "";
    let total = 0;
    // let requiredInput = []; ---> For Future implementation

    // Gather Data
    const rentOwn = $("#rentOwn").val();
    const lla = $("#lla").prop('checked');
    if(rentOwn === 'rent' && !lla){
      return alert("Renters Must have LLA!")
    }
    const accNum = $("#accountNumber").val();
    const msg = $("#message").val();
    const planType = $("input[name='planType']:checked").val();
    const planOption = $(`#${planType}PlanType`).val();
    if(!planOption){
      return alert("Please select plan")
    }

    // reference above planPricing object for cost of plan
    const price = planPricing[planType][planOption];
    total += price

    // Begin Additional Features
    const zyxel = $("#itZyxel").prop('checked') ? $("#itZyxel").parent().text() : "";
    if(zyxel){total += 6.99}
    const mikro = $("#itMikrotik").prop('checked') ? $("#itMikrotik").parent().text() : "";
    const hap = $("#ithAP").prop('checked') ? $("#ithAP").parent().text() : "";
    const mesh = $("#itMesh").prop('checked') ? $("#itMesh").parent().text() : "";
    if(mesh){total += 3.99}
    const static = $("#itStatic").prop('checked') ? $("#itStatic").parent().text() : "";
    if(static){total += 10}
    const voip = $("#itVOIP").prop('checked') ? $("#itVOIP").parent().text() : "";
    if(voip){total += 19.99}
    const lDrop = $("#itLDrop").prop('checked') ? $("#itLDrop").parent().text() : "";
    if(lDrop){total += 50}
    const exRDish = $("#itExRDish").prop('checked') ? $("#itExRDish").parent().text() : "";
    if(exRDish){total += 10}
    let tripod = ""
    let mast = ""
    if($("input[name='itTri']:checked").val()){
      // set var
      tripod = $("input[name='itTri']:checked").parent().text();
      // update total
      total += Number($("input[name='itTri']:checked").attr('price'));
    }
    if($("input[name='itMast']:checked").val()){
      // set var
      mast = $("input[name='itTri']:checked").parent().text();
      // update total
      total += Number($("input[name='itMast']:checked").attr('price'));
    }
    // Begin Sales Options
    const hubb = $("input[name='caf/hubb']:checked").val() ? `CAFF/HUBB: ${$("input[name='caf/hubb']:checked").val()}` : "";
    const verHubb = $("#itVerHubb").prop('checked') ? "Verified in Sales App" : "";
    const mkHubb = $("#itMkHubb").prop('checked') ? "Marked on User Page" : "";
    const offVOIP = `Offered VOIP: ${$("input[name='itVOIP']:checked").val()}`;
    const offDish = `Offered Dish Network: ${$("input[name='itDish']:checked").val()}`;
    // Final Inputs
    const zone = `Installation Zone: ${$("#itZone").val()}`;
    const slot = `Scheduler Slot: ${$("#itSlot").val()}`;
    const coords = $("#itCoords").val();
    const beThere = `Who will be there: ${$("#itBeThere").val()}`;
    const inDis = $("#itInDis").val() ? `Install Discount: $${$("#itInDis").val()}` : "";
    const plDis = $("#itPlDis").val() ? `Plan Discount: $${$("#itPlDis").val()}` : "";
    const disRea = $("#itPlDis").val() ? `Plan Discount: $${$("#itPlDis").val()}` : "";
    const date = $("#itDate").val() ? `Installation Date: ${$("#itDate").val()}` : "";
    const time = $("input[name='timeInstall']:checked").val()
    const agent = $("#agent").val()
    
    
    // Generate and append subject to DOM
    subject += 'Install | ' + $("#itDate").val() + ' | ' + time + ' | ' + zone + ' | ' + hubb
    $("#itSubject").val(subject);
})