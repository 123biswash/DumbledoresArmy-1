import app from "./app";

const port = process.env.PORT || 8080;
app.listen(port, function(){
    console.log("Express server listening on port " + port);
});