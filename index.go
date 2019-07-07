package main

import (
	"net/http"
	"strings"
)

// http.HandleFunc reqires function of prototype
// ResponseWriter and Request
// Return Hello + "String" from urlPath
func sayHello(w http.ResponseWriter, r *http.Request) {
	messsage := r.URL.Path
	messsage = strings.TrimPrefix(messsage, "/")
	messsage = "Hello " + messsage

	w.Write([]byte(messsage))
}

func ping(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("pong"))
}

func main() {
	// http.HandleFunc("/", sayHello)
	http.Handle("/", http.FileServer(http.Dir("./src")))
	http.HandleFunc("/ping", ping)

	// Run Server
	if err := http.ListenAndServe(":8180", nil); err != nil {
		panic(err)
	}
}
