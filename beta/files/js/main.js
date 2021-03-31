

/* **************************** Every Ticket Script **************************** */

function everyTicketFunction() {
    var everyTicketBody = "";
    var everyTicketSubject = "";

    // Clear Red Input Colors
    document.getElementById('Name').style.backgroundColor = "";
    document.getElementById('Number').style.backgroundColor = "";
    document.getElementById('cxAccount').style.backgroundColor = "";
    document.getElementById('etSMIP').style.backgroundColor = "";
    document.getElementById('etAPIP').style.backgroundColor = "";
    document.getElementById('etAPSSID').style.backgroundColor = "";
    document.getElementById('RouterIP').style.backgroundColor = "";
    document.getElementById('routerType').style.backgroundColor = "";
    document.getElementById('cxIssue').style.backgroundColor = "";
    document.getElementById('Summary').style.backgroundColor = "";
    document.getElementById('Resolution').style.backgroundColor = "";
    document.getElementById('nextStep').style.backgroundColor = "";
    document.getElementById('zyxelPW').style.backgroundColor = "";
    document.getElementById("etError").innerHTML = " ";
    document.getElementById("errorPW").innerHTML = " ";

  // Every Ticket Body

    var etName = document.getElementById('Name').value; 
    if (etName == ""){document.getElementById('Name').style.backgroundColor = "#FF5733";} 
    else {etName = "\nWho is calling: " + etName;}
    var etNumber = document.getElementById('Number').value; if (etNumber == ""){document.getElementById('Number').style.backgroundColor = "#FF5733";} else {etNumber = "\nBest callback: " + etNumber;}
    var etAccount = document.getElementById('cxAccount').value; if (etAccount == ""){document.getElementById('cxAccount').style.backgroundColor = "#FF5733";} else {etAccount = "\nAccount Type: " + etAccount;}
    var etSMIP = document.getElementById('etSMIP').value; if (etSMIP == ""){document.getElementById('etSMIP').style.backgroundColor = "#FF5733";} else {etSMIP = "\nSM IP: " + etSMIP;}
    var etAPIP = document.getElementById('etAPIP').value; if (etAPIP == ""){document.getElementById('etAPIP').style.backgroundColor = "#FF5733";} else {etAPIP = "\nAP IP: " + etAPIP;}
    var etAPSSID = document.getElementById('etAPSSID').value; if (etAPSSID == ""){document.getElementById('etAPSSID').style.backgroundColor = "#FF5733";} else {etAPSSID = "\nAP SSID: " + etAPSSID;}
    var etRouterIP = document.getElementById('RouterIP').value; if (etRouterIP == ""){document.getElementById('RouterIP').style.backgroundColor = "#FF5733";} else {etRouterIP = "\nCustomer Router IP: " + etRouterIP;}
    var etIssue = document.getElementById('cxIssue').value; if (etIssue == ""){document.getElementById('cxIssue').style.backgroundColor = "#FF5733";} else {etIssue = "\nIssue: " + etIssue;}
    var etSummary = document.getElementById('Summary').value; if (etSummary == ""){document.getElementById('Summary').style.backgroundColor = "#FF5733";} else {etSummary = "\n\nSummary: " + etSummary;}
    var everyTicket = "###EVERY TICKET###"; if (etAPSSID == ""){everyTicket = "###NOTES###";}

    var etCheckboxes = ""
    // Basic Troubleshooting
      + (document.getElementById('tsPermissionCOM').checked ? "\n- Permission was granted to power-cycle" : "")
      + (document.getElementById('tsPermission2COM').checked ? "\n- Permission was denied to power-cycle" : "")
      + (document.getElementById('tsPOE').checked ? "\n- Power-cycled POE" : "")
      + (document.getElementById('tsRouter').checked ? "\n- Power-cycled Router" : "")
      + (document.getElementById('tsCabling').checked ? "\n- Verified cabling" : "")
      + (document.getElementById('tsCabling2').checked ? "\n- Verified and corrected cabling" : "")
      + (document.getElementById('tsPOELight').checked ? "\n- Verified POE light was on and not blinking" : "")
      + (document.getElementById('tsPOELight2').checked ? "\n- Verified POE light was blinking or off" : "")
      + (document.getElementById('tsReseated').checked ? "\n- Reseated Ethernet cables" : "")
      + (document.getElementById('tsSwapped').checked ? "\n- Swapped POE to Router Cabling" : "")
      + (document.getElementById('tsSwapped2').checked ? "\n- Swapped SM to POE Cabling" : "")
      + (document.getElementById('tsSMeth').checked ? "\n- Could not swap SM Ethernet / Goes through wall" : "")
      + (document.getElementById('tsBypassed').checked ? "\n- Bypassed router / Internet works" : "")
      + (document.getElementById('tsBypassed2').checked ? "\n- Bypassed router / No internet" : "")
      + (document.getElementById('tsAuthenticated').checked ? "\n- Verified RTR is on SM bridge table" : "")
      + (document.getElementById('tsAuthenticated2').checked ? "\n- Verified RTR is not on SM bridge table" : "")

    // Advanced Troubleshooting
      + (document.getElementById('tsRouterGood').checked ? "\n- Router speeds were set correctly in Billmax" : "")
      + (document.getElementById('tsRouterBad').checked ? "\n- Router speeds were incorrect in Billmax" : "")
      + (document.getElementById('tsQueuesGood').checked ? "\n- Checked queues and they were set correctly" : "")
      + (document.getElementById('tsQueuesBad').checked ? "\n- Checked queues and they need to be corrected" : "")
      + (document.getElementById('tsVerifiedSpeeds').checked ? "\n- Verified speedstest speeds through SM" : "")
      + (document.getElementById('tsVerifiedSpeeds2').checked ? "\n- Verified speedtest speeds through TR -> Queues -> Traffic" : "")
      + (document.getElementById('tsSurvey').checked ? "\n- Site survey did not reveal a better AP" : "")
      + (document.getElementById('tsSurvey2').checked ? "\n- Site survey revealed a better AP, moved cx" : "")
      + (document.getElementById('tsDHCPcpe2').checked ? "\n- TWR RTR DHCP Server shows CPE" : "")
      + (document.getElementById('tsDHCPcpe').checked ? "\n- TWR RTR DHCP Server does not show CPE" : "")
      + (document.getElementById('tsDHCProuter2').checked ? "\n- TWR RTR DHCP Server shows Router" : "")
      + (document.getElementById('tsDHCProuter').checked ? "\n- TWR RTR DHCP Server does not show Router" : "")
      + (document.getElementById('tsPushing').checked ? "\n- Tried pushing 100mbps on SM and it was successful" : "")
      + (document.getElementById('tsPushing2').checked ? "\n- Tried pushing 100mbps on SM and it was unsuccessful" : "")
      + (document.getElementById('tsLAN').checked ? "\n- Tried LAN Trick and it was successful" : "")
      + (document.getElementById('tsLAN2').checked ? "\n- Tried LAN Trick and it was unsuccessful" : "")
      + (document.getElementById('tsCalix').checked ? "\n- Verified 5G/2G were separated in Calix RTR" : "")
      + (document.getElementById('tsCalix2').checked ? "\n- Separated 5G/2G in Calix RTR" : "")

    // Commercial Troubleshooting
      + (document.getElementById('tsSMGoodCOM').checked ? "\n- SM is accessible" : "")
      + (document.getElementById('tsSMBadCOM').checked ? "\n- SM is not accessible" : "")
      + (document.getElementById('tsSMAPCOM').checked ? "\n- SM shows on AP Station List" : "")
      + (document.getElementById('tsSMAP2COM').checked ? "\n- SM is not on AP Station List" : "")
      + (document.getElementById('tsAuthenticatedCOM').checked ? "\n- Verified RTR is on SM bridge table" : "")
      + (document.getElementById('tsAuthenticated2COM').checked ? "\n- Verified RTR is not on SM bridge table" : "")

    // Advanced Commercial Troubleshooting
      + (document.getElementById('tsFirmwareCOM').checked ? "\n- SM and AP Firmware match" : "")
      + (document.getElementById('tsFirmware2COM').checked ? "\n- SM and AP Firmware do not match" : "")
      + (document.getElementById('tsFirmware3COM').checked ? "\n- SM Firmware is up to date" : "")
      + (document.getElementById('tsFirmware4COM').checked ? "\n- SM Firmware needs to be updated" : "")
      + (document.getElementById('tsFirewallCOM').checked ? "\n- AP Firewall has 2 rules" : "")
      + (document.getElementById('tsFirewall2COM').checked ? "\n- AP Firewall does not have 2 rules" : "")
      + (document.getElementById('tsDiscoveryCOM').checked ? "\n- AP Discovery is ON" : "")
      + (document.getElementById('tsDicovery2COM').checked ? "\n- AP Discovery is OFF" : "")
      + (document.getElementById('tsFramingCOM').checked ? "\n- SM is on Flexible (Legacy)" : "")
      + (document.getElementById('tsFraming2COM').checked ? "\n- SM is on Flexible (NEW)" : "")
      + (document.getElementById('tsPreferredAPCOM').checked ? "\n- SM Has Preferred AP" : "")
      + (document.getElementById('tsPreferredAP2COM').checked ? "\n- SM Does NOT have Preferred AP" : "")
      + (document.getElementById('tsMhzSelectedCOM').checked ? "\n- All 20/40 Mhz selected" : "")
      + (document.getElementById('tsMhzSelected2COM').checked ? "\n- Not all 20/40 Mhz selected" : "")
      + (document.getElementById('tsFraming3COM').checked ? "\n- AP Framing 50/50" : "")
      + (document.getElementById('tsFraming4COM').checked ? "\n- AP Framing 75/25" : "")

    // Plan Upgrade
      + (document.getElementById('planBM').checked ? "\n- Changed Plan In Billmax" : "")
      + (document.getElementById('smPlanName').checked ? "\n- Changed SM Name To Reflect New Plan" : "")
      + (document.getElementById('pcSM').checked ? "\n- Power-cycled SM Remotely" : "")
      + (document.getElementById('pcRTR').checked ? "\n- Power-cycled Router Remotely" : "")
      + (document.getElementById('exProRate').checked ? "\n- Explained Pro-Rated Charge" : "")
      + (document.getElementById('exBillCharge').checked ? "\n- Explained Amount Will Be Charged Tonight At Midnight" : "")

    // Speedtests
      + (document.getElementById('tsBypassedYes').checked ? "\n- Ran Bypassed Speedtest (Results Below)" : "")
      + (document.getElementById('tsBypassedNo').checked ? "\n- Customer Has No Bypass Device" : "")
    ;

    var etPingCheckboxes = ""
      + (document.getElementById('tsSMgood').checked ? "\n- SM Pings are within spec" : "")
      + (document.getElementById('tsSMbad').checked ? "\n- SM Pings are NOT within spec" : "")
      + (document.getElementById('tsAPgood').checked ? "\n- AP Pings are within spec" : "")
      + (document.getElementById('tsAPbad').checked ? "\n- AP Pings are NOT within spec" : "")
      + (document.getElementById('tsRTRgood').checked ? "\n- RTR Pings are within spec" : "")
      + (document.getElementById('tsRTRbad').checked ? "\n- RTR Pings are NOT within spec" : "");

    var etPCMAC = document.getElementById('pcMAC').value; if (etPCMAC == ""){etPCMAC = ""} else {etPCMAC = "\n- Authenticated Computer - MAC: " + etPCMAC;
}
    var etRTRMAC = document.getElementById('rtrMAC').value; if (etRTRMAC == ""){etRTRMAC = "";} else {etRTRMAC = "\n- Authenticated Router - MAC: " + etRTRMAC;
}
    var routerType = document.getElementById('routerType').value; if (routerType == ""){document.getElementById('routerType').style.backgroundColor = "#FF5733";} else {routerType = "\nRouter Type: " + routerType;}
    var zyxelPW = document.getElementById('zyxelPW').value; if (zyxelPW == ""){document.getElementById('zyxelPW').style.backgroundColor = "#FF5733";} else {zyxelPW = "\nZyxel Password: " + zyxelPW;}

    var etResolution = document.getElementById('Resolution').value; if (etResolution == ""){document.getElementById('Resolution').style.backgroundColor = "#FF5733";} else {etResolution = "\n\nResolution: " + etResolution;
}
    var etNextStep = document.getElementById('nextStep').value; if (etNextStep == ""){document.getElementById('nextStep').style.backgroundColor = "#FF5733";} else {etNextStep = "\n\nNext Step: " + etNextStep;
}
    // Bypassed Speedtest Results
    var bySpeedTestSite = document.getElementById('byspeedtestSite').value; if (bySpeedTestSite == ""){bySpeedTestSite = "";} else {bySpeedTestSite = "\n\n" + bySpeedTestSite;}
    var byPingResult = document.getElementById('byPing1').value; if (byPingResult == ""){byPingResult = "";} else {byPingResult = "\nPing: " + byPingResult + " ms";}
    var byDownloadResult = document.getElementById('byDownload1').value; if (byDownloadResult == ""){byDownloadResult = "";} else {byDownloadResult = "\nDownload: " + byDownloadResult + " Mbps";}
    var byUploadResult = document.getElementById('byUpload1').value; if (byUploadResult == ""){byUploadResult = "";} else {byUploadResult = "\nUpload: " + byUploadResult + " Mbps";
}
    var bySpeedTestSite2 = document.getElementById('byspeedtestSite2').value; if (bySpeedTestSite2 == ""){bySpeedTestSite2 = "";} else {bySpeedTestSite2= "\n\n" + bySpeedTestSite2;}
    var byPingResult2 = document.getElementById('byPing2').value; if (byPingResult2 == ""){byPingResult2 = "";} else {byPingResult2 = "\nPing: " + byPingResult2 + " ms";}
    var byDownloadResult2 = document.getElementById('byDownload2').value; if (byDownloadResult2 == ""){byDownloadResult2 = "";} else {byDownloadResult2 = "\nDownload: " + byDownloadResult2 + " Mbps";}
    var byUploadResult2 = document.getElementById('byUpload2').value; if (byUploadResult2 == ""){byUploadResult2 = "";} else {byUploadResult2 = "\nUpload: " + byUploadResult2 + " Mbps";
}
//     var byRanSpeedTest = ""; if (bySpeedTestSite || bySpeedTestSite2 != ""){byRanSpeedTest = "\n- Ran Bypassed Speed Tests (Results Below)";} else {byRanSpeedTest = "";
// }

    // SM, AP, RTR Pings
    var etSMPing = document.getElementById('smResults').value; if (etSMPing == ""){etSMPing = "";} else {etSMPing = "\n\nSM Pings: " + etSMPing;}
    var etAPPing = document.getElementById('apResults').value; if (etAPPing == ""){etAPPing = "";} else {etAPPing = "\n\nAP Pings: " + etAPPing;}
    var etRTRPing = document.getElementById('rtrResults').value; if (etRTRPing == ""){etRTRPing = "";} else {etRTRPing = "\n\nRouter Pings: " + etRTRPing;}
    var etRanPings = ""; if (etSMPing || etAPPing || etRTRPing != ""){etRanPings = "\n- Ran Pings";} else {etRanPings = "";
}
    // SM and AP Stats
    var etSMUptime = document.getElementById('smUptime').value; if (etSMUptime == ""){etSMUptime = "";} else {etSMUptime = "\n- SM Uptime: " + etSMUptime;}
    var etAPUptime = document.getElementById('apUptime').value; if (etAPUptime == ""){etAPUptime = "";} else {etAPUptime = "\n- AP Uptime: " + etAPUptime;}
    var etSMSignal = document.getElementById('smSignal').value; if (etSMSignal == ""){etSMSignal = "";} else {etSMSignal = "\n- SM Signal is " + etSMSignal + "dBm";}
    var etSMSplits = document.getElementById('smSplits').value; if (etSMSplits == ""){etSMSplits = "";} else {etSMSplits = "\n- SM is seeing a split chain of " + etSMSplits + "dBm";}
    var etStats = ""; if (etSMUptime == "" && etAPUptime == "" && etSMSignal == "" && etSMSplits == ""){etStats = "";} else {etStats = "\n\nStats:";
}
    // Commercial SM and AP Stats
    var approvalCOM = document.getElementById('approvalCOM').value; if (approvalCOM == ""){approvalCOM = "";} else {approvalCOM = "\nCom Account Approved By: " + approvalCOM;}
    var etSMUptimeCOM = document.getElementById('smUptimeCOM').value; if (etSMUptimeCOM == ""){etSMUptimeCOM = "";} else {etSMUptimeCOM = "\n- SM Uptime: " + etSMUptimeCOM;}
    var etAPUptimeCOM = document.getElementById('apUptimeCOM').value; if (etAPUptimeCOM == ""){etAPUptimeCOM = "";} else {etAPUptimeCOM = "\n- AP Uptime: " + etAPUptimeCOM;}
    var etSMSignalCOM = document.getElementById('smSignalCOM').value; if (etSMSignalCOM == ""){etSMSignalCOM = "";} else {etSMSignalCOM = "\n- SM Signal is " + etSMSignalCOM + "dBm";}
    var etSMSplitsCOM = document.getElementById('smSplitsCOM').value; if (etSMSplitsCOM == ""){etSMSplitsCOM = "";} else {etSMSplitsCOM = "\n- SM is seeing a split chain of " + etSMSplitsCOM + "dBm";}
    var smConnectionTimeCOM = document.getElementById('smConnectionTimeCOM').value; if (smConnectionTimeCOM == ""){smConnectionTimeCOM = "";} else {smConnectionTimeCOM = "\n- AP Connection Time: " + smConnectionTimeCOM;}
    var smAPFrequencyCOM = document.getElementById('smAPFrequencyCOM').value; if (smAPFrequencyCOM == ""){smAPFrequencyCOM = "";} else {smAPFrequencyCOM = "\n- AP Frequency: " + smAPFrequencyCOM;}
    var etStatsCOM = ""; if (etSMUptimeCOM == "" && etAPUptimeCOM == "" && etSMSignalCOM == "" && etSMSplitsCOM == "" && smConnectionTimeCOM == "" && smAPFrequencyCOM == ""){etStatsCOM = "";} else {etStatsCOM = "\n\nCommercial Stats:";
}
    // If no checkboxes are checked, this code will show no troubleshooting completed.
    var etCheckboxesTS = "";
    var count = document.querySelectorAll("#tsCheckboxes :checked").length;
      if (count == 0 && etPCMAC == "" && etRTRMAC == "" && bySpeedTestSite == "" && bySpeedTestSite2 == ""){etCheckboxesTS = "\n\n** No Troubleshooting Needed **";}
      else {etCheckboxesTS = "\n\nTroubleshooting Completed:";
}
    // Subject line
    etAPSubject = document.getElementById('etAPSSID').value; if (etAPSubject == ""){etAPSubject = "";} else {etAPSubject = etAPSubject;}
    etAccountSubject = document.getElementById('cxAccount').value; if (etAccountSubject == ""){etAccountSubject = "";} else {etAccountSubject = " | " + etAccountSubject;}
    etIssueSubject = document.getElementById('cxIssue').value; if (etIssueSubject == ""){etIssueSubject = "";} else {etIssueSubject = " | " + etIssueSubject;}
    etAPSSIDSubject = document.getElementById('etAPSSID').value; if (etAPSSIDSubject == ""){etAPSSIDSubject = "";} else {etAPSSIDSubject = etAPSSIDSubject;}
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear().toString().substr(2,2);
    today = " | " + mm+'-'+dd+'-'+yyyy;
      if (etAPIP ==""){today = "";}

    // Fiber Information
    var etFAS = document.getElementById('etFAS').value; if (etFAS == ""){etFAS = "";} else {etFAS = "\n\nSwitch Name: " + etFAS;}
    var etSwitchPort = document.getElementById('etSwitchPort').value; if (etSwitchPort == ""){etSwitchPort = "";} else {etSwitchPort = "\nSwitch Port: " + etSwitchPort;}
    var etLightLevel = document.getElementById('etLightLevel').value; if (etLightLevel == ""){etLightLevel = "";} else {etLightLevel = "\nLight Level: " + etLightLevel;}
    var etFiberRouterIP = document.getElementById('etFiberRouterIP').value; if (etFiberRouterIP == ""){etFiberRouterIP = "";} else {etFiberRouterIP = "\nFiber Router IP: " + etFiberRouterIP + "\n";
}
      if (etFAS != "" || etSwitchPort != "" || etLightLevel != "" || etFiberRouterIP != ""){etSMIP = ""; etAPIP = ""; etAPSSID = ""; etAPSSIDSubject = "Fiber | " + document.getElementById('etFAS').value;
}
    // Red Empty Inputs
    et50 = "*** Not All Inputs Have Been Filled ***";
      if (etName == "" || etNumber == "" || etAccount == "" || etSMIP == "" || etAPIP == "" || etAPSSID == "" || etRouterIP == "" || routerType == "" || etIssue == "" || etSummary == "" || etResolution == "" || etNextStep == "")
      {document.getElementById("etError").innerHTML = et50;} else {et50 = "";}

    everyTicketBody = everyTicket + approvalCOM + etName + etNumber + etAccount
    + etSMIP + etAPIP + etAPSSID
    + etFAS + etSwitchPort + etLightLevel + etFiberRouterIP
    + etRouterIP + routerType + zyxelPW + etIssue + etSummary
    + etStats + etSMUptime + etAPUptime + etSMSignal + etSMSplits
    + etStatsCOM + etSMUptimeCOM + etAPUptimeCOM + etSMSignalCOM + etSMSplitsCOM + smConnectionTimeCOM + smAPFrequencyCOM
    + etCheckboxesTS + etCheckboxes + etPCMAC + etRTRMAC + etRanPings + etPingCheckboxes
    + bySpeedTestSite + byPingResult + byDownloadResult + byUploadResult
    + bySpeedTestSite2 + byPingResult2 + byDownloadResult2 + byUploadResult2
    + etSMPing + etAPPing + etRTRPing + etResolution + etNextStep;

    everyTicketSubject = etAPSSIDSubject + etAccountSubject + etIssueSubject + today;

    errorPW = "*** Zyxel Password Is Required ***";
    routerTypeError = document.getElementById('routerType').value;
    zyxelPWError = document.getElementById('zyxelPW').value;
      if (routerTypeError == "Zyxel" && zyxelPWError == ""){document.getElementById("errorPW").innerHTML = errorPW;} else {errorPW = "";}
      if (routerTypeError == "Zyxel" && zyxelPWError == ""){everyTicketSubject = "*** Zyxel Password Is Required ***";} else {everyTicketSubject = everyTicketSubject;}
      if (routerTypeError == "Zyxel" && zyxelPWError == "") {everyTicketBody = "*** Zyxel Password Is Required ***";} else {everyTicketBody = everyTicketBody;}

    document.getElementById('ticketOutput').value = everyTicketBody;
    document.getElementById('subjectOutput').value = everyTicketSubject;
    return false;
}

