const scrapped_price = document.querySelector('.scrapped_price');
const button = document.querySelector('.tracking_button');



    

    fetch('http://localhost:8000/results')
        .then(response => response.json())
        .then(data => {

            

            
            

            function myFunction() {
                const desired_price = document.querySelector('#desired_price').value;
                console.log(desired_price)

                const price = `<span>` + data + `</span>`
                scrapped_price.insertAdjacentHTML("beforeend", price)
                if (price <= desired_price) {
                    console.log("You can afford it")
                } else {
                    console.log("you can't afford it")
                }
                console.log(price)
            }

            button.addEventListener('click', myFunction);
        })
        .catch(err => console.log(err))



