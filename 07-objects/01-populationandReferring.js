//Objects

//Objects store mutiple ojects that are similar in structure. This is great for our JS logic.
//Objects can hold multiple datatypes
//Denoted with { }
// Key - Value Pairs

// example
let netflix = {
    id: 1,
    name: "Super Store",
    seasons: {
        season1: {
            seasonInfo: {
                episodeInfo: [
                    { episode 1, episodeName: "Pilot"},
                    { episode 2, episodeName: "Magazine Profile"},
                    { episode 3, episodeName: "Shots and Salsa"},
                    { episode 4, episodeName: "Mannequin"}
                ]
            ]
        }
    }
    season2: {
        seasonInfo: {
            episodeInfo: [
                {episode: 5, episodeName: "Shoplifter"},
                {episode: 6, episodeName: "Secret Shopper"},
                {episode: 7, episodeName: "Color Wars"},
                {episode: 8, episodeName: "Weddig Day Sale"},
                {episode: 9, episodeName: "All-Nighter"}
            ]
        }
    }
    season3: {
        seasonInfo: {
            episodeInfo: [
                {episode: 10, episodeName: "Demotion"},
                {episode: 11, episodeName: "Labor"}
            ]

            }
        }
// Dot notation

//console.log("All data: ", netflix)
//console.log('Just season info', netflix.seasons.season1.seasonInfo)
console.log('Episode Name: ', netflix.seasons.season1.seasonInfo.episodeInfo[0].episodeName)

//Pick an episode to show, using dot notation, walk through the netlix objest and print off both the episode and the episode name

console.log(netflix.seasons.season1.seasonInfo.episodeInfo[0].episodeName, 'episode', netflix.seasons.season1.seasoninfo.episodeInfo[0].episode)