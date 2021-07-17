Webcam.set({
    height: 290,
    width: 340,
    img_format: 'png',
    png_quality: 100,
    constraints: {facingMode:'environment'}
});
var LiveWeb = document.getElementById("WebcamArea");

Webcam.attach(LiveWeb);

function CapturedImage(){
    Webcam.snap(function(data_uri){
        document.getElementById("SnapshotArea").innerHTML = "<img id='ZeSnap' src='" +  data_uri + "'>";
    });
    
}

console.log("ML5VERSION", ml5.version);

var Classy = ml5.imageClassifier("MobileNet",ModelLOADED);


function IdentifyMe(){
    var SnapSuc = document.getElementById("ZeSnap");
    Classy.classify(SnapSuc, GotResult);
}

function GotResult(error, results){
    console.log(results);
    if(error){
        console.log(error)
    }
    else{
        document.getElementById("FinalAnswer").innerHTML = results[0].label;
    }

}


















function ModelLOADED(){
    console.log("FakeModel")
}