/* **************************** Service Call Ticket Script **************************** */

// Main page function
function serviceText() {
    var serviceOut = "";
    var serviceSubject = "";
    var schedulerOut = "";

    // Clear Red Input Colors
    document.getElementById('scName').style.backgroundColor = "";
    document.getElementById('scNumber').style.backgroundColor = "";
    document.getElementById('scaccountNumber').style.backgroundColor = "";
    document.getElementById('scApproval').style.backgroundColor = "";
    document.getElementById('scAccount').style.backgroundColor = "";
    document.getElementById('scSMIP').style.backgroundColor = "";
    document.getElementById('scAPIP').style.backgroundColor = "";
    document.getElementById('scAPSSID').style.backgroundColor = "";
    document.getElementById('Zone').style.backgroundColor = "";
    document.getElementById('cellblock').style.backgroundColor = "";
    document.getElementById('scQueue').style.backgroundColor = "";
    document.getElementById('scQueueResult').style.backgroundColor = "";
    // document.getElementById('scDeployment').style.backgroundColor = "";
    // document.getElementById('scTicketProblem').style.backgroundColor = "";
    document.getElementById('scChargeDropdown').style.backgroundColor = "";
    document.getElementById('scDate').style.backgroundColor = "";
    document.getElementById('specialInstructions').style.backgroundColor = "";
    document.getElementById('instructions').style.backgroundColor = "";
    document.getElementById('scsubjectOutput').style.backgroundColor = "";
    document.getElementById('scticketOutput').style.backgroundColor = "";
    document.getElementById('schedulerOutput').style.backgroundColor = "";
    document.getElementById('billingFee').style.backgroundColor = "";
    document.getElementById('scBillingNotes').style.backgroundColor = "";
    document.getElementById('billingSubject').style.backgroundColor = "";
    document.getElementById('billingTicket').style.backgroundColor = "";
    document.getElementById("scError").innerHTML = " ";

    // Service Call Body
    scServiceTicket = "###SERVICE TICKET###";
    scName = document.getElementById('scName').value;if (scName == ""){document.getElementById('scName').style.backgroundColor = "#FF5733";} else {scName = "\nWho is calling: " + scName;}
    scNumber = document.getElementById('scNumber').value;if (scNumber == ""){document.getElementById('scNumber').style.backgroundColor = "#FF5733";} else {scNumber = "\nContact Number: " + scNumber}
    scAccount = document.getElementById('scAccount').value;if (scAccount == ""){document.getElementById('scAccount').style.backgroundColor = "#FF5733";} else {scAccount = "\nAccount Type: " + scAccount;}
    scZone = document.getElementById('Zone').value;
      if (scZone == ""){document.getElementById('Zone').style.backgroundColor = "#FF5733";} else {scZone = " | ZONE " + scZone;}
      if (scAccount == ""){scZone = "";} else {scZone = scZone;}
    scApproval = document.getElementById('scApproval').value; if (scApproval == ""){document.getElementById('scApproval').style.backgroundColor = "#FF5733";} else {scApproval = "\nService Call Approved By: " + scApproval;}
    scQueue = document.getElementById('scQueue').value; if (scQueue == ""){document.getElementById('scQueue').style.backgroundColor = "#FF5733";} else {scQueue = "\nQueue: " + scQueue;}
    scQueueResult = document.getElementById('scQueueResult').value; if (scQueueResult == ""){document.getElementById('scQueueResult').style.backgroundColor = "#FF5733";} else {scQueueResult = "\nDeployment: " + scQueueResult;}

    scTower = document.querySelector('input[name="scTower"]:checked').value; if (scTower == ""){scTower = "";} else {scTower = "\nDoes The Cx Have A Personal Tower? (40ft etc): " + scTower;}

    scChargeDropdown = document.getElementById('scChargeDropdown').value; if (scChargeDropdown == ""){document.getElementById('scChargeDropdown').style.backgroundColor = "#FF5733";} else {scChargeDropdown = "\n\nIs the customer aware they could be charged: " + scChargeDropdown;}
    scCellblock = document.getElementById('cellblock').value; if (scCellblock == ""){document.getElementById('cellblock').style.backgroundColor = "#FF5733";} else {scCellblock= "\nScheduler Cellblock: " + scCellblock;}
    scFee = document.querySelector('input[name="fee"]:checked').value; if (scCellblock == ""){scFee = "";} else {scFee = "\nDoes a fee need to be charged: " + scFee;}
    scSMIP = document.getElementById('scSMIP').value; if (scSMIP == ""){document.getElementById('scSMIP').style.backgroundColor = "#FF5733";} else {scSMIP = "\n\nLast Known SM IP: " + scSMIP;}
    scAPIP = document.getElementById('scAPIP').value; if (scAPIP == ""){document.getElementById('scAPIP').style.backgroundColor = "#FF5733";} else {scAPIP = "\nLast Known AP IP: " + scAPIP;}
    scAPSSID = document.getElementById('scAPSSID').value; if (scAPSSID == ""){document.getElementById('scAPSSID').style.backgroundColor = "#FF5733";} else {scAPSSID = "\nLast Known AP SSID: " + scAPSSID;}
    scInstructions = document.getElementById('instructions').value;if (scInstructions == ""){scInstructions= "";} else {scInstructions = "\n\nInstructions For Installer: " + scInstructions;}
    scSummary = document.getElementById('scSummary').value; if (scSummary == ""){scSummary = "";} else {scSummary = "\n\nSummary & Troubleshooting: " + scSummary;
}
    // Service Call Subject Line
    scInstructionsDD = document.getElementById('specialInstructions').value; if (scInstructionsDD == ""){scInstructionsDD = "";} else {scInstructionsDD = scInstructionsDD;}
    scDateSubject = document.getElementById('scDate').value; if (scDateSubject == ""){document.getElementById('scDate').style.backgroundColor = "#FF5733";} else {scDateSubject = scDateSubject;}
    scTimeSubject = document.querySelector('input[name="TimeFrame"]:checked').value; if (scZone == ""){scTimeSubject = "";} else {scTimeSubject = " | " + scTimeSubject;}
    scAccountSubject = document.getElementById('scAccount').value; if (scAccountSubject == ""){scAccountSubject = "";} else {scAccountSubject = " | " + scAccountSubject;}
    scQueueResultSubject = document.getElementById('scQueueResult').value; if (scQueueResultSubject == ""){scQueueResultSubject = "";} else {scQueueResultSubject = " | " + scQueueResultSubject;
  }

    // Scheduler Note
    scNameNote = document.getElementById('scName').value;
      if (scNameNote == ""){scNameNote = "";} else {scNameNote = scNameNote;}
    scAccountNumberNote = document.getElementById('scaccountNumber').value;
      if (scAccountNumberNote == ""){document.getElementById('scaccountNumber').style.backgroundColor = "#FF5733";} else {scAccountNumberNote = " -- " + scAccountNumberNote;
}

    // Red Empty Inputs
    sc50 = "*** Not All Inputs Have Been Filled ***";
      if (scName == "" || scNumber == "" || scAccountNumberNote == "" || scAccount == "" || scSMIP == "" || scAPIP == "" || scAPSSID == "" || scZone == "" || scCellblock == "" || scDateSubject == "" || scApproval == "" || scQueue == "" || scQueueResult == ""){document.getElementById("scError").innerHTML = sc50;} else {sc50 = "";
}
    if (scApproval == ""){alert("Service Call Approval Name Is Required");}
    if (scCellblock == ""){alert("Cellblock Is Required");}

    serviceOut = scServiceTicket + scName + scNumber + scAccount + scZone + scApproval + scQueue + scQueueResult + scTower + scChargeDropdown + scFee + scCellblock + scSMIP + scAPIP + scAPSSID + scInstructions + scSummary;
    serviceSubject = scInstructionsDD + scDateSubject + scTimeSubject + scAccountSubject + scQueueResultSubject + scZone;
    schedulerOut = scNameNote + scAccountNumberNote;

    if (scApproval == "" || scCellblock == ""){serviceOut = "";}
    if (scApproval == "" || scCellblock == ""){serviceSubject = "";}

    document.getElementById('scsubjectOutput').value = serviceSubject;
    document.getElementById('scticketOutput').value = serviceOut;
    document.getElementById('schedulerOutput').value = schedulerOut;
    return false;
}

