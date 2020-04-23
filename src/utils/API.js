// This code is meant to serve as a mock fetch from an API.
import axios from "axios";


export default {
  
getRandom : function(){
return axios.get("/api/random");

},

   getUser : function(userName){
     return axios.get("/api/userByName")

   },

  signup : function(body){
    return axios.post("/api/signup",body)
  },
  login : function(body){
    return axios.post("/api/login",body)
  },

   createUserInfo:function(body){
     return axios.post ("/api/userinformation",body)
   }
     
}

// getAllEmployees: function() {
//   return axios.get("/api/employees");
// },

// getAllEmployeesPositionSort:function(){
//   return axios.get("/api/employeesPosition")
// },
// getAllEmployeesDateSort:function(){
//   return axios.get("/api/employeesDate")
// },

// getEmployee:function(newbody){
//   console.log("lls")
//   console.log(newbody)
//   return axios.post("/api/login", newbody);

// },
// getAllManagers: function() {
//   return axios.get("/api/managers/");
// },