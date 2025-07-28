import express from 'express';
import dotenv from 'dotenv';
import fetch from 'node-fetch';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST'],
}));

app.use(express.json());

app.post('/api/subscribe', async (req, res) => {
  const { email } = req.body;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Adresse email invalide' });
  }

  try {
    const response = await fetch('https://bot.boxspot.ma/send-message', {
      method: 'POST',
      headers: {
        'X-API-Key': process.env.BOXSPOT_API_KEY || '',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: '-902707427',
        message: `Nouvelle inscription newsletter: ${email}`
      })
    });

    if (!response.ok) throw new Error('Erreur BoxSpot API');

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erreur serveur' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ API démarrée sur http://localhost:${PORT}`);
});
