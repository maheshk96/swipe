export const getProfile = {
    method: 'GET'
};

export const SWIPE_URL = "https://test.swipejobs.com/api/worker/7f90df6e-b832-44e2-b624-3143d428001f/profile"
fetch('https://test.swipejobs.com/api/worker/7f90df6e-b832-44e2-b624-3143d428001f/profile')
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));