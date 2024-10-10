let AllButtons = document.getElementsByClassName('Buttons');
let InputField =  document.getElementById('InputValues')

// Button class -> 1 2 3 4 5 6 8 9 0 - + / * % .
// Values Display in Inout field

for (let i = 0; i < AllButtons.length; i++) {                    //Loop on all buttons having class -> buttons -> gerting Buttons(Pressed) Values -> Adding it as value of input field
    AllButtons[i].onclick = function () {
        InputField.value += AllButtons[i].innerHTML;
    };
};

// ON KEYS PRESSED/KEYBOARD USE
document.onkeyup = function (keypressed) {              //If User ENter data using keyboard
    keypressed.preventDefault();                        //Prevent All keys buDrfault Bhaviour -> Onoy those work who satisfy the condition 
    let KeypressedValue = keypressed.key

    /* 0-> 48   1-> 49  2->50   3->51   4->51   5->52   6->53  7->54   8->55   8->56   9->57    + ->187   - ->189   *->56   /->192  */
    if (keypressed.keyCode == 48 | keypressed.keyCode == 49 | keypressed.keyCode == 50 | keypressed.keyCode == 51 | keypressed.keyCode == 52 | keypressed.keyCode == 53 | keypressed.keyCode == 54 | keypressed.keyCode == 55 | keypressed.keyCode == 56 | keypressed.keyCode == 57 | keypressed.keyCode == 187 | keypressed.keyCode == 189 | keypressed.keyCode == 56 | keypressed.keyCode == 191) {
        InputField.value += KeypressedValue;
    };
    if (keypressed.keyCode == 13) {                                                   // = -> 13
        keypressed.preventDefault();
        Result();
    };
    if (keypressed.keyCode == 8) {                                                    //Backspace -> 8
        Backspace();

    };
    if (keypressed.keyCode == 46) {                                                   //Delete -> 46
        AllClear();
    };
 };

// BACKSPACE
function Backspace() {                                     // CE/Backspace
    let LastCharacterRemove = '';
    LastCharacterRemove = InputField.value;
    LastCharacterRemove = LastCharacterRemove.slice(0, LastCharacterRemove.length - 1);
    InputField.value = LastCharacterRemove;
};
// DELETE AL
function AllClear() {                                        //AC/Delete
    InputField.value = '';
};
// SQUARE
function Power(Powerval) {                                                  //For Finding the Power 
    if (InputField.value != '') {               //Can Fine power only if Input not null/empty
        let PowerResult = Math.pow(InputField.value, 2);        //Finding Square -> Current Input value * 2
        if (isNaN(PowerResult)) {                                           //If isNan -> returns true (invalid input -> taking sqaure -> return NanN)
            toastr.info('Kindly Enter Valid Values.', 'Note:', {            //Toast Error
                iconClass: 'Toastr_style',
                positionClass: 'toast-bottom-right',
                showDuration: '450',
                closeButton: true,
                progressBar: false,
                preventDuplicates: true,
            });
        } else {                                                                 //isNan -> returns false -> Else -> After finding Power -> Ouput displayed    
            InputField.value = Math.pow(InputField.value, Powerval);
        };
    };
};
function Result() {                                             // = /Enter
    if (InputField.value == '') {   //If Input field empty -> toast error display  
        toastr.info('Kindly Enter Values.', 'Note:', {
            iconClass: 'Toastr_style',
            positionClass: 'toast-bottom-right',
            showDuration: '450',
            closeButton: true,
            progressBar: false,
            preventDuplicates: true,
        });
    } else {                                                        //Else ->  Evaluate the values -> dispaly output
        try {
            InputField.value = eval(InputField.value);
        }
        catch (err) {
            toastr.info('Kindly Enter Valid Values.', 'Note:', {
                iconClass: 'Toastr_style',
                positionClass: 'toast-bottom-right',
                showDuration: '450',
                closeButton: true,
                progressBar: false,
                preventDuplicates: true,
            });
        }
    };
};