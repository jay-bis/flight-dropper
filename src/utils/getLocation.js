// returns position as an object with the following shape:
// {
//     lat: xxx,
//     lng: yyy
// }
const getLocation = () => {
    if (navigator && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(pos => {
            const coords = pos.coords;
            return {
                lat: coords.latitude,
                lng: coords.longitude
            };
        }, function () {}, {maximumAge:60000, timeout: 10000});
    }
}

export default getLocation;