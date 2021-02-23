//Input de la función//


num = 34;


//Inicio de la función//

var intToRoman = function(num) {
    var number = num.toString();
    var arreglo = number.split("");

    if (arreglo.length === 4) {
        if ( parseInt(arreglo[0]) < 4 ) {
            letra_miles = "M".repeat(parseInt(arreglo[0]));
            if ( parseInt(arreglo[1]) < 4) {
                letra_cienes = "C".repeat(parseInt(arreglo[1]));
                if ( parseInt(arreglo[2]) < 4) {
                    letra_dieces = "X".repeat(parseInt(arreglo[2]));
                    if ( parseInt(arreglo[3]) < 4) {
                        letra_unes = "I".repeat(parseInt(arreglo[3]));
                    }
                    else if ( parseInt(arreglo[3]) === 4) {
                        letra_unes = "IV";
                    }
                    else if (5 <= parseInt(arreglo[3]) && parseInt(arreglo[3]) < 9 ) {
                        letra_unes = "V"+"I".repeat(parseInt(arreglo[3])-5);
                    }
                    else if ( parseInt(arreglo[3]) === 9 ) {
                        letra_unes = "IX";
                    }
                }
                else if ( parseInt(arreglo[2]) === 4 ) {
                    letra_dieces = "XL";
                    if ( parseInt(arreglo[3]) < 4) {
                        letra_unes = "I".repeat(parseInt(arreglo[3]));
                    }
                    else if ( parseInt(arreglo[3]) === 4) {
                        letra_unes = "IV";
                    }
                    else if (5 <= parseInt(arreglo[3]) && parseInt(arreglo[3]) < 9 ) {
                        letra_unes = "V"+"I".repeat(parseInt(arreglo[3])-5);
                    }
                    else if ( parseInt(arreglo[3]) === 9 ) {
                        letra_unes = "IX";
                    }
                }
                else if (5 <= parseInt(arreglo[2]) && parseInt(arreglo[2]) < 9 ) {
                    letra_dieces = "L"+"X".repeat(parseInt(arreglo[2])-5);
                    if ( parseInt(arreglo[3]) < 4) {
                        letra_unes = "I".repeat(parseInt(arreglo[3]));
                    }
                    else if ( parseInt(arreglo[3]) === 4) {
                        letra_unes = "IV";
                    }
                    else if (5 <= parseInt(arreglo[3]) && parseInt(arreglo[3]) < 9 ) {
                        letra_unes = "V"+"I".repeat(parseInt(arreglo[3])-5);
                    }
                    else if ( parseInt(arreglo[3]) === 9 ) {
                        letra_unes = "IX";
                    }
                }
                else if ( parseInt(arreglo[2]) === 9 ) {
                    letra_dieces = "XC";
                    if ( parseInt(arreglo[3]) < 4) {
                        letra_unes = "I".repeat(parseInt(arreglo[3]));
                    }
                    else if ( parseInt(arreglo[3]) === 4) {
                        letra_unes = "IV";
                    }
                    else if (5 <= parseInt(arreglo[3]) && parseInt(arreglo[3]) < 9 ) {
                        letra_unes = "V"+"I".repeat(parseInt(arreglo[3])-5);
                    }
                    else if ( parseInt(arreglo[3]) === 9 ) {
                        letra_unes = "IX";
                    }
                }
            }
            else if ( parseInt(arreglo[1]) === 4 ) {
                letra_cienes = "CD";
                if ( parseInt(arreglo[2]) < 4) {
                    letra_dieces = "X".repeat(parseInt(arreglo[2]));
                    if ( parseInt(arreglo[3]) < 4) {
                        letra_unes = "I".repeat(parseInt(arreglo[3]));
                    }
                    else if ( parseInt(arreglo[3]) === 4) {
                        letra_unes = "IV";
                    }
                    else if (5 <= parseInt(arreglo[3]) && parseInt(arreglo[3]) < 9 ) {
                        letra_unes = "V"+"I".repeat(parseInt(arreglo[3])-5);
                    }
                    else if ( parseInt(arreglo[3]) === 9 ) {
                        letra_unes = "IX";
                    }
                }
                else if ( parseInt(arreglo[2]) === 4 ) {
                    letra_dieces = "XL";
                    if ( parseInt(arreglo[3]) < 4) {
                        letra_unes = "I".repeat(parseInt(arreglo[3]));
                    }
                    else if ( parseInt(arreglo[3]) === 4) {
                        letra_unes = "IV";
                    }
                    else if (5 <= parseInt(arreglo[3]) && parseInt(arreglo[3]) < 9 ) {
                        letra_unes = "V"+"I".repeat(parseInt(arreglo[3])-5);
                    }
                    else if ( parseInt(arreglo[3]) === 9 ) {
                        letra_unes = "IX";
                    }
                }
                else if (5 <= parseInt(arreglo[2]) && parseInt(arreglo[2]) < 9 ) {
                    letra_dieces = "L"+"X".repeat(parseInt(arreglo[2])-5);
                    if ( parseInt(arreglo[3]) < 4) {
                        letra_unes = "I".repeat(parseInt(arreglo[3]));
                    }
                    else if ( parseInt(arreglo[3]) === 4) {
                        letra_unes = "IV";
                    }
                    else if (5 <= parseInt(arreglo[3]) && parseInt(arreglo[3]) < 9 ) {
                        letra_unes = "V"+"I".repeat(parseInt(arreglo[3])-5);
                    }
                    else if ( parseInt(arreglo[3]) === 9 ) {
                        letra_unes = "IX";
                    }
                }
                else if ( parseInt(arreglo[2]) === 9 ) {
                    letra_dieces = "XC";
                    if ( parseInt(arreglo[3]) < 4) {
                        letra_unes = "I".repeat(parseInt(arreglo[3]));
                    }
                    else if ( parseInt(arreglo[3]) === 4) {
                        letra_unes = "IV";
                    }
                    else if (5 <= parseInt(arreglo[3]) && parseInt(arreglo[3]) < 9 ) {
                        letra_unes = "V"+"I".repeat(parseInt(arreglo[3])-5);
                    }
                    else if ( parseInt(arreglo[3]) === 9 ) {
                        letra_unes = "IX";
                    }
                }
            }
            else if (5 <= parseInt(arreglo[1]) && parseInt(arreglo[1]) < 9 ) {
                letra_cienes = "D"+"C".repeat(parseInt(arreglo[1])-5);
                if ( parseInt(arreglo[2]) < 4) {
                    letra_dieces = "X".repeat(parseInt(arreglo[2]));
                    if ( parseInt(arreglo[3]) < 4) {
                        letra_unes = "I".repeat(parseInt(arreglo[3]));
                    }
                    else if ( parseInt(arreglo[3]) === 4) {
                        letra_unes = "IV";
                    }
                    else if (5 <= parseInt(arreglo[3]) && parseInt(arreglo[3]) < 9 ) {
                        letra_unes = "V"+"I".repeat(parseInt(arreglo[3])-5);
                    }
                    else if ( parseInt(arreglo[3]) === 9 ) {
                        letra_unes = "IX";
                    }
                }
                else if ( parseInt(arreglo[2]) === 4 ) {
                    letra_dieces = "XL";
                    if ( parseInt(arreglo[3]) < 4) {
                        letra_unes = "I".repeat(parseInt(arreglo[3]));
                    }
                    else if ( parseInt(arreglo[3]) === 4) {
                        letra_unes = "IV";
                    }
                    else if (5 <= parseInt(arreglo[3]) && parseInt(arreglo[3]) < 9 ) {
                        letra_unes = "V"+"I".repeat(parseInt(arreglo[3])-5);
                    }
                    else if ( parseInt(arreglo[3]) === 9 ) {
                        letra_unes = "IX";
                    }
                }
                else if (5 <= parseInt(arreglo[2]) && parseInt(arreglo[2]) < 9 ) {
                    letra_dieces = "L"+"X".repeat(parseInt(arreglo[2])-5);
                    if ( parseInt(arreglo[3]) < 4) {
                        letra_unes = "I".repeat(parseInt(arreglo[3]));
                    }
                    else if ( parseInt(arreglo[3]) === 4) {
                        letra_unes = "IV";
                    }
                    else if (5 <= parseInt(arreglo[3]) && parseInt(arreglo[3]) < 9 ) {
                        letra_unes = "V"+"I".repeat(parseInt(arreglo[3])-5);
                    }
                    else if ( parseInt(arreglo[3]) === 9 ) {
                        letra_unes = "IX";
                    }
                }
                else if ( parseInt(arreglo[2]) === 9 ) {
                    letra_dieces = "XC";
                    if ( parseInt(arreglo[3]) < 4) {
                        letra_unes = "I".repeat(parseInt(arreglo[3]));
                    }
                    else if ( parseInt(arreglo[3]) === 4) {
                        letra_unes = "IV";
                    }
                    else if (5 <= parseInt(arreglo[3]) && parseInt(arreglo[3]) < 9 ) {
                        letra_unes = "V"+"I".repeat(parseInt(arreglo[3])-5);
                    }
                    else if ( parseInt(arreglo[3]) === 9 ) {
                        letra_unes = "IX";
                    }
                }
            }
            else if ( parseInt(arreglo[1]) === 9 ) {
                letra_cienes = "CM";
                if ( parseInt(arreglo[2]) < 4) {
                    letra_dieces = "X".repeat(parseInt(arreglo[2]));
                    if ( parseInt(arreglo[3]) < 4) {
                        letra_unes = "I".repeat(parseInt(arreglo[3]));
                    }
                    else if ( parseInt(arreglo[3]) === 4) {
                        letra_unes = "IV";
                    }
                    else if (5 <= parseInt(arreglo[3]) && parseInt(arreglo[3]) < 9 ) {
                        letra_unes = "V"+"I".repeat(parseInt(arreglo[3])-5);
                    }
                    else if ( parseInt(arreglo[3]) === 9 ) {
                        letra_unes = "IX";
                    }
                }
                else if ( parseInt(arreglo[2]) === 4 ) {
                    letra_dieces = "XL";
                    if ( parseInt(arreglo[3]) < 4) {
                        letra_unes = "I".repeat(parseInt(arreglo[3]));
                    }
                    else if ( parseInt(arreglo[3]) === 4) {
                        letra_unes = "IV";
                    }
                    else if (5 <= parseInt(arreglo[3]) && parseInt(arreglo[3]) < 9 ) {
                        letra_unes = "V"+"I".repeat(parseInt(arreglo[3])-5);
                    }
                    else if ( parseInt(arreglo[3]) === 9 ) {
                        letra_unes = "IX";
                    }
                }
                else if (5 <= parseInt(arreglo[2]) && parseInt(arreglo[2]) < 9 ) {
                    letra_dieces = "L"+"X".repeat(parseInt(arreglo[2])-5);
                    if ( parseInt(arreglo[3]) < 4) {
                        letra_unes = "I".repeat(parseInt(arreglo[3]));
                    }
                    else if ( parseInt(arreglo[3]) === 4) {
                        letra_unes = "IV";
                    }
                    else if (5 <= parseInt(arreglo[3]) && parseInt(arreglo[3]) < 9 ) {
                        letra_unes = "V"+"I".repeat(parseInt(arreglo[3])-5);
                    }
                    else if ( parseInt(arreglo[3]) === 9 ) {
                        letra_unes = "IX";
                    }
                }
                else if ( parseInt(arreglo[2]) === 9 ) {
                    letra_dieces = "XC";
                    if ( parseInt(arreglo[3]) < 4) {
                        letra_unes = "I".repeat(parseInt(arreglo[3]));
                    }
                    else if ( parseInt(arreglo[3]) === 4) {
                        letra_unes = "IV";
                    }
                    else if (5 <= parseInt(arreglo[3]) && parseInt(arreglo[3]) < 9 ) {
                        letra_unes = "V"+"I".repeat(parseInt(arreglo[3])-5);
                    }
                    else if ( parseInt(arreglo[3]) === 9 ) {
                        letra_unes = "IX";
                    }
                }
            }            
        }
        
        total = letra_miles+letra_cienes+letra_dieces+letra_unes;
    return total;
    }

    if (arreglo.length === 3) {
    
        if ( parseInt(arreglo[0]) < 4) {
            letra_cienes = "C".repeat(parseInt(arreglo[0]));
            if ( parseInt(arreglo[1]) < 4) {
                letra_dieces = "X".repeat(parseInt(arreglo[1]));
                if ( parseInt(arreglo[2]) < 4) {
                    letra_unes = "I".repeat(parseInt(arreglo[2]));
                }
                else if ( parseInt(arreglo[2]) === 4) {
                        letra_unes = "IV";
                }
                else if (5 <= parseInt(arreglo[2]) && parseInt(arreglo[2]) < 9 ) {
                        letra_unes = "V"+"I".repeat(parseInt(arreglo[2])-5);
                }
                else if ( parseInt(arreglo[2]) === 9 ) {
                        letra_unes = "IX";
                }
            }
            else if ( parseInt(arreglo[1]) === 4 ) {
                letra_dieces = "XL";
                if ( parseInt(arreglo[2]) < 4) {
                    letra_unes = "I".repeat(parseInt(arreglo[2]));
                }
                else if ( parseInt(arreglo[2]) === 4) {
                    letra_unes = "IV";
                }
                else if (5 <= parseInt(arreglo[2]) && parseInt(arreglo[2]) < 9 ) {
                    letra_unes = "V"+"I".repeat(parseInt(arreglo[2])-5);
                }
                else if ( parseInt(arreglo[2]) === 9 ) {
                    letra_unes = "IX";
                }
            }
            else if (5 <= parseInt(arreglo[1]) && parseInt(arreglo[1]) < 9 ) {
                letra_dieces = "L"+"X".repeat(parseInt(arreglo[1])-5);
                if ( parseInt(arreglo[2]) < 4) {
                    letra_unes = "I".repeat(parseInt(arreglo[2]));
                }
                else if ( parseInt(arreglo[2]) === 4) {
                    letra_unes = "IV";
                }
                else if (5 <= parseInt(arreglo[2]) && parseInt(arreglo[2]) < 9 ) {
                    letra_unes = "V"+"I".repeat(parseInt(arreglo[2])-5);
                }
                else if ( parseInt(arreglo[2]) === 9 ) {
                    letra_unes = "IX";
                }
            }
            else if ( parseInt(arreglo[1]) === 9 ) {
                letra_dieces = "XC";
                if ( parseInt(arreglo[2]) < 4) {
                    letra_unes = "I".repeat(parseInt(arreglo[2]));
                }
                else if ( parseInt(arreglo[2]) === 4) {
                    letra_unes = "IV";
                }
                else if (5 <= parseInt(arreglo[2]) && parseInt(arreglo[2]) < 9 ) {
                    letra_unes = "V"+"I".repeat(parseInt(arreglo[2])-5);
                }
                else if ( parseInt(arreglo[2]) === 9 ) {
                    letra_unes = "IX";
                }
            }
        }
            else if ( parseInt(arreglo[0]) === 4 ) {
                letra_cienes = "CD";
                if ( parseInt(arreglo[1]) < 4) {
                    letra_dieces = "X".repeat(parseInt(arreglo[1]));
                    if ( parseInt(arreglo[2]) < 4) {
                        letra_unes = "I".repeat(parseInt(arreglo[2]));
                    }
                    else if ( parseInt(arreglo[2]) === 4) {
                        letra_unes = "IV";
                    }
                    else if (5 <= parseInt(arreglo[2]) && parseInt(arreglo[2]) < 9 ) {
                        letra_unes = "V"+"I".repeat(parseInt(arreglo[2])-5);
                    }
                    else if ( parseInt(arreglo[2]) === 9 ) {
                        letra_unes = "IX";
                    }
                }
                else if ( parseInt(arreglo[1]) === 4 ) {
                    letra_dieces = "XL";
                    if ( parseInt(arreglo[2]) < 4) {
                        letra_unes = "I".repeat(parseInt(arreglo[2]));
                    }
                    else if ( parseInt(arreglo[2]) === 4) {
                        letra_unes = "IV";
                    }
                    else if (5 <= parseInt(arreglo[2]) && parseInt(arreglo[2]) < 9 ) {
                        letra_unes = "V"+"I".repeat(parseInt(arreglo[2])-5);
                    }
                    else if ( parseInt(arreglo[2]) === 9 ) {
                        letra_unes = "IX";
                    }
                }
                else if (5 <= parseInt(arreglo[1]) && parseInt(arreglo[1]) < 9 ) {
                    letra_dieces = "L"+"X".repeat(parseInt(arreglo[1])-5);
                    if ( parseInt(arreglo[2]) < 4) {
                        letra_unes = "I".repeat(parseInt(arreglo[2]));
                    }
                    else if ( parseInt(arreglo[2]) === 4) {
                        letra_unes = "IV";
                    }
                    else if (5 <= parseInt(arreglo[2]) && parseInt(arreglo[2]) < 9 ) {
                        letra_unes = "V"+"I".repeat(parseInt(arreglo[2])-5);
                    }
                    else if ( parseInt(arreglo[2]) === 9 ) {
                        letra_unes = "IX";
                    }
                }
                else if ( parseInt(arreglo[1]) === 9 ) {
                    letra_dieces = "XC";
                    if ( parseInt(arreglo[2]) < 4) {
                        letra_unes = "I".repeat(parseInt(arreglo[2]));
                    }
                    else if ( parseInt(arreglo[2]) === 4) {
                        letra_unes = "IV";
                    }
                    else if (5 <= parseInt(arreglo[2]) && parseInt(arreglo[2]) < 9 ) {
                        letra_unes = "V"+"I".repeat(parseInt(arreglo[2])-5);
                    }
                    else if ( parseInt(arreglo[2]) === 9 ) {
                        letra_unes = "IX";
                    }
                }
            }
            else if (5 <= parseInt(arreglo[0]) && parseInt(arreglo[0]) < 9 ) {
                letra_cienes = "D"+"C".repeat(parseInt(arreglo[0])-5);
                if ( parseInt(arreglo[1]) < 4) {
                    letra_dieces = "X".repeat(parseInt(arreglo[1]));
                    if ( parseInt(arreglo[2]) < 4) {
                        letra_unes = "I".repeat(parseInt(arreglo[2]));
                    }
                    else if ( parseInt(arreglo[2]) === 4) {
                        letra_unes = "IV";
                    }
                    else if (5 <= parseInt(arreglo[2]) && parseInt(arreglo[2]) < 9 ) {
                        letra_unes = "V"+"I".repeat(parseInt(arreglo[2])-5);
                    }
                    else if ( parseInt(arreglo[2]) === 9 ) {
                        letra_unes = "IX";
                    }
                }
                else if ( parseInt(arreglo[1]) === 4 ) {
                    letra_dieces = "XL";
                    if ( parseInt(arreglo[2]) < 4) {
                        letra_unes = "I".repeat(parseInt(arreglo[2]));
                    }
                    else if ( parseInt(arreglo[2]) === 4) {
                        letra_unes = "IV";
                    }
                    else if (5 <= parseInt(arreglo[2]) && parseInt(arreglo[2]) < 9 ) {
                        letra_unes = "V"+"I".repeat(parseInt(arreglo[2])-5);
                    }
                    else if ( parseInt(arreglo[2]) === 9 ) {
                        letra_unes = "IX";
                    }
                }
                else if (5 <= parseInt(arreglo[1]) && parseInt(arreglo[1]) < 9 ) {
                    letra_dieces = "L"+"X".repeat(parseInt(arreglo[1])-5);
                    if ( parseInt(arreglo[1]) < 4) {
                        letra_unes = "I".repeat(parseInt(arreglo[2]));
                    }
                    else if ( parseInt(arreglo[2]) === 4) {
                        letra_unes = "IV";
                    }
                    else if (5 <= parseInt(arreglo[2]) && parseInt(arreglo[2]) < 9 ) {
                        letra_unes = "V"+"I".repeat(parseInt(arreglo[2])-5);
                    }
                    else if ( parseInt(arreglo[2]) === 9 ) {
                        letra_unes = "IX";
                    }
                }
                else if ( parseInt(arreglo[1]) === 9 ) {
                    letra_dieces = "XC";
                    if ( parseInt(arreglo[2]) < 4) {
                        letra_unes = "I".repeat(parseInt(arreglo[2]));
                    }
                    else if ( parseInt(arreglo[2]) === 4) {
                        letra_unes = "IV";
                    }
                    else if (5 <= parseInt(arreglo[2]) && parseInt(arreglo[2]) < 9 ) {
                        letra_unes = "V"+"I".repeat(parseInt(arreglo[2])-5);
                    }
                    else if ( parseInt(arreglo[2]) === 9 ) {
                        letra_unes = "IX";
                    }
                }
            }
            else if ( parseInt(arreglo[0]) === 9 ) {
                letra_cienes = "CM";
                if ( parseInt(arreglo[1]) < 4) {
                    letra_dieces = "X".repeat(parseInt(arreglo[1]));
                    if ( parseInt(arreglo[2]) < 4) {
                        letra_unes = "I".repeat(parseInt(arreglo[2]));
                    }
                    else if ( parseInt(arreglo[2]) === 4) {
                        letra_unes = "IV";
                    }
                    else if (5 <= parseInt(arreglo[2]) && parseInt(arreglo[2]) < 9 ) {
                        letra_unes = "V"+"I".repeat(parseInt(arreglo[2])-5);
                    }
                    else if ( parseInt(arreglo[2]) === 9 ) {
                        letra_unes = "IX";
                    }
                }
                else if ( parseInt(arreglo[1]) === 4 ) {
                    letra_dieces = "XL";
                    if ( parseInt(arreglo[2]) < 4) {
                        letra_unes = "I".repeat(parseInt(arreglo[2]));
                    }
                    else if ( parseInt(arreglo[2]) === 4) {
                        letra_unes = "IV";
                    }
                    else if (5 <= parseInt(arreglo[2]) && parseInt(arreglo[2]) < 9 ) {
                        letra_unes = "V"+"I".repeat(parseInt(arreglo[2])-5);
                    }
                    else if ( parseInt(arreglo[2]) === 9 ) {
                        letra_unes = "IX";
                    }
                }
                else if (5 <= parseInt(arreglo[1]) && parseInt(arreglo[1]) < 9 ) {
                    letra_dieces = "L"+"X".repeat(parseInt(arreglo[1])-5);
                    if ( parseInt(arreglo[2]) < 4) {
                        letra_unes = "I".repeat(parseInt(arreglo[2]));
                    }
                    else if ( parseInt(arreglo[2]) === 4) {
                        letra_unes = "IV";
                    }
                    else if (5 <= parseInt(arreglo[2]) && parseInt(arreglo[2]) < 9 ) {
                        letra_unes = "V"+"I".repeat(parseInt(arreglo[2])-5);
                    }
                    else if ( parseInt(arreglo[2]) === 9 ) {
                        letra_unes = "IX";
                    }
                }
                else if ( parseInt(arreglo[1]) === 9 ) {
                    letra_dieces = "XC";
                    if ( parseInt(arreglo[2]) < 4) {
                        letra_unes = "I".repeat(parseInt(arreglo[2]));
                    }
                    else if ( parseInt(arreglo[2]) === 4) {
                        letra_unes = "IV";
                    }
                    else if (5 <= parseInt(arreglo[2]) && parseInt(arreglo[2]) < 9 ) {
                        letra_unes = "V"+"I".repeat(parseInt(arreglo[2])-5);
                    }
                    else if ( parseInt(arreglo[2]) === 9 ) {
                        letra_unes = "IX";
                    }
                }
            }            
        
            else {
            letra_miles = "ERROR";
            }

        total = letra_cienes+letra_dieces+letra_unes;
    return total;
    }

    if (arreglo.length === 2) {
    
        
        if ( parseInt(arreglo[0]) < 4) {
            letra_dieces = "X".repeat(parseInt(arreglo[0]));
            if ( parseInt(arreglo[1]) < 4) {
                letra_unes = "I".repeat(parseInt(arreglo[1]));
            }
            else if ( parseInt(arreglo[1]) === 4) {
                    letra_unes = "IV";
            }
            else if (5 <= parseInt(arreglo[1]) && parseInt(arreglo[1]) < 9 ) {
                    letra_unes = "V"+"I".repeat(parseInt(arreglo[1])-5);
            }
            else if ( parseInt(arreglo[1]) === 9 ) {
                    letra_unes = "IX";
            }
        }
        else if ( parseInt(arreglo[0]) === 4 ) {
            letra_dieces = "XL";
            if ( parseInt(arreglo[1]) < 4) {
                letra_unes = "I".repeat(parseInt(arreglo[1]));
            }
            else if ( parseInt(arreglo[1]) === 4) {
                letra_unes = "IV";
            }
            else if (5 <= parseInt(arreglo[1]) && parseInt(arreglo[1]) < 9 ) {
                letra_unes = "V"+"I".repeat(parseInt(arreglo[1])-5);
            }
            else if ( parseInt(arreglo[1]) === 9 ) {
                letra_unes = "IX";
            }
        }
        else if (5 <= parseInt(arreglo[0]) && parseInt(arreglo[0]) < 9 ) {
            letra_dieces = "L"+"X".repeat(parseInt(arreglo[0])-5);
            if ( parseInt(arreglo[1]) < 4) {
                letra_unes = "I".repeat(parseInt(arreglo[1]));
            }
            else if ( parseInt(arreglo[1]) === 4) {
                letra_unes = "IV";
            }
            else if (5 <= parseInt(arreglo[1]) && parseInt(arreglo[1]) < 9 ) {
                letra_unes = "V"+"I".repeat(parseInt(arreglo[1])-5);
            }
            else if ( parseInt(arreglo[1]) === 9 ) {
                letra_unes = "IX";
            }
        }
        else if ( parseInt(arreglo[0]) === 9 ) {
            letra_dieces = "XC";
            if ( parseInt(arreglo[1]) < 4) {
                letra_unes = "I".repeat(parseInt(arreglo[1]));
            }
            else if ( parseInt(arreglo[1]) === 4) {
                letra_unes = "IV";
            }
            else if (5 <= parseInt(arreglo[1]) && parseInt(arreglo[1]) < 9 ) {
                letra_unes = "V"+"I".repeat(parseInt(arreglo[1])-5);
            }
            else if ( parseInt(arreglo[1]) === 9 ) {
                letra_unes = "IX";
            }
        }           
        
        else {
            letra_miles = "ERROR";
        }

        total = letra_dieces+letra_unes;
    return total;
    }

    if (arreglo.length === 1) {
        if ( parseInt(arreglo[0]) === 0) {
            letra_unes = "EL NÚMERO CERO NO SE PUEDE TRADUCIR";
        }
        else if ( parseInt(arreglo[0]) < 4) {
            letra_unes = "I".repeat(parseInt(arreglo[0]));
        }
        else if ( parseInt(arreglo[0]) === 4) {
                letra_unes = "IV";
        }
        else if (5 <= parseInt(arreglo[0]) && parseInt(arreglo[0]) < 9 ) {
                letra_unes = "V"+"I".repeat(parseInt(arreglo[0])-5);
        }
        else if ( parseInt(arreglo[0]) === 9 ) {
                letra_unes = "IX";
        }
    

        total = letra_unes;
    return total;
    }
}

//Output de la función//

console.log(intToRoman(num));

//Fin del ejercicio//