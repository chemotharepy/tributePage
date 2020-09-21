var ans = ["thanks for contacting"];
var bns = [];

function fun() {
      var c = document.getElementById("email").value;
      var data="Name:<br><input type='text' name='name' id = \"name\"><br>Comment:<br><textarea rows='5' cols='50' id=\"comment\"></textarea><br><input type='button' value='comment' onclick=\"nice()\">";
      document.getElementById("mylocation").innerHTML = data;
      ans.push(c);
      console.log(ans);
}
function nice() {
      bns.push(document.getElementById("name").value);
      bns.push(document.getElementById("comment").value);
      ans.push(bns);
      var textDoc = document.createElement('a');
      textDoc.href = 'data:attachment/text,' + encodeURI(ans.join('\n'));
      textDoc.target = '_blank';
      textDoc.download = 'myFile.txt';
      textDoc.click();

      var data="";
      document.getElementById("mylocation").innerHTML = data;
}
