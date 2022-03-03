
var valor;	
        function conversao(){
            //VARIÁVEIS DE CONVERSÃO
            var dolarAmericano = 5.10;
            var dolarCanadense = 4.04;
            var dolarAustraliano = 3.72;
            var euro = 5.67;
            var libra = 6.83;
            var iene = 0.044;
            var pesoArgentino = 0.047;
            var pesoChileno = 0.0063; 
            var pesoUruguaio = 0.12;
            var bitcoin = 0.0000045;
               
            valor = parseFloat(document.getElementById("text2").value);	//VALOR DE ENTRADA DA CONVERSÃO 	
            var cotacao = document.getElementById('opções').value; //SELECT DE OPÇÕES
                
            switch (cotacao) {
                case value="DólarEUA":
                    document.getElementById("valorFinal").innerHTML = (valor*dolarAmericano).toFixed(2);
                    break;
                case value="DólarCAN":
                    document.getElementById("valorFinal").innerHTML = (valor*dolarCanadense).toFixed(2);
                    break;
                case value="DólarAUS":
                    document.getElementById("valorFinal").innerHTML = (valor*dolarAustraliano).toFixed(2);
                    break;
                case value="Euro":
                    document.getElementById("valorFinal").innerHTML = (valor*euro).toFixed(2);
                    break;
                case value="Libra":
                    document.getElementById("valorFinal").innerHTML = (valor*libra).toFixed(2);
                    break;
                case value="Iene":
                    document.getElementById("valorFinal").innerHTML = (valor*iene).toFixed(2);
                    break;
                case value="PesoARG":
                    document.getElementById("valorFinal").innerHTML = (valor/pesoArgentino).toFixed(2);
                    break;
                case value="PesoCHI":
                    document.getElementById("valorFinal").innerHTML = (valor/pesoChileno).toFixed(2);
                    break;
                case value="PesoURU":
                    document.getElementById("valorFinal").innerHTML = (valor/pesoUruguaio).toFixed(2);
                    break;
                case value="Bit":
                    document.getElementById("valorFinal").innerHTML = (valor/bitcoin).toFixed(7);
                    break;
            }
        }