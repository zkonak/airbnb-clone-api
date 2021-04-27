
exports.updatePlace = (request, response) => {
    const { placeId } = request.params;
    

        twitter.updateTweet(request.body, tweet_id, user_id, (error, tasks) => {
            if (error) {
                response.send(error.message);
            }

            console.log(user_id);
            twitter.getUserTweet(user_id, (error, UserTweet) => {
                if (error) {
                    response.send(error.message);
                }
                response.render("profile.ejs", { UserTweet, alerts_warning });
            });

        });
   
}
