function doGet() {
return HtmlService.createHtmlOutputFromFile("index");
}

function automateCodeReview(form) {
//your Folder ID :- https://drive.google.com/drive/folders/XXXXXXXX
// after "folers/XXXXXX" part Copy the "XXXXXX" part below.
console.log("inside called", "inside");
var folderID = form.folderId;

//your defect ID or Story ID
var folderName= form.storyId;

//File Names
var designFileName = folderName + " : " + "Design Document";
var developerFileName = folderName + " : " + "Developer & Peer Review Checklist";
var peerFileName = folderName + " : " + "Peer Review Issues";
var klockFileName = folderName + " : " + "Static Code review Report";
// Folder names
var driveFolder = DriveApp.getFolderById(folderID);
var parentFolder = driveFolder.createFolder(folderName);

// Copy four files from another location to here
//1.Developer Checklist
//2.Peer Review
//3.Static Code Analysis
//4.Design

// DO NOT CHANGE THIS
var baseFolderID ="XYZ";
var baseDriveFolder = DriveApp.getFolderById(baseFolderID);

//find file first
var templateDesignFile = baseDriveFolder.getFilesByName("<Story ID> : Design Document");
var templateDeveloperFile = baseDriveFolder.getFilesByName("<Story/Defect ID>  : Developer and Peer Review Checklist");
var templatePeerFile = baseDriveFolder.getFilesByName("<Story/Defect ID> : Peer Review Issues");
var templateKlockFile = baseDriveFolder.getFilesByName("<Story/Defect ID> : Static Code Review Report");

// create copy and remove
var designFile=templateDesignFile.next().makeCopy(designFileName);
parentFolder.addFile(designFile);
baseDriveFolder.removeFile(designFile);

var developerFile=templateDeveloperFile.next().makeCopy(developerFileName);
parentFolder.addFile(developerFile);
baseDriveFolder.removeFile(developerFile);

var peerFile=templatePeerFile.next().makeCopy(peerFileName);
parentFolder.addFile(peerFile);
baseDriveFolder.removeFile(peerFile);

var klockFile=templateKlockFile.next().makeCopy(klockFileName);
parentFolder.addFile(klockFile);
baseDriveFolder.removeFile(klockFile);

return "Success.";
}