/* **************************** Billing Ticket Script **************************** */

function billingText() {
    var billingBody = "";

    // Clear Red Input Colors
    document.getElementById('billingName').style.backgroundColor = "";
    document.getElementById('billingNumber').style.backgroundColor = "";
    document.getElementById('billingAccount').style.backgroundColor = "";
    document.getElementById('billingSCDate').style.backgroundColor = "";
    document.getElementById('billingQueue').style.backgroundColor = "";
    document.getElementById('billingQueueResult').style.backgroundColor = "";

    billingName = document.getElementById('billingName').value;
      if (billingName == ""){document.getElementById('billingName').style.backgroundColor = "#FF5733";} else {billingName = "Name: " + billingName;}
    billingNumber = document.getElementById('billingNumber').value;
      if (billingNumber == ""){document.getElementById('billingNumber').style.backgroundColor = "#FF5733";} else {billingNumber = "\n\nBest Callback Number: " + billingNumber;}
    billingAccount = document.getElementById('billingAccount').value;
      if (billingAccount == ""){document.getElementById('billingAccount').style.backgroundColor = "#FF5733";} else {billingAccount = billingAccount;}
    billingSCDate = document.getElementById('billingSCDate').value;
      if (billingSCDate == ""){document.getElementById('billingSCDate').style.backgroundColor = "#FF5733";} else {billingSCDate = billingSCDate;}
    billingQueue = document.getElementById('billingAccount').value;
      if (billingQueue == ""){document.getElementById('billingQueue').style.backgroundColor = "#FF5733";} else {billingQueue = billingQueue;}
    billingQueueResult = document.getElementById('billingQueueResult').value;
      if (billingQueueResult == ""){document.getElementById('billingQueueResult').style.backgroundColor = "#FF5733";} else {billingQueueResult = billingQueueResult;}

    scBillingNotes = document.getElementById('scBillingNotes').value;
      if (scBillingNotes == ""){scBillingNotes = "";} else {scBillingNotes =  "\n\nExtra Notes: " + scBillingNotes;}
    billingQueueResultSubject = document.getElementById('billingQueueResult').value;
      if (billingQueueResultSubject == ""){document.getElementById('billingQueueResultSubject').style.backgroundColor = "#FF5733";} else {billingQueueResultSubject = billingQueueResultSubject;}

    billingBody = "" + billingName + billingNumber
    + "\n\nReason For Service Call: " + billingQueueResultSubject
    + "\n\nHow Much Is The Billing Fee: " + document.querySelector('input[name="billingFee"]:checked').value
    + "\n\nAre They Aware Of The Fee: " + document.querySelector('input[name="billingApprove"]:checked').value
    + "\n\nCustomer approved charge to be paid \nwith payment method on file: " + document.querySelector('input[name="billingFile"]:checked').value
    + "\n\nCharge Payment Immediately: " + document.querySelector('input[name="billingImmediate"]:checked').value
    + scBillingNotes;

    billingSubject = billingQueueResultSubject + " | " + billingAccount + " | " + billingSCDate;

    document.getElementById('billingSubject').value = billingSubject;
    document.getElementById('billingTicket').value = billingBody;
    return false;
}

