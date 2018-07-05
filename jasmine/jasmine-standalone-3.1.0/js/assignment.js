
      var list = [];
      var input="";
      function saveval(inp)
      {
     input=inp;
      }
      function openFile(event) {
        var input = event.target;
 
        var reader = new FileReader();
        reader.onload = function(){
        var text = reader.result;
        text = text.split("\n");
        
          for (var line = 0; line < text.length; line++) {
                list.push(text[line]);
              }
         
        list.sort(function(a, b) {
          return a.length - b.length || // sort by length, if equal then
          a.localeCompare(b);    // sort by dictionary order
       });
         // var node = document.getElementById('output').innerText=list;
          alert('done')
        };
        reader.readAsText(input.files[0]);
      };

     function search()
      {

     if(input=="")
     {
      alert( "please fill input field");
      return;
     }
      var check;
      var flag= false;
      var counter=0;
      var result=[];

      for ( var i=0;  list[i].length<=input.length;i++ )
      {
          if(list[i].length==input.length)
          {
            check=list[i];
            for( var j=0; j<input.length;j++)
            {
              for (var k=0;k<list[i].length;k++)
              {
                if(list[i][k]==input[j]&&check[j]!='y')
                {

                  counter++;
                  check=check.split('');
                  check[j]='y';
                  check=check.join("");
                }

              }

            }

            if(counter== input.length)
            {
              result.push(list[i]);

            }
             counter=0;
          }
      }
      if(result.length>2&&result[0].length>1)
      {
       result.sort(function(a, b) {
          return a[1].localeCompare(b[1]);    // sort by dictionary order
       });

     }
      document.getElementById('output').innerText=result;
      
      }

         describe("DOM TESTS:***************", function() { 
  describe("Button Click Event Tests", function() {
    var spyEvent;
       
   beforeEach(function() {
     saveval("sav");
    });
       
    it ("should invoke the btnShowMessage click event.", function() {
      spyEvent = spyOnEvent('#searchbtn', 'click');
      $('#searchbtn').trigger( "click" );
           
      expect('click').toHaveBeenTriggeredOn('#searchbtn');
      expect(spyEvent).toHaveBeenTriggered();
    });
       
  
  });
});

   

