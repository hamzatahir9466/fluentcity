
     // these are global variables
      var list = [];
      var usrinput="";
      // this i the function in which user input is gonna save it every time when input changes
      function saveval(inp)
      {
       usrinput=inp;
      }

// this is the function which reads dictionary file and then figure out anagarams. Lets look into
      function openFile(event) {

     // this input variable is getting the path of file
        var input = event.target;
 // this variable is to read the file
        var reader = new FileReader();
        // this is the function is being called from bottom when reader variable is done with text file
        reader.onload = function(){
          // this text variable is getting dictionary data 
          // all the read data is saved in string formatted variable, text.
          // in javascript string is immutable. As data in dictionary is vertically, at the end of every 
          // word there is a new line character \n
        var text = reader.result;
        // i split the string on \n character in that way it would be easy to process
        text = text.split("\n");
        
        // here I am placing all word in javascript array which has built in sort function
          for (var line = 0; line < text.length; line++) {
                list.push(text[line]);
              }
         

// so in thi piece of code  I am trying to sort words based on alphabets and length as that would optimize the processing speed
        list.sort(function(a, b) {
          return a.length - b.length || // sort by length, if equal then
          a.localeCompare(b);    // sort by dictionary order
       });
        // that is the alert showing that we are done with prepocessing.
          alert('done')
        };// here  reader.onload function ends

        // this is the line after which reader.onload is being called. It gets all the data from file.
        reader.readAsText(input.files[0]);
      };

     function search()
      {

//this is the check which shows if there is ni input then user should input before finding anagrams
     if(usrinput=="")
     {
      alert( "please fill input field");
      return;
     }
     // these are some variables which I will explain as we move forward
      var check;
      var flag= false;
      var counter=0;
      var result=[];
      Boolean bool= false

// this loop will run till word at i th index in list is smaller or equal to length of user input. That is where sorting an array list gives benefit
      for ( var i=0;  list[i].length<=usrinput.length;i++ )
      {
        // if the word in list and user input are equal
          if(list[i].length==usrinput.length)
          {
            // this check variable is to make sure no word is repeated twice. So here I am saving a word which is gonna be checked in next step
            check=list[i];
            //this will loop through all characters of user input
            for( var j=0; j<usrinput.length;j++)
            {
              // this will loop through whole word at i th index of list against each character 
              // if it finds a character by making sure character is not matched before, by tracking through check, sets the bool to true 
              // which will terminate loop to avoid looping on till end.
              for (var k=0;k<list[i].length&& bool!=true;k++)
              {
                // this is comapring if characters are same and is not repeated by checking it through check.
                if(list[i][k]==usrinput[j]&&check[j]!='y')
                {

// here counter will be incremented each time it finds same character
                  counter++;
                  // once same characters are there then it is gonna set 'y' at that index in check for that
                  // i have to split it on null '' and then set y at that index then join it back becuase strings are immutable in javascript
                  check=check.split('');
                  check[j]='y';
                  // here is the bool varibale being set to terminate the loop
                  bool= true;
                  check=check.join("");
                }

              }
              //resetting the bool variable for next loop

              bool = false;

            }
// before finalizng a word for result here counter is makeing sure that counter and length of that variable has same 
// numeric value..
            if(counter== usrinput.length)
            {
              result.push(list[i]);

            }
            // resettin counter to zero for next loop
             counter=0;
          }
      }
    // here is the check which compares if the result has more than 1 word and word has more than 1 characters
      if(result.length>1&&result[0].length>1)
      {
        // this is sorting result array based on 2 nd character.
       result.sort(function(a, b) {
          return a[1].localeCompare(b[1]);    // sort by dictionary order
       });

     }
     // here it is placing result list for display 
      document.getElementById('output').innerText=result;
      
      }

       

   

