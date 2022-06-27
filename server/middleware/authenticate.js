import firebaseAdmin from "../config-firebase/firebase-services.js";
import pool from '../db.js';
export default async function (req, res, next) {
  try {
    const firebaseToken = req.headers.authorization?.split(" ")[1];

    let firebaseUser;
    if (firebaseToken) {
      firebaseUser = await firebaseAdmin.auth.verifyIdToken(firebaseToken);
    }

    if (!firebaseUser) {
      // Le auth_token n'est pas bon
      return res.sendStatus(401);
    }

    const idUserQuery = {
      text: 'SELECT id_user FROM USERS WHERE id_firebase = $1',
      values: [firebaseUser.user_id],
    
    }
    const user = await pool.query(idUserQuery);

    if (!user.rows[0]) {
      // Unauthorized
      return res.sendStatus(401);
    }
    req.id_user = user.rows[0].id_user;

    next();
  } catch (err) {
    //Erreur
    res.sendStatus(401);
  }
}