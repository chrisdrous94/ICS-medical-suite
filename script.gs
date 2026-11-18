function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("Logs") || ss.getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    var timestamp = new Date();
    
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Timestamp", "Time", "Name", "Grade", "Type", "Area", "Body Part", "Description", "Action", "Parent Contact", "Notes", "Follow Up", "Concussion Checks"]);
    }
    
    for (var i = 0; i < data.students.length; i++) {
      var s = data.students[i];
      sheet.appendRow([
        timestamp, data.incidentTime, s.name, s.grade,
        data.incidentType, data.schoolLocation, data.location, data.description,
        data.actionTaken, data.parentContacted, data.additionalNotes,
        data.followUp ? "Yes" : "No", data.concussionDetails || "N/A"
      ]);
    }
    return ContentService.createTextOutput(JSON.stringify({ "result": "success" })).setMimeType(ContentService.MimeType.JSON);
  } catch(error) {
    return ContentService.createTextOutput(JSON.stringify({ "result": "error", "error": error.toString() })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    if (e.parameter.action === 'getLogs') {
      var sheet = ss.getSheetByName("Logs") || ss.getActiveSheet();
      var data = sheet.getDataRange().getValues();
      var logs = [];
      for (var i = 1; i < data.length; i++) { 
        if (data[i][0]) {
          logs.push({
            date: data[i][0], time: data[i][1], name: data[i][2], grade: data[i][3],
            type: data[i][4], schoolLocation: data[i][5], location: data[i][6], 
            action: data[i][8], followUp: data[i][11]
          });
        }
      }
      return ContentService.createTextOutput(JSON.stringify(logs)).setMimeType(ContentService.MimeType.JSON);
    } else if (e.parameter.action === 'getProfiles') {
      var profileSheet = ss.getSheetByName("StudentProfiles");
      if (!profileSheet || profileSheet.getLastRow() < 2) {
        return ContentService.createTextOutput("[]").setMimeType(ContentService.MimeType.JSON);
      }
      var profileData = profileSheet.getDataRange().getValues();
      var profiles = [];
      for (var p = 1; p < profileData.length; p++) {
        if (profileData[p][0]) {
          profiles.push({
            name: profileData[p][0],
            grade: profileData[p][1] || "",
            allergies: profileData[p][2] || "",
            medications: profileData[p][3] || "",
            notes: profileData[p][4] || ""
          });
        }
      }
      return ContentService.createTextOutput(JSON.stringify(profiles)).setMimeType(ContentService.MimeType.JSON);
    } else {
      var sheet = ss.getSheetByName("Roster");
      if (!sheet) return ContentService.createTextOutput("[]").setMimeType(ContentService.MimeType.JSON);
      var data = sheet.getDataRange().getValues();
      var roster = [];
      for (var i = 1; i < data.length; i++) {
        if (data[i][0]) roster.push({ name: data[i][0], grade: data[i][1] });
      }
      return ContentService.createTextOutput(JSON.stringify(roster)).setMimeType(ContentService.MimeType.JSON);
    }
  } catch(err) {
    return ContentService.createTextOutput(JSON.stringify({error: err.toString()})).setMimeType(ContentService.MimeType.JSON);
  }
}
