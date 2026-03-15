const cartbtn = document.querySelectorAll("cartbtn");
        let count = 0;
        cartbtn.forEach(cartbutton => {
            cartbutton.addEventListener("click", () => {
                count++;
                const message = document.createElement("div");
                message.textContent = "item has been added";
                document.appendChild("message");
            })
        }); 

        const primary_button = document.getElementById("primary_button");
        primary_button.addEventListener("click", () => {
            window.open("shoping1newwindow.html", "_self");
        });

        const cart_button = document.querySelectorAll(".cart_button");
        cart_button.forEach(button => {
            button.addEventListener("click", (e) =>{
                e.preventDefault();
                window.open("cartarea.html", "_self");
            });
        });