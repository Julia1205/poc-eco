const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: 'db',
  port: '3306',
  user: 'my_user',
  password: 'my_password',
  database: 'my_database'
});

// Implémentez ici les routes pour l'API
// (login, formations, sessions, etc.)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});

// Route de connexion
app.post('/api/login', (req, res) => {
    // Implémentez la logique de connexion ici
  });
  
  // Route pour récupérer les formations d'un utilisateur
  app.get('/api/user/formations', authenticateToken, (req, res) => {
    // Implémentez la logique pour récupérer les formations de l'utilisateur
  });
  
  // Route pour ajouter une formation (admin seulement)
  app.post('/api/admin/formations', authenticateToken, isAdmin, (req, res) => {
    // Implémentez la logique pour ajouter une formation
  });
  
  // Route pour ajouter une session de formation (admin seulement)
  app.post('/api/admin/sessions', authenticateToken, isAdmin, (req, res) => {
    // Implémentez la logique pour ajouter une session de formation
  });
  
  // Route pour obtenir les statistiques des formations (admin seulement)
  app.get('/api/admin/stats', authenticateToken, isAdmin, (req, res) => {
    // Implémentez la logique pour obtenir les statistiques des formations
  });
  
  // Middleware pour vérifier le token JWT
  function authenticateToken(req, res, next) {
    // Implémentez la vérification du token JWT
  }
  
  // Middleware pour vérifier si l'utilisateur est admin
  function isAdmin(req, res, next) {
    // Implémentez la vérification des droits d'administrateur
  }
  app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
  
    // Vérifiez les identifiants de l'utilisateur dans la base de données
    const query = 'SELECT * FROM users WHERE username = ?';
    db.query(query, [username], async (err, results) => {
      if (err) {
        res.status(500).json({ error: 'Erreur lors de la connexion' });
      } else if (results.length === 0) {
        res.status(401).json({ error: 'Nom d\'utilisateur ou mot de passe incorrect' });
      } else {
        const user = results[0];
        const passwordMatch = await bcrypt.compare(password, user.password);
        
        if (passwordMatch) {
          // Générez un token JWT
          const token = jwt.sign(
            { id: user.id, username: user.username, isAdmin: user.is_admin },
            'votre_secret_jwt',
            { expiresIn: '1h' }
          );
          res.json({ token, isAdmin: user.is_admin });
        } else {
          res.status(401).json({ error: 'Nom d\'utilisateur ou mot de passe incorrect' });
        }
      }
    });
  });