/* **************************** Outage Ticket Script **************************** */

function outageText() {
    var outageOut = "";
    var outageSubject = "";

    document.getElementById('outageName').style.backgroundColor = "";
    document.getElementById('outageNumber').style.backgroundColor = "";
    document.getElementById('outageAccount').style.backgroundColor = "";
    document.getElementById('outageSMIP').style.backgroundColor = "";
    document.getElementById('outageAPIP').style.backgroundColor = "";
    document.getElementById('outageAPSSID').style.backgroundColor = "";
    document.getElementById('outageTicketNumber').style.backgroundColor = "";
    document.getElementById("outageError").innerHTML = " ";

    // Outage Ticket Body
    outageTicket = "###OUTAGE TICKET###";
    outageName = document.getElementById('outageName').value;
      if (outageName == ""){document.getElementById('outageName').style.backgroundColor = "#FF5733";} else {outageName = "\nWho is calling: " + outageName;}
    outageNumber = document.getElementById('outageNumber').value;
      if (outageNumber == ""){document.getElementById('outageNumber').style.backgroundColor = "#FF5733";} else {outageNumber = "\nContact Number: " + outageNumber;}
    outageAccount = document.getElementById('outageAccount').value;
      if (outageAccount == ""){document.getElementById('outageAccount').style.backgroundColor = "#FF5733";} else {outageAccount = "\nAccount Type: " + outageAccount;}
    outageSMIP = document.getElementById('outageSMIP').value;
      if (outageSMIP == ""){document.getElementById('outageSMIP').style.backgroundColor = "#FF5733";} else {outageSMIP = "\n\nLast Known SM IP: " + outageSMIP;}
    outageAPIP = document.getElementById('outageAPIP').value;
      if (outageAPIP == ""){document.getElementById('outageAPIP').style.backgroundColor = "#FF5733";} else {outageAPIP = "\nLast Known Connected AP IP: " + outageAPIP;}
    outageAPSSID = document.getElementById('outageAPSSID').value;
      if (outageAPSSID == ""){document.getElementById('outageAPSSID').style.backgroundColor = "#FF5733";} else {outageAPSSID = "\nLast Known Connected AP SSID: " + outageAPSSID;}
    outageTicketNumber = document.getElementById('outageTicketNumber').value;
      if (outageTicketNumber == ""){document.getElementById('outageTicketNumber').style.backgroundColor = "#FF5733";} else {outageTicketNumber = "\n\nOutage Ticket Number: " + outageTicketNumber;}
    outageCallBack = document.querySelector('input[name="callbackCX"]:checked').value;
      if (outageTicketNumber == ""){outageCallBack = "";} else {outageCallBack = "\n\nDid they request a callback: " + outageCallBack;}


    // Outage Subject Line
    outageAPSSIDSubject = document.getElementById('outageAPSSID').value;
      if (outageAPSSIDSubject == ""){outageAPSSIDSubject = "";} else {outageAPSSIDSubject = outageAPSSIDSubject;}
    outageAccountSubject = document.getElementById('outageAccount').value;
      if (outageAccountSubject == ""){outageAccountSubject = "";} else {outageAccountSubject = " | " + outageAccountSubject;}
    outageNote = " | Outage"
      if (outageAccountSubject == "" || outageAccountSubject == ""){outageNote = "";} else {outageNote = outageNote;}
    // outageDateSubject = document.getElementById('outageDate').value;
    //   if (outageDateSubject == ""){outageDateSubject = "";} else {outageDateSubject = " | " + outageDateSubject;}

      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth()+1;
      var yyyy = today.getFullYear().toString().substr(2,2);
      today = mm+'-'+dd+'-'+yyyy;
        if (etAPIP ==""){today = "";}
      outageDate = "";
        if (outageName == "" || outageNumber == "" || outageAccount == "" || outageSMIP == "" || outageAPIP == "" || outageAPSSID == "" || outageTicketNumber == ""){outageDate = "";} else {outageDate = "\nOutage Date: " + today;}
      outageDateSubject = " | " + today;

    // Red Empty Inputs
    outage50 = "*** Not All Inputs Have Been Filled ***";
      if (outageName == "" || outageNumber == "" || outageAccount == "" || outageSMIP == "" || outageAPIP == "" || outageAPSSID == "" || outageTicketNumber == ""){document.getElementById("outageError").innerHTML = outage50;} else {outage50 = "";
}

    outageOut = outageTicket + outageName + outageNumber + outageAccount + outageDate + outageSMIP + outageAPIP + outageAPSSID + outageTicketNumber + outageCallBack;
    outageSubject = outageAPSSIDSubject + outageAccountSubject + outageNote + outageDateSubject;

    document.getElementById('outagesubjectOutput').value = outageSubject;
    document.getElementById('outageticketOutput').value = outageOut;
    return false;
}

/* **************************** Credit Request Script **************************** */

function crTicket() {
  var crBodyOut = "";
  var crSubjectOut = "";

  // Clear Red Input Colors
  document.getElementById('crName').style.backgroundColor = "";
  document.getElementById('crNumber').style.backgroundColor = "";
  document.getElementById('crReason').style.backgroundColor = "";
  document.getElementById('crReportedDate').style.backgroundColor = "";
  document.getElementById("crError").innerHTML = " ";

  // Credit Request Body
  var crName = document.getElementById('crName').value;
    if (crName == ""){document.getElementById('crName').style.backgroundColor = "#FF5733";} else { crName = "Who's Calling: " + crName;}
  var cr2 = document.getElementById('crNumber').value;
    if (cr2 == ""){document.getElementById('crNumber').style.backgroundColor = "#FF5733";} else { cr2 = "\n\nBest Callback Number: " + document.getElementById('crNumber').value;}
  var crReason = document.getElementById('crReason').value;
    if (crReason == ""){document.getElementById('crReason').style.backgroundColor = "#FF5733";} else { crReason = "\n\nReason for credit request: " + document.getElementById('crReason').value;}
  var cr4 = document.getElementById('crAmount').value;
    if (cr4 == ""){cr4 = "";} else { cr4 = "\n\nAmount of days requested: " + document.getElementById('crAmount').value + " " + "days";}

  // Credit Request Date Picker
  var cr5 = document.getElementById('crReportedDate').value;
  if (cr5 == ""){document.getElementById('crReportedDate').style.backgroundColor = "#FF5733";} else { cr5 = "\n\nReported issue date: " + document.getElementById('crReportedDate').value;}
  var cr6 = document.getElementById('crResolvedDate').value;
  if (cr6 == ""){cr6 = "\n\nDate Resolved: Not Resolved";} else {cr6 = "\n\nDate Resolved: "+ document.getElementById('crResolvedDate').value;}
  if (cr5 == ""){cr6 = "";}

  var cr9 = document.getElementById('crbillAmount').value;
      crDays = document.getElementById('crAmount').value;
      crDivided = cr9 / 30;
      crMultiplied = crDivided * crDays;
      crTotal = crMultiplied.toFixed(2);
      if (crTotal == "0.00"){crTotal = "\n\nPending Resolved Date - Bill Total: $"+ cr9} else { crTotal = "\n\nCredit Request Total: $"+ crTotal;}
      if (cr9 == ""){crTotal = "";}
      if (crTotal == "NaN"){alert("Total Month Bill does not require a $");}

  var cr11 = document.getElementById('crextraNotes').value;
  if (cr11 == ""){cr11 = "";} else { cr11 = "\n\nExtra Notes: "+ document.getElementById('crextraNotes').value;}

  // Credit Request Subject
  var cr7 = document.getElementById('crReason').value;
  if (cr7 == ""){cr7 = ""} else { cr7 = " | "+ document.getElementById('crReason').value;}
  var cr8 = "";
  if (crName == ""){cr8 = "";} else {cr8 = "Credit Request";}
  var cr10 = document.getElementById('crResolvedDate').value;
  if (cr10 == ""){cr10 = " | Not Resolved";} else {cr10 = "";}
  if (cr5 == ""){cr10 = "";}

  // Red Empty Inputs
  var cr50 = "*** Not All Inputs Have Been Filled ***";
    if (crName == "" || cr2 == "" || cr5 == ""){document.getElementById("crError").innerHTML = cr50;} else {cr50 = ""}

  crSubjectOut = cr8 + cr7 + cr10;
  crBodyOut = crName + cr2 + crReason + cr4 + cr5 + cr6 + crTotal + cr11;

  document.getElementById('crTicketSubject').value = crSubjectOut;
  document.getElementById('crTicketBody').value = crBodyOut;
  return false;
}

/* **************************** VoIP Ticket Script **************************** */

function voipText() {
    var voipOut = "";
    var voipSubject = "";

    document.getElementById('voipName').style.backgroundColor = "";
    document.getElementById('voipNumber').style.backgroundColor = "";
    document.getElementById('voipLine').style.backgroundColor = "";
    document.getElementById('voipAccount').style.backgroundColor = "";
    document.getElementById('voipSMIP').style.backgroundColor = "";
    document.getElementById('voipAPIP').style.backgroundColor = "";
    document.getElementById('voipAPSSID').style.backgroundColor = "";
    document.getElementById('voipTRIP').style.backgroundColor = "";
    document.getElementById('voipRouterType').style.backgroundColor = "";
    document.getElementById('voipIssueType').style.backgroundColor = "";
    document.getElementById('voipProblem').style.backgroundColor = "";
    document.getElementById('voipTimeframe').style.backgroundColor = "";
    document.getElementById('voipNextStep').style.backgroundColor = "";
    document.getElementById("voipError").innerHTML = " ";

    // VoIP Ticket Body
    voipNote = "###VoIP TROUBLESHOOTING###";
    voipName = document.getElementById('voipName').value;
      if (voipName == ""){document.getElementById('voipName').style.backgroundColor = "#FF5733";} else {voipName = "\nWho is calling: " + voipName;}
    voipNumber = document.getElementById('voipNumber').value;
      if (voipNumber == ""){document.getElementById('voipNumber').style.backgroundColor = "#FF5733";} else {voipNumber = "\nContact Number: " + voipNumber;}
    voipLine = document.getElementById('voipLine').value;
      if (voipLine == ""){document.getElementById('voipLine').style.backgroundColor = "#FF5733";} else {voipLine = "\nVoIP Phone Number: " + voipLine;}
    voipAccount = document.getElementById('voipAccount').value;
      if (voipAccount == ""){document.getElementById('voipAccount').style.backgroundColor = "#FF5733";} else {voipAccount = "\nAccount Type: " + voipAccount;}
    voipSMIP = document.getElementById('voipSMIP').value;
      if (voipSMIP == ""){document.getElementById('voipSMIP').style.backgroundColor = "#FF5733";} else {voipSMIP = "\nSM IP: " + voipSMIP;}
    voipAPIP = document.getElementById('voipAPIP').value;
      if (voipAPIP == ""){document.getElementById('voipAPIP').style.backgroundColor = "#FF5733";} else {voipAPIP = "\nAP IP: " + voipAPIP;}
    voipAPSSID = document.getElementById('voipAPSSID').value;
      if (voipAPSSID == ""){document.getElementById('voipAPSSID').style.backgroundColor = "#FF5733";} else {voipAPSSID = "\nAP SSID: " + voipAPSSID;}
    voipTRIP = document.getElementById('voipTRIP').value;
      if (voipTRIP == ""){document.getElementById('voipTRIP').style.backgroundColor = "#FF5733";} else {voipTRIP = "\nTR IP: " + voipTRIP;}
    voipRouterType = document.getElementById('voipRouterType').value;
      if (voipRouterType == ""){document.getElementById('voipRouterType').style.backgroundColor = "#FF5733";} else {voipRouterType = "\nRouter Type: " + voipRouterType;}
    voipIssueType = document.getElementById('voipIssueType').value;
      if (voipIssueType == ""){document.getElementById('voipIssueType').style.backgroundColor = "#FF5733";} else {voipIssueType = "\nIssue is affecting: " + voipIssueType;}
    voipIssue = document.getElementById('voipProblem').value;
      if (voipIssue == ""){document.getElementById('voipProblem').style.backgroundColor = "#FF5733";} else {voipIssue = "\n\nWhat issue is the phone having: " + voipIssue;}
    voipTimeframe = document.getElementById('voipTimeframe').value;
      if (voipTimeframe == ""){document.getElementById('voipTimeframe').style.backgroundColor = "#FF5733";} else {voipTimeframe = "\n\nHow long has it been going on: " + voipTimeframe;
}

    // VoIP Troubleshooting Steps
    voipTSSteps = "\n\nTroubleshooting completed:"
    + (document.getElementById('vtsPOE').checked ? "\n- Power-cycled POE" : "")
    + (document.getElementById('vtsRouter').checked ? "\n- Power-cycled Router" : "")
    + (document.getElementById('vtsAuthenticated').checked ? "\n- Power-cycled ATA" : "")
    + (document.getElementById('vtsCabling').checked ? "\n- Verified cabling" : "")
    + (document.getElementById('vtsPOELight').checked ? "\n- Verified ATA light was on" : "")
    + (document.getElementById('vtsReseated').checked ? "\n- Confirmed ringer volume was up" : "")
    + (document.getElementById('vtsDND').checked ? "\n- Confirmed DND (Do Not Disturb) not active" : "")
    + (document.getElementById('vtsInternet').checked ? "\n- Confirmed Internet Is Working" : "")
    + (document.getElementById('vtsNots').checked ? "\n- No troubleshooting needed" : "");

    voipSMPing = document.getElementById('voipSMPing').value;
      if (voipSMPing == ""){voipSMPing = "";} else {voipSMPing = "\n\nSM Ping: " + voipSMPing;}
    voipSMPingTS = document.getElementById('voipSMPing').value;
      if (voipSMPing == ""){voipSMPingTS = "";} else {voipSMPingTS = "\n- VoIP pings were run and documented below";}
    voipNextStep = document.getElementById('voipNextStep').value;
      if (voipNextStep == ""){document.getElementById('voipNextStep').style.backgroundColor = "#FF5733";} else {voipNextStep = "\n\nNext Step: " + voipNextStep;}

    // VoIP Subject Line
    voipAPSSIDSubject = document.getElementById('voipAPSSID').value;
      if (voipAPSSIDSubject == ""){voipAPSSIDSubject = "";} else {voipAPSSIDSubject = voipAPSSIDSubject;}
    voipAccountSubject = document.getElementById('voipAccount').value;
      if (voipAccountSubject == ""){voipAccountSubject = "";} else {voipAccountSubject = " | " + voipAccountSubject;}
    voipIssueTypeSubject = document.getElementById('voipIssueType').value;
      if (voipIssueTypeSubject == ""){voipIssueTypeSubject = "";} else {voipIssueTypeSubject = " | Issue Affecting: " + voipIssueTypeSubject;}

    // Red Empty Inputs
    voip50 = "*** Not All Inputs Have Been Filled ***";
      if (voipName == "" || voipNumber == "" || voipLine == "" || voipAccount == "" || voipSMIP == "" || voipAPIP == "" || voipAPSSID == "" || voipTRIP == "" || voipRouterType  == "" || voipIssue  == "" || voipTimeframe  == "" || voipNextStep == ""){document.getElementById("voipError").innerHTML = voip50;} else {voip50 = "";
}

    voipOut = voipNote + voipName + voipNumber + voipLine + voipAccount + voipSMIP + voipAPIP + voipAPSSID + voipTRIP + voipRouterType + voipIssueType + voipIssue + voipTimeframe + voipTSSteps + voipSMPingTS + voipSMPing + voipNextStep;
    voipSubject = voipAPSSIDSubject + voipAccountSubject + voipIssueTypeSubject;

    document.getElementById('voipticketSubject').value = voipSubject;
    document.getElementById('voipticketOutput').value = voipOut;
    return false;
}

/* **************************** Sooner Service Ticket Script **************************** */

function soonerServiceFunction(){
  var ssTicketBody = "";
  var ssTicketSubject = "";

  document.getElementById('ssName').style.backgroundColor = "";
  document.getElementById('ssNumber').style.backgroundColor = "";
  document.getElementById('ssAccount').style.backgroundColor = "";
  document.getElementById('ssZone').style.backgroundColor = "";
  document.getElementById('ssQueueResult').style.backgroundColor = "";
  document.getElementById('ssServiceDate').style.backgroundColor = "";
  document.getElementById('ssApprovalNotes').style.backgroundColor = "";
  document.getElementById("ssError").innerHTML = " ";

  ssName = document.getElementById('ssName').value; if (ssName == ""){document.getElementById('ssName').style.backgroundColor = "#FF5733";} else {ssName = "Name: " + ssName;}
  ssNumber = document.getElementById('ssNumber').value; if (ssNumber == ""){document.getElementById('ssNumber').style.backgroundColor = "#FF5733";} else {ssNumber = "\nContact Number: " + ssNumber;}
  ssAccount = document.getElementById('ssAccount').value; if (ssAccount == ""){document.getElementById('ssAccount').style.backgroundColor = "#FF5733";} else {ssAccount = "\nAccount Type: " + ssAccount;}
  ssZone = document.getElementById('ssZone').value; if (ssZone == ""){document.getElementById('ssZone').style.backgroundColor = "#FF5733";} else {ssZone = "\nZONE: " + ssZone;}
  ssQueueResult = document.getElementById('ssQueueResult').value; if (ssQueueResult == ""){document.getElementById('ssQueueResult').style.backgroundColor = "#FF5733";} else {ssQueueResult = "\nCustomer Issue: " + ssQueueResult;}
  ssServiceDate = document.getElementById('ssServiceDate').value; if (ssServiceDate == ""){document.getElementById('ssServiceDate').style.backgroundColor = "#FF5733";} else {ssServiceDate = "\nScheduled Date: " + ssServiceDate;}
  ssApprovalNotes = document.getElementById('ssApprovalNotes').value; if (ssApprovalNotes == ""){document.getElementById('ssApprovalNotes').style.backgroundColor = "#FF5733";} else {ssApprovalNotes = "\n\nApproval Notes: " + ssApprovalNotes;}
  ssNotes = document.getElementById('ssNotes').value; if (ssNotes == ""){ssNotes = "";} else {ssNotes = "\n\nSooner Service Notes: " + ssNotes;}

  ssWillCall = document.querySelector('input[name="ssWillCall"]:checked').value;
    if (ssWillCall == "Yes"){ssWillCall = "\n\nDid you offer to add them to the Will-Call-List: " + ssWillCall;}
    if (ssWillCall == "No"){ssWillCall = "\n\n*** You need to offer will-call-list first. ***";}
  ssCredit = document.querySelector('input[name="ssCredit"]:checked').value;
    if (ssCredit == "Yes"){ssCredit = "\n\nDid you offer a credit: " + ssCredit;}
    if (ssCredit == "No"){ssCredit = "\n\n*** You need to offer a credit first. ***";}

  // Subject Line
  ssZoneSubject = document.getElementById('ssZone').value; if (ssZoneSubject == ""){ssZoneSubject = "";} else {ssZoneSubject = ssZoneSubject;}
  ssQueueResultSubject = document.getElementById('ssQueueResult').value; if (ssQueueResultSubject == ""){ssQueueResult = "";} else {ssQueueResultSubject = " | " + ssQueueResultSubject;}
  ssServiceDateSubject = document.getElementById('ssServiceDate').value; if (ssServiceDateSubject == ""){ssServiceDateSubject = "";} else {ssServiceDateSubject = " | Schd: " + ssServiceDateSubject;}

  // Red Empty Inputs
  ss50 = "*** Not All Inputs Have Been Filled ***"; if (ssName == "" || ssNumber == "" || ssAccount == "" || ssZone == "" || ssQueueResult == "" || ssServiceDate == "" || ssApprovalNotes == ""){document.getElementById("ssError").innerHTML = ss50;} else {ss50 = "";
}
    ssTicketSubject = ssZoneSubject + ssQueueResultSubject + ssServiceDateSubject;
    ssTicketBody = ssName + ssNumber + ssAccount + ssQueueResult + ssZone + ssServiceDate + ssWillCall + ssCredit + ssApprovalNotes + ssNotes;

    if (ssApprovalNotes == ""){ssTicketSubject = "";}
    if (ssApprovalNotes == ""){ssTicketBody = "";}

    document.getElementById('ssTicketSubject').value = ssTicketSubject;
    document.getElementById('ssTicketBody').value = ssTicketBody;
    return false;
}

/* **************************** Tower Host Ticket Script **************************** */


function towerHostFunction() {
  var towerHostBody = "";
  var towerHostSubject = "";

  thNote = "###TOWER HOST TICKET###";
  thName = document.getElementById('thName').value;
    if (thName == ""){thName = "";} else {thName = "\nWho is calling: " + thName;}
  thNumber = document.getElementById('thNumber').value;
    if (thNumber == ""){thNumber = "";} else {thNumber = "\nContact Number: " + thNumber;}
  thIssue = document.getElementById('thIssue').value;
    if (thIssue == ""){thIssue = "";} else {thIssue = "\nIssue: " + thIssue;}
  thExtra = document.getElementById('thExtra').value;
    if (thExtra == ""){thExtra = "";} else {thExtra = "\nExtra Notes: " + thExtra;}

  towerHostBody = thNote + thName + thNumber + thIssue + thExtra;

  towerHostSubject = "Tower Host | " + document.getElementById('thIssue').value;

  document.getElementById('thSubject').value = towerHostSubject;
  document.getElementById('thTicket').value = towerHostBody;
  return false;
}

/* **************************** Static IP Request Script **************************** */

function staticIPFunction() {
  var staticBody = "";

  // Clear Red Input Colors
  document.getElementById('sirTWR').style.backgroundColor = "";
  document.getElementById('sirTWRIP').style.backgroundColor = "";
  document.getElementById('sirRouterType').style.backgroundColor = "";
  document.getElementById('sirRTRIP').style.backgroundColor = "";
  document.getElementById('sirFee').style.backgroundColor = "";
  document.getElementById('sirIPS').style.backgroundColor = "";
  document.getElementById('sirJustification').style.backgroundColor = "";
  document.getElementById('sirReason').style.backgroundColor = "";
  document.getElementById('sirNumber').style.backgroundColor = "";

  staticNote = "###STATIC IP REQUEST###";
  staticTower = document.getElementById('sirTWR').value;
    if (staticTower == ""){document.getElementById('sirTWR').style.backgroundColor = "#FF5733";} else {staticTower = "\nTower Name: " + staticTower;}
  staticTowerIP = document.getElementById('sirTWRIP').value;
    if (staticTowerIP == ""){document.getElementById('sirTWRIP').style.backgroundColor = "#FF5733";} else {staticTowerIP = "\nTower IP: " + staticTowerIP;}
  staticRouterType = document.getElementById('sirRouterType').value;
    if (staticRouterType == ""){document.getElementById('sirRouterType').style.backgroundColor = "#FF5733";} else {staticRouterType = "\nRouter Type: " + staticRouterType;}
  staticRouterIP = document.getElementById('sirRTRIP').value;
    if (staticRouterIP == ""){document.getElementById('sirRTRIP').style.backgroundColor = "#FF5733";} else {staticRouterIP = "\nRouter IP Address: " + staticRouterIP;}
  staticFee = document.querySelector('input[name="sirFee"]:checked').value;
    if (staticFee == ""){document.getElementById('sirFee').style.backgroundColor = "#FF5733";} else {staticFee = "\nAware of $10.00 Fee: " + staticFee;}
  staticIPs = document.getElementById('sirIPS').value;
    if (staticIPs == ""){document.getElementById('sirIPS').style.backgroundColor = "#FF5733";} else {staticIPs = "\nHow many IPs: " + staticIPs;}
  staticJustification = document.querySelector('input[name="sirJustification"]:checked').value;
    if (staticJustification == ""){document.getElementById('sirJustification').style.backgroundColor = "#FF5733";} else {staticJustification = "\nJustification form sent: " + staticJustification;}
  staticReason = document.getElementById('sirReason').value;
    if (staticReason == ""){document.getElementById('sirReason').style.backgroundColor = "#FF5733";} else {staticReason = "\nReason for needing IP: " + staticReason;}
  staticNumber = document.getElementById('sirNumber').value;
    if (staticNumber == ""){document.getElementById('sirNumber').style.backgroundColor = "#FF5733";} else {staticNumber = "\nBest Callback Number: " + staticNumber;}

  staticBody = staticNote + staticTower + staticTowerIP + staticRouterType + staticRouterIP + staticFee + staticIPs + staticJustification + staticReason + staticNumber;

  document.getElementById('sirTicketBody').value = staticBody;
  return false;
}

/* **************************** Port Forwarding Request Script **************************** */

function pfFunction(){
  var pfTicketBody = "";
  var pfTicketSubject = "";

  document.getElementById('pfName').style.backgroundColor = "";
  document.getElementById('pfNumber').style.backgroundColor = "";
  document.getElementById('pfRouter').style.backgroundColor = "";
  document.getElementById('pfRouterIP').style.backgroundColor = "";
  document.getElementById('pfTCP').style.backgroundColor = "";
  document.getElementById('pfUDP').style.backgroundColor = "";
  document.getElementById('pfIP').style.backgroundColor = "";
  document.getElementById('pfReason').style.backgroundColor = "";

  // Ticket Body
  pfNote = "###Port Forwarding Request###";
  pfName = document.getElementById('pfName').value;
    if (pfName == ""){document.getElementById('pfName').style.backgroundColor = "#FF5733";} else {pfName = "\nAuthorized user making request: " + pfName;}
  pfNumber = document.getElementById('pfNumber').value;
    if (pfNumber == ""){document.getElementById('pfNumber').style.backgroundColor = "#FF5733";} else {pfNumber = "\nBest callback number: " + pfNumber;}
  pfRouter = document.getElementById('pfRouter').value;
    if (pfRouter == ""){document.getElementById('pfRouter').style.backgroundColor = "#FF5733";} else {pfRouter = "\nRouter: " + pfRouter;}
  pfRouterIP = document.getElementById('pfRouterIP').value;
    if (pfRouterIP == ""){document.getElementById('pfRouterIP').style.backgroundColor = "#FF5733";} else {pfRouterIP = "\nRouter IP Address: " + pfRouterIP;}
  pfTCP = document.getElementById('pfTCP').value;
    if (pfTCP == ""){document.getElementById('pfTCP').style.backgroundColor = "#FF5733";} else {pfTCP = "\n\nTCP Port Numbers: " + pfTCP;}
  pfUDP = document.getElementById('pfUDP').value;
    if (pfUDP == ""){document.getElementById('pfUDP').style.backgroundColor = "#FF5733";} else {pfUDP = "\n\nUDP Port Numbers: " + pfUDP;}
  pfIP = document.getElementById('pfIP').value;
    if (pfIP == ""){document.getElementById('pfIP').style.backgroundColor = "#FF5733";} else {pfIP = "\n\nInternal IP of device: " + pfIP;}
  pfReason = document.getElementById('pfReason').value;
    if (pfReason == ""){document.getElementById('pfReason').style.backgroundColor = "#FF5733";} else {pfReason = "\n\nReason for needing it: " + pfReason;}

  // Subject line
  pfNoteSubject = "Port Forwarding Request | ";
  pfRouterSubject = document.getElementById('pfRouter').value;

  pfTicketSubject = pfNoteSubject + pfRouterSubject;
  pfTicketBody = pfNote + pfName + pfNumber + pfRouter + pfRouterIP + pfTCP + pfUDP + pfIP + pfReason;

  document.getElementById('pfTicketSubject').value = pfTicketSubject;
  document.getElementById('pfTicketBody').value = pfTicketBody;
}

/* **************************** Router Shipment Script **************************** */

