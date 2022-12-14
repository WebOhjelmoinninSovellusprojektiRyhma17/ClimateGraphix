import React from "react";

export default function Footer() {

    //Kun painetaan rekisteröidy niin lähetetään post
    let handleSubmit = async (e) => {
            //Tehdään random muuttuja
            var randomDecimal = Math.random();
            var random = Math.floor(randomDecimal * 1000);
            var randomTag = random * random;


            //Tallennetaan lähetettävät tiedot forms ja random muuttuja
            var checkboxValues = {
              checkbox1: document.getElementById('V1').checked,
              checkbox2: document.getElementById('V3').checked,
              checkbox3: document.getElementById('V5').checked,
              checkbox4: document.getElementById('V7').checked,
              checkbox5: document.getElementById('V8').checked,
              checkbox6: document.getElementById('V9').checked,
              randomtag: randomTag,
            };
          
            // Create an XMLHttpRequest to send the POST request
            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'http://localhost:3001/chart', true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify(checkboxValues));
          
            // Handle the response
            xhr.onreadystatechange = function() {
              if (xhr.readyState === XMLHttpRequest.DONE) {
                console.log('POST request sent successfully');
              }
          }
    };

    return (
        <div class="form-check">
            <form onSubmit={handleSubmit}>

                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="1" name="V1" id="V1" />
                    <label class="form-check-label" for="V1">
                        V1-V2
                    </label>
                </div>

                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="1" name="V3" id="V3" />
                    <label class="form-check-label" for="V3">
                        V3
                    </label>
                </div>

                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="1" name="V5" id="V5" />
                    <label class="form-check-label" for="V5">
                        V5
                    </label>
                </div>

                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="1" name="V7" id="V7" />
                    <label class="form-check-label" for="V7">
                        V7
                    </label>
                </div>

                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="1" name="V8" id="V8" />
                    <label class="form-check-label" for="V8">
                        V8
                    </label>
                </div>

                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="1" name="V9" id="V9" />
                    <label class="form-check-label" for="V9">
                        V9
                    </label>
                </div>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}