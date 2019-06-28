var numbers = [40, 300, 2, 543, 67],
    spaces = " ";
    
            
            document.getElementById("demo").innerHTML = numbers;
            
        // Sort numbers

            function sorted() {
                numbers.sort(function(a, b){return a - b});
                document.getElementById("sorted").innerHTML = numbers[numbers.length - 1];
            }

        // Reverse sort numbers

            function reversed() {
                numbers.sort(function(a,b){return b - a});
                document.getElementById("reverse").innerHTML = numbers;
            }

        // Show all numbers in list

            function pressForAll() {
                var numbers = [40, 300, 2, 543, 67]
                numbers.forEach(allNumbers);
                function allNumbers(value) {
                    spaces = spaces + value + "<br>";
                }
                
                 document.getElementById("all").innerHTML = spaces;
            }
            
        // Show all numbers > 100

            function moreThan100(){
              var over100 = numbers.filter(higherThan100);
                 
                function higherThan100 (value) {
                    return value > 100;
                }
               document.getElementById("more100").innerHTML = over100;
            }

        // Show date in diffrent formats
            var d = new Date();
            document.getElementById("date").innerHTML = d;

        // Time based greeting

        function greeting() {
            var d = new Date().getHours();
            var txt;
            if (d < 12) {
             txt = "Good morning";
            } else if (d < 18){
                txt = "Good day";
            } else {
                txt = "Good Evening";
            }
            document.getElementById("greetingP").innerHTML = txt;
        }

        // Car brands printed
        function carNames() {
            var cars = ["BMW", "Volvo", "Volkswagen", "Ford", "Mercedes"],
            i,
            carBrandNames = " ";
            
            for (i = 0; i < cars.length; i ++) {
                carBrandNames = cars[i] + "<br>";
            }
            document.getElementById("brands").innerHTML = carBrandNames;
        }











