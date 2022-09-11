//measure a kid's height
//display if the child is tall enough to ride roller coaster
//tall enough = greater than 52

function displayIfChildIsAbleToRideTheRollerCoaster(height) {
    if (height > 52) {
        console.log("Get on that ride, kiddo!")
    }
    else {
        console.log("Sorry kiddo. Maybe next year.")
    }
}

var childHeight = 48;
displayIfChildIsAbleToRideTheRollerCoaster(childHeight);