function routerShipmentFunction() {
  var routerShipmentBody = "";
  var routerShipmentSubject = "";

  rsNote = "###ROUTER SHIPMENT###";
  rsAddress = document.getElementById('rsAddress').value;
    if (rsAddress == ""){rsAddress = "";} else {rsAddress = "\nBest shipping address: " + rsAddress;}
  rsSQFT = document.getElementById('rsSQFT').value;
    if (rsSQFT == ""){rsSQFT = "";} else {rsSQFT = "\nSQFT Area: " + rsSQFT;}
  rsReason = document.getElementById('rsReason').value;
    if (rsReason == ""){rsReason = "";} else {rsReason = "\nReason for request: " + rsReason;}

  // rsCalix = document.getElementById('rsCalix').value;
  //   if (rsCalix == "0"){ rsCalix = ""; } else { rsCalix = "\n\n# of Calix GigaCenter 844E: "+ rsCalix;}
  
  rsZyxel = document.getElementById('rsZyxel').value;
     if (rsZyxel == "0"){ rsZyxel = ""; } else { rsZyxel = "\n\n# of Zyxel Routers: "+ rsZyxel;}
  rsZyxelMesh = document.getElementById('rsZyxelMesh').value;
     if (rsZyxelMesh == "0"){rsZyxelMesh = ""; } else {rsZyxelMesh = "\n# of Zyxel Mesh: " + rsZyxelMesh;}
  rsMesh = document.getElementById('rsMesh').value;
     if (rsMesh == "0"){ rsMesh = ""; } else { rsMesh = "\n# of Calix 804Mesh: " + rsMesh;}
  rsMikroTik = document.getElementById('rsMikroTik').value;
    if (rsMikroTik == "0"){ rsMikroTik = ""; } else { rsMikroTik = "\n# of MikroTik RB2011: " + rsMikroTik;}
  rsUPS = document.getElementById('rsUPS').value;
    if (rsUPS == "0"){ rsUPS = ""; } else { rsUPS = "\n# of UPS Rental: " + rsUPS;}
  

  // rsSPA112 = document.getElementById('rsSPA112').value;
  //   if (rsSPA112 == "0"){ rsSPA112 = ""; } else { rsSPA112 = "\n# of Cisco SPA112: " + rsSPA112;}
  // rsSPA122 = document.getElementById('rsSPA122').value;
  //   if (rsSPA122 == "0"){ rsSPA122 = ""; } else { rsSPA122 = "\n# of Cisco SPA122: " + rsSPA122;}

  rsDeclineMesh = document.querySelector('input[name="rsDeclineMesh"]:checked').value;
    if (rsDeclineMesh == ""){rsDeclineMesh = "";} else {rsDeclineMesh = "\n\nCustomer declined mesh units (Over 2000 Sq Ft): " + rsDeclineMesh;}
  rsVoIP = document.querySelector('input[name="rsVoIP"]:checked').value;
    if (rsVoIP == ""){rsVoIP = "";} else {rsVoIP = "\n\nDoes the customer have VoIP service: " + rsVoIP;}
  rsCxCall = document.querySelector('input[name="rsCxCall"]:checked').value;
    if (rsCxCall == ""){rsCxCall = "";} else {rsCxCall = "\n\nIs the customer aware to call us upon receipt for static IP input or port forwarding: " + rsCxCall;}
  rsTerms = document.querySelector('input[name="rsTerms"]:checked').value;
    if (rsTerms == ""){rsTerms = "";} else {rsTerms = "\n\nAll managed router terms and shipping details discussed with customer: " + rsTerms;}

  // Router Shipment Subject Line
  rsNoteSubject = "Ship | Customer New Equipment";
    
  //  if (rsZyxel == "0" && rsMikroTik != "0"){rsNoteSubject = "";} else {rsNoteSubject = rsNoteSubject;}
  // rsCalixSubject = document.getElementById('rsCalix').value;
  //   if (rsCalixSubject == "0"){rsCalixSubject = "";} else {rsCalixSubject = rsCalixSubject + " Calix GigaCenter 844E";}
  // rsZyxelSubject = document.getElementById('rsZyxel').value;
  //   if (rsZyxelSubject == "0"){rsZyxelSubject = "";} else {rsZyxelSubject = rsZyxelSubject + " Zyxel Router(s)";}
  // rsMikroTikSubject = document.getElementById('rsMikroTik').value;
  // rsMikroTikSubject = document.getElementById('rsMikroTik').value;
  //   if (rsMikroTikSubject == "0"){rsMikroTikSubject = "";} else {rsMikroTikSubject = rsMikroTikSubject + " MikroTik RB2011";}
  // rsUPSSubject = document.getElementById('rsUPS').value;
  //   if (rsUPSSubject == "0"){rsUPSSubject = "";} else {rsUPSSubject = " + " + rsUPSSubject + " UPS Rental";}
  // rsMeshSubject = document.getElementById('rsMesh').value;
  //   if (rsMeshSubject == "0"){rsMeshSubject = "";} else {rsMeshSubject = " + " + rsMeshSubject + " Mesh Units";}
  // rsZyxelMeshSubject = document.getElementById('rsZyxelMesh').value;
  //   if (rsZyxelMeshSubject == "0"){rsZyxelMeshSubject = "";} else {rsZyxelMeshSubject = " + " + rsZyxelMeshSubject + " Zyxel Mesh Units";}

  routerShipmentBody = rsNote + rsAddress + rsSQFT + rsReason + rsZyxel + rsZyxelMesh + rsMesh + rsUPS + rsMikroTik + rsDeclineMesh + rsVoIP + rsCxCall + rsTerms;
  routerShipmentSubject = rsNoteSubject;

    //if (rsZyxel || rsZyxelMesh || rsMesh || rsMikroTik || rsUPS == ""){routerShipmentBody = "";} else {routerShipmentBody = routerShipmentBody;}
    //if (rsZyxel || rsZyxelMesh || rsMesh || rsMikroTik || rsUPS == ""){routerShipmentSubject = "";}

  document.getElementById('rsTicketSubject').value = routerShipmentSubject;
  document.getElementById('rsTicketBody').value = routerShipmentBody;
  return false;
}

/* **************************** Supervisor Request Ticket Script **************************** */


function supRequest() {
  var supBody = "";
  var supSubject = "";

  // Clear Red Input Colors
  document.getElementById('supName').style.backgroundColor = "";
  document.getElementById('supNumber').style.backgroundColor = "";
  document.getElementById('supAccount').style.backgroundColor = "";
  document.getElementById('supIssue').style.backgroundColor = "";
  document.getElementById('supNotes').style.backgroundColor = "";

  // Main Ticket Body
  supNote = "###SUPERVISOR REQUEST###";
  supName = document.getElementById('supName').value;
    if (supName == ""){document.getElementById('supName').style.backgroundColor = "#FF5733";} else {supName = "\nWho is calling: " + supName;}
  supNumber = document.getElementById('supNumber').value;
    if (supNumber == ""){document.getElementById('supNumber').style.backgroundColor = "#FF5733";} else {supNumber = "\nContact Number: " + supNumber;}
  supAccount = document.getElementById('supAccount').value;
    if (supAccount == ""){document.getElementById('supAccount').style.backgroundColor = "#FF5733";} else {supAccount = "\nAccount Type: " + supAccount;}
  supIssue = document.getElementById('supIssue').value;
    if (supIssue == ""){document.getElementById('supIssue').style.backgroundColor = "#FF5733";} else {supIssue = "\nIssue: " + supIssue;}
  supNotes = document.getElementById('supNotes').value;
    if (supNotes == ""){document.getElementById('supNotes').style.backgroundColor = "#FF5733";} else {supNotes = "\n\nSummary: " + supNotes;}

  // Subject Line Notes
  supSubjectLine = "Supervisor Request | ";
  supAccountSubject = document.getElementById('supAccount').value;
    if (supAccountSubject == ""){document.getElementById('supAccount').style.backgroundColor = "#FF5733";} else {supAccountSubject = supAccountSubject + " | ";}

  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1;
  var yyyy = today.getFullYear().toString().substr(2,2);
  today = " | " + mm+'-'+dd+'-'+yyyy;
    if (etAPIP == ""){today = "";}

  // Empty Notes
    if (supIssue == ""){supNote = "###NOTES###";}
    if (supName == "" && supNumber == "" && supIssue == "" && supNotes == ""){supNote = "";}
    if (supAccount == "" || supIssue == ""){supSubjectLine = ""; today = "";}

  supBody = supNote + supName + supNumber + supAccount + supIssue + supNotes;
  supSubject = supSubjectLine + supAccountSubject + document.getElementById('supIssue').value + today;


  document.getElementById('supSubject').value = supSubject;
  document.getElementById('supTicket').value = supBody;
  return false;
}


/* --------------------------------------Date Picker Script---------------------------------------------- */

$( function() {


  $( "#datepicker" ).datepicker({
  
  
  altField: "#alternate",
  
  
  altFormat: "DD, d MM, yy"
  
  
  });
  
  
  } );
