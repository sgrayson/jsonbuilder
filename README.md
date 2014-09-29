JSON Builder
================================

This is a simple GET endpoint on port 3000 
that responds with a JSON representation
of the URL request parameters if any

Run with: 

	npm start

Examples:

localhost:3000/api/data 							==> 	{}
localhost:3000/api/data?name=Sean					==> 	{"name":"Sean"}
localhost:3000/api/data?hello=world&goodbye=moon    ==> 	{"hello":"world","goodbye":"moon"}



