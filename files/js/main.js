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


// Mast prices
const mastPrices = {
  monthly : {
    '30' : 12,
    '50' : 20
  },
  outright : {
    '30' : 100,
    '50' : 150
  }
}


// Control Mast option presentation
$("input[name='itMastType'").parent().hide()
$("input[name='itMast'").parent().hide()

// Show/Hide Purchase Type
$("#itMastReq").on('click', ()=>{
  if($("#itMastReq").prop('checked')){
    $("input[name='itMastType']").parent().show()
  } else{
    $("input[name='itMastType']").parent().hide()
  }
})

// Display pricing options
$("input[name='itMastType']").on('click', ()=>{
  const type = $("input[name='itMastType']:checked").val()
  $("#itMastSize").empty()
  if(type){
    $("#itMastSize").append(
      `<label>30Ft: $${mastPrices[type]["30"]}<input type="radio" name="itMastSize", value="${mastPrices[type]["30"]}"></label><br>`,
      `<label>50Ft: $${mastPrices[type]["50"]}<input type="radio" name="itMastSize" value="${mastPrices[type]["50"]}"></label><br>`
    )
  }
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
    let total = 0;

    // Gather Data
    const name = $("#itName").val();
    const address = $("#itAddress").val();

    const rentOwn = $("#rentOwn").val();
    let lla = $("#lla").prop('checked');
    if(rentOwn === 'rent' && !lla){
      return alert("Renters Must have LLA!")
    }
    const llaNote = rentOwn === 'rent' ? 'LLA Agreement Complete' : "LLA Not Needed";
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
    const zyxel = $("#itZyxel").prop('checked') ? ` - ${$("#itZyxel").parent().text()}\n` : "";
    if(zyxel){total += 6.99}
    const mikro = $("#itMikrotik").prop('checked') ? ` - ${$("#itMikrotik").parent().text()}\n` : "";
    const hap = $("#ithAP").prop('checked') ? ` - ${$("#ithAP").parent().text()}\n` : "";
    const mesh = $("#itMesh").prop('checked') ? ` - ${$("#itMesh").parent().text()}\n` : "";
    if(mesh){total += 3.99}
    const static = $("#itStatic").prop('checked') ? ` - ${$("#itStatic").parent().text()}\n` : "";
    if(static){total += 10}
    const voip = $("#itVOIP").prop('checked') ? ` - ${$("#itVOIP").parent().text()}\n` : "";
    if(voip){total += 19.99}
    const lDrop = $("#itLDrop").prop('checked') ? ` - ${$("#itLDrop").parent().text()}\n` : "";
    if(lDrop){total += 50}
    const exRDish = $("#itExRDish").prop('checked') ? ` - ${$("#itExRDish").parent().text()}\n` : "";
    if(exRDish){total += 10}
    let tripod = ""
    let mast = ""
    if($("input[name='itTri']:checked").val()){
      // set var
      tripod = ` - Tripod: ${$("input[name='itTri']:checked").parent().text()}\n`;
      // update total
      total += Number($("input[name='itTri']:checked").attr('price'));
    }
    if($("#itMastReq").prop('checked') && $("input[name='itMastType']:checked").val() && $('input[name="itMastSize"]:checked')){
      // set var
      mast = ` - Mast: ${$("input[name='itMastType']:checked").val() + ' ' + $('input[name="itMastSize"]:checked').parent().text() }\n`;
      // update total
      total += Number($("input[name='itMast']:checked").attr('price'));
    }
    if($("#itEbb").prop('checked')){
      total -= 50
    }
    // Begin Sales Options
    const hubb = $("input[name='caf/hubb']:checked").val() ? ` - CAFF/HUBB: ${$("input[name='caf/hubb']:checked").val()}\n` : "";
    const verHubb = $("#itVerHubb").prop('checked') ? " - Verified in Sales App\n" : "";
    const mkHubb = $("#itMkHubb").prop('checked') ? " - Marked on User Page\n" : "";
    const offVOIP = ` - Offered VOIP: ${$("input[name='itVOIP']:checked").val()}\n`;
    const offDish = ` - Offered Dish Network: ${$("input[name='itDish']:checked").val()}\n`;
    // Final Inputs
    const zone = ` - Installation Zone: ${$("#itZone").val()}\n`;
    const slot = ` - Scheduler Slot: ${$("#itSlot").val()}\n`;
    const coords = ` - Coordinates: ${$("#itCoords").val()}\n`;
    const beThere = ` - Who will be there: ${$("#itBeThere").val()}\n`;
    const date = $("#itDate").val() ? ` - Installation Date: ${$("#itDate").val()}\n` : "";
    const time = ' - ' + $("input[name='timeInstall']:checked").val() + '\n';
    const agent = $("#agent").val();
    const notes = $("#itNotes").val();
    
    // Generate and append subject to DOM
    let subject = 'Install | ' + $("#itDate").val() + ' | ' + time + ' | ' + zone + ' | ' + hubb
    $("#itSubject").val(subject);

    let body = `
    ##Installation Notes##
    Install note prepared by ${agent}.\n
    \n
    Who's Calling: ${name} \n
    Address: ${address}\n
    Account# : ${accNum}\n
    Zone : ${zone}\n
    Important Messages: ${msg}\n
    Rent/Own: ${rentOwn} | LLA: ${llaNote}\n
    \n
    \n
    Plan Type: ${planType}\n
    Plan Option : ${planOption}\n
    \n
    ---Additional Features---\n
    ${ zyxel + mikro + hap + mesh + static + voip + lDrop + exRDish + tripod + mast }\n\n


    ---Sales Options---\n
    ${ hubb + verHubb + mkHubb + offVOIP + offDish }\n\n

    ---Appointment Details---\n
    ${ zone + slot + coords + beThere + inDis + plDis + disRea + date + time }\n\n

    Total Cost: $${price}

    **Agent Notes**
    ${notes}
    `
    $("#itBody").val(body)
    return true
})