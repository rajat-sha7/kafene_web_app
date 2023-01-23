
   
    function loggedOut() {
      window.localStorage.setItem("loginStatus", "false");
      window.location.href = "index.html";
    }
    const resetUser = () => {
      axios
        .get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users")
        
        .then(function (response) {
          var userdata = response.data;
          console.log(userdata);
          $("#searchInput").on("keyup", function () {
            let value = $(this).val();
            console.log(value);
            if (value.length >= 2) {
            
              var data1 = searchFunc(value, userdata);
            console.log("This is data1", data1);
            userTable(data1);
            }else if(value.length=1){
                alert(" Enter atleast 2 characters ");
            }
          
          });

          
          userTable(userdata);



          function searchFunc(value, userdata) {
            var filtereddata = [];
            for (let i = 0; i < userdata.length; i++) {
              value = value.toLowerCase();
              var name = userdata[i].fullName.toLowerCase();
              if (name.includes(value)) {
                filtereddata.push(userdata[i]);
              }
            }
            return filtereddata;
          }


          function userTable(data1) {
            var TD = "";
            data1.forEach((itemData) => {
              TD += "<tr >";
              TD += "<td>" + itemData.id + "</td>";
              TD += "<td>" + `<img src=${itemData.profilePic}/>` + "</td>";
              TD += "<td>" + itemData.fullName + "</td>";
              TD += "<td>" + itemData.dob + "</td>";
              TD += "<td>" + itemData.gender + "</td>";
              TD +=
                "<td>" +
                itemData.currentCity +
                " " +
                itemData.currentCountry +
                "</td></tr>";
            });
            document.getElementById("orderdata").innerHTML = TD;
          }
        })
        .catch(function (error) {"error msg",error })
        .then(function () { });
    };
    resetUser();
