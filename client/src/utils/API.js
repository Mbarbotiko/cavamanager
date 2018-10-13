import axios from "axios";

export default {
  // Gets all dishes
  getDishes: function() {
    return axios.get("/api/dishes");
  },
  // Gets the dishes with the given id
  getDish: function(id) {
    return axios.get("/api/dishes/" + id);
  },
  // Deletes the dishes with the given id
  deleteDish: function(id) {
    return axios.delete("/api/dishes/" + id);
  },
  // Saves a dishes to the database
  saveDish: function(dishData) {
    return axios.post("/api/dishes", dishData);
  }
};
