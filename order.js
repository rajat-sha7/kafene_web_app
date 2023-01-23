
let status = window.localStorage.getItem("loginStatus");

function loggedout() {
    window.localStorage.setItem('LoginStatus', 'false')
    window.location.href = "index.html";
}




const getData = () => {
    axios
    .get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders")
        .then(function (response) {
            var userdata = response.data;
            console.log(userdata);



            let checkedData = [];
           
            let filtredData = [];
            document.getElementById('orderdata').innerHTML = "";
            var checkedinput = document.getElementsByName("orders");
            console.log("this is my", checkedinput)

            var total = 0;
            for (var i = 0; i < checkedinput.length; i++) {
                
                if (checkedinput[i].checked) {
                    checkedData.push(checkedinput[i].value);
                    console.log("this is checkedData", checkedData)
                }
            }


            filteredUser = userdata.filter((item) => 
            

                checkedData.includes(item.orderStatus)

            )
            console.log("this is filtered user", filteredUser)

            var temp = "";





            filteredUser.forEach((useritemData) => {

                temp += "<tr>";
                temp += "<td>" + useritemData.id + "</td>";
                temp += "<td>" + useritemData.customerName + "</td>";
                temp += "<td>" + useritemData.orderDate + "</td>";
                temp += "<td>" + useritemData.amount + "</td>";
                temp += "<td>" + useritemData.orderStatus + "</td>";


            });

            document.getElementById("orderdata").innerHTML = temp;


            total = filteredUser.length;

            let userCount = document.getElementById("count");
            userCount.innerHTML = `Count: ${total}`
            console.log("this is a count", filteredUser)
        })
};


getData();


