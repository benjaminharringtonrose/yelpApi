import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer wNV-UStyzRERSKkOo4dyGKXWDAnpUaKagh_ykGVWrEQjb-GYV6yy-7qyRZtc9DzHLcYE716vesFfCGqOVe3jY_DxndKdUN7iJ6lbKG2fMpe92hZhfzo7ikbSl0qsX3Yx",
  },
});
