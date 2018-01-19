import axios from 'axios';

export const GET_FEED_RESULTS_PENDING = "GET_FEED_RESULTS_PENDING";
export const GET_FEED_RESULTS_SUCCESS = "GET_FEED_RESULTS_SUCCESS";

export const getFeedResults = (userZipcode) => {
  return async (dispatch) => {
    console.log("FETCHING RESULTS...");
    dispatch({
      type: GET_FEED_RESULTS_PENDING
    });
    if (userZipcode) {
      const apiKey = "d65eb3d454e7a9215e0f7b75bf7e2098";
      let feed = await axios.get(`https://api.petfinder.com/pet.find?format=json&key=${apiKey}&location=${userZipcode}&output=full&count=10`);
      console.log("FEED:", feed.data.petfinder.pets.pet);
      dispatch({
        type: GET_FEED_RESULTS_SUCCESS,
        payload: feed.data.petfinder.pets.pet
      })
    }
  }
}
