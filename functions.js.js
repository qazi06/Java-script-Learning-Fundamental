 function logger() {
            console.log("My name is Moin.");
        }
        logger();

        function fruitProcessor(apple, orange) {
            console.log(apple, orange);
        const juice = "Juice with ${apple} apples and ${orange} oranges.";
        return juice;
        }
    const appleJuice = fruitProcessor(5, 0);
    console.log(appleJuice);