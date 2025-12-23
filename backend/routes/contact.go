package routes

import (
	"encoding/json"
	"net/http"
	"your_project/backend/db"
	"your_project/backend/models"

	"github.com/gorilla/mux"
)

func RegisterContactRoutes(r *mux.Router) {
	r.HandleFunc("/contact", CreateContact).Methods("POST")
}

func CreateContact(w http.ResponseWriter, r *http.Request) {
	var contact models.Contact
	if err := json.NewDecoder(r.Body).Decode(&contact); err != nil {
		w.WriteHeader(http.StatusBadRequest)
		w.Write([]byte("Invalid request payload"))
		return
	}
	err := db.DB.QueryRow(
		"INSERT INTO contacts (name, email, message) VALUES ($1, $2, $3) RETURNING id",
		contact.Name, contact.Email, contact.Message,
	).Scan(&contact.ID)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte("Database error: " + err.Error()))
		return
	}
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(contact)
}
