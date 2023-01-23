
let status = window.localStorage.getItem("loginStatus");

function loggedout() {
    window.localStorage.setItem('LoginStatus', 'false')
    window.location.href = "index.html";
}







const getProductdata = () => {
    axios.get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products")
        .then(function (response) {
            var productdata = response.data;
            console.log(productdata);



            // let listData =productdata;


            var currentDate = new Date();
            var dd=String(currentDate.getDate()).padStart(2,'0');
            var mm=String(currentDate.getMonth()+1).padStart(2,'0');

            console.log(String(currentDate.getMonth()) )
            var yyyy=currentDate.getFullYear();

            var date = yyyy + "-" + mm + "-" + dd;
            console.log(date)


            var isexpired = document.getElementById("expired").checked;
            var islowstock= document.getElementById("lowstock").checked;

             var dataAfterFiltering;


             console.log(isexpired);

             if(isexpired && islowstock) {
                document.getElementById("orderdata").innerHTML =" ";
                dataAfterFiltering = productdata.filter(
                       function (item) {
                        var filteredData= formatedDate(item.expirydate);
                        return filteredData <date  && item.stock  <100;
                       }

                )
       console.log(dataAfterFiltering)

             }   else if (isexpired) {
                    document.getElementById("orderdata").innerHTML ="";
                    dataAfterFiltering = productdata.filter(
                        function (item) {
                            var filteredData = formatedDate(item.expiryDate);
                            return filteredData <date;
                        }
                    )
                    console.log(dataAfterFiltering)
             }

             else if (islowstock) {
                    document.getElementById("orderdata").innerHTML =" ";
                    dataAfterFiltering = productdata.filter(
                        function (item) {
                            // var filteredData = formatedDate(item.expirydate);
                            return item.stock  <100;
                        }
                    )
                    console.log(dataAfterFiltering)
             }
                  else  {
                    dataAfterFiltering = productdata;
                  }
                  console.log("dataAfterFiltering", dataAfterFiltering, dataAfterFiltering)

            var temp = "";





            dataAfterFiltering.forEach((itemData) => {

                temp += "<tr>";
                temp += "<td>" + itemData.id + "</td>";
                temp += "<td>" + itemData.medicineName + "</td>";
                temp += "<td>" + itemData.medicineBrand + "</td>";
                temp += "<td>" + itemData.expiryDate + "</td>";
                temp += "<td>" + itemData.unitPrice + "</td>";
                temp += "<td>" + itemData.stock + "</td></tr>";


            });

            document.getElementById("orderdata").innerHTML = temp;

     let postfiltercount;
            postfiltercount = dataAfterFiltering.length;

            let countBox = document.getElementById("count");
            countBox.innerHTML = `Total: ${postfiltercount}`
            console.log(dataAfterFiltering.length)
        })
};


getProductdata();









   
function formatedDate(date) {
   var d= new Date(date),
   month1= "" + (d.getMonth() + 1),

   day1= "" + d.getDate();
   year1= d.getFullYear();

   if(month1.length < 2){
    month1='0' + month1;
   }
   
   if(day1.length <2){
    day1='0' + day1;
   }
  

   return [year1, month1, day1].join('-')
   
}

// let update= formatedDate("14-Aug-2012")

// console.log("her rajat ", update)





