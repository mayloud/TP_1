// server.js - Configuration de base
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;
// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Routes de base
app.get('/', (req, res) => {
 res.json({ message: 'API opérationnelle' });
});
// Démarrage du serveur
app.listen(PORT, () => {
 console.log(`Serveur en écoute sur le port ${PORT}`);
});

// Exemple de routes CRUD pour une ressource "tâches"
// Données mock pour l'exemple
let tasks = [
    { id: 1, title: 'Apprendre Express', completed: false },
    { id: 2, title: 'Créer une API REST', completed: false }
   ];
   // Route pour récupérer toutes les tâches
   app.get('/api/tasks', (req, res) => {
    res.json(tasks);
   });
   // Route pour récupérer une tâche spécifique
   app.get('/api/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) return res.status(404).json({ error: 'Tâche non trouvée' });
    res.json(task);
   });
   // Route pour créer une nouvelle tâche
   app.post('/api/tasks', (req, res) => {
    const newTask = {
    id: tasks.length + 1,
    title: req.body.title,
    completed: false
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
   });