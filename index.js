let eastWest = [
    '1st Avenue',
    '2nd Avenue',
    '3rd Avenue',
    'Lexington Avenue',
    'Park',
    'Madison Avenue',
    '5th Avenue'
  ];

class Driver {
    constructor(name, startDate) {
        this.name = name;
        this.startDate = new Date(startDate);
    };

    yearsExperienceFromBeginningOf(year) {
        let endDate = new Date(year);
        let total = (endDate - this.startDate) / ( 365 * 24 * 60 * 60 * 1000 );
        return parseInt(total);
    };
};

class Route {
    constructor(beginningLocation, endingLocation) {
        this.beginningLocation = beginningLocation;
        this.endingLocation = endingLocation;
    };

    avenueInt(avenue) {
        return eastWest.indexOf(avenue);
    }

    blocksTravelled() {
        let horizontalDistance =
        this.avenueInt(this.endingLocation.horizontal) - this.avenueInt(this.beginningLocation.horizontal);

        let verticalDistance = 
        this.endingLocation.vertical - this.beginningLocation.vertical;
        
        return Math.abs(horizontalDistance) + Math.abs(verticalDistance);
    };

    estimatedTime(peak) {
        if (peak) {
            return this.blocksTravelled() / 2;       
        } else {
            return this.blocksTravelled() / 3;
        };
    }
}
