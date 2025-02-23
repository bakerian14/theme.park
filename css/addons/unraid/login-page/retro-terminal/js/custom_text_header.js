
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>
      ____      __   _____   ______  __  _________________  _______________
     / __ )    / /  /  _/ | / / __ \/ / / / ___/_  __/ __ \/  _/ ____/ ___/
    / __  |_  / /   / //  |/ / / / / / / /\__ \ / / / /_/ // // __/  \__ \ 
   / /_/ / /_/ /  _/ // /|  / /_/ / /_/ /___/ // / / _, _// // /___ ___/ / 
  /_____/\____/  /___/_/ |_/_____/\____//____//_/ /_/ |_/___/_____//____/  
                                                                           </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
