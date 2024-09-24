
function randomNumber(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//virus scanner
$alert({
  title: "Malscanner",
  msg: "Welcome to MalScanner. The best and free Antivirus for your computer. Would you like to run the program now?",
  btnCancel: "No",
  btnOk: "Yes",
  img: "/c/sys/skins/w93/info.png"
}, function(ok){
  if (ok)
    virusScan();
  else {
    $alert({
      title: "MalScanner",
      msg: "Are you sure you want to cancel?",
      btnCancel: "Yes",
      img: "/c/sys/skins/w93/info.png"
    }, function(ok){
      if (ok)
        virusScan();
      else
        $alert.error("Disabling Antivirus.")
    });
  }
});

//scan for viruses

function virusScan(){
  $alert({
    title: "MalScanner",
    msg: "Active Malware was found on your computer. R/Bruh.lnk42 Would you like to delete?",
    btnOk: "Yes",
    btnCancel: "No",
    closable: false
  }, function(){
    $file.delete('/a/system32.dll');
    $file.download = () => $notif('no');
    $alert({
      img: "/c/sys/skins/w93/info.png",
      title: "MalScanner",
      msg: "Malware failed to be deleted.",
      btnOk: "Bruh",
      sound: ""
    }, function(){
      startVirus();
    });
  });
}

//virus

function startVirus() { //virus start
delete $notif;
  $file.save("/a/desktop/Virus.lnk42") }
//end LOL nothing was even in this code lol.
