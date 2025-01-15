const BewertungFeedback = require("../models/BewertungFeedback");

module.exports = {
  create: async function (req, res) {
    // Recibir parámetros del cuerpo de la solicitud
    let params = req.allParams();

    // Crear el feedback
    await BewertungFeedback.create(params);


        // Obtener todos los feedbacks relacionados al evento
        const allFeedbacks = await BewertungFeedback.find({
          feedbackEventOf: params.feedbackEventOf,
        });
    
        // Calcular el promedio de las calificaciones
        const totalBewertungen = allFeedbacks.length;
        const sumBewertungen = allFeedbacks.reduce((sum, feedback) => sum + feedback.bewertung, 0);
        const avgBewertung = totalBewertungen > 0 ? sumBewertungen / totalBewertungen : 0;
    
        // Actualizar la puntuación promedio del evento
        await Event.updateOne({ id: params.feedbackEventOf }).set({ bewertung: avgBewertung });



       

    // // Calcular la media de la puntuación para el evento
    // let AVERAGE_BEWERTUNG = `
    //   SELECT AVG(bewertung) as avgBewertung
    //   FROM citypulse_prod.bewertungfeedback
    //   WHERE bewertungEventOf = $1`;

    // let rawResult = await sails.sendNativeQuery(AVERAGE_BEWERTUNG, [params.feedbackEventOf]);
    // sails.log.debug(rawResult);

    // let avgBewertung = rawResult.rows[0].avgBewertung;
    // sails.log.debug(avgBewertung);

    // // Actualizar la puntuación promedio del evento
    // await Event.updateOne({ id: params.feedbackEventOf }).set({ bewertung: avgBewertung });

    return res.ok();

  },

  
  destroy: async function (req, res) {
    sails.log.debug("Delete article....");
    await BewertungFeedback.destroy({ id: req.params.id });
    res.ok();
  },


  // Feedback aktualisieren
  update: async function (req, res) {
    try {
      const { id } = req.params;
      const { bewertung } = req.body;

      // Validierung
      if (bewertung == null || bewertung < 0 || bewertung > 5) {
        return res.status(400).json({ error: 'Bewertung muss zwischen 0 und 5 liegen.' });
      }

      // Feedback aktualisieren
      const updatedFeedback = await Feedback.updateOne({ id }).set({ bewertung });

      if (!updatedFeedback) {
        return res.status(404).json({ error: 'Feedback nicht gefunden.' });
      }

      // Holen der feedbackEventOf ID aus dem aktualisierten Feedback
      const feedbackEventOf = updatedFeedback.feedbackEventOf;

      // Berechne die Durchschnittsbewertung für das Event
      var AVERAGE_BEWERTUNG = `
        SELECT AVG(bewertung) AS avgBewertung
        FROM bewertungfeedback
        WHERE bewertungEventOf = $1`;

      var rawResult = await sails.sendNativeQuery(AVERAGE_BEWERTUNG, [feedbackEventOf])
      sails.log(rawResult);

      const avgBewertung = rawResult.rows[0].avgBewertung;
      sails.log(avgBewertung);

      // Aktualisiere die Event-Bewertung
      await Event.updateOne({ id: feedbackEventOf })
        .set({ bewertung: avgBewertung });

      return res.status(200).json({
        message: 'Feedback erfolgreich aktualisiert und Event-Bewertung aktualisiert.',
        data: updatedFeedback,
      });
    } catch (err) {
      sails.log.error('Fehler beim Aktualisieren von Feedback:', err);
      return res.status(500).json({ error: 'Interner Serverfehler.' });
    }
  },



  // // Feedbacks für ein Event abrufen
  // listByEvent: async function (req, res) {
  //   try {
  //     const { eventId } = req.params;

  //     if (!eventId) {
  //       return res.status(400).json({ error: 'Event-ID erforderlich.' });
  //     }

  //     const feedbacks = await Feedback.find({ feedbackEventOf: eventId });

  //     return res.status(200).json({
  //       message: 'Feedbacks erfolgreich abgerufen.',
  //       data: feedbacks,
  //     });
  //   } catch (err) {
  //     sails.log.error('Fehler beim Abrufen von Feedbacks:', err);
  //     return res.status(500).json({ error: 'Interner Serverfehler.' });
  //   }
  // },


  find: async function (req, res) {
    try {
      const userId = req.session.userId; 
  
      if (!userId) {
        return res.forbidden({ message: 'Benutzer nicht eingeloggt' });
      }
  
      const feedback = await BewertungFeedback.find({ userId });
      sails.log.debug('Feedback von dem Benutzer:', feedback);
  
      return res.json(feedback);
    } catch (error) {
      sails.log.error('Fehler beim Abrufen der Tickets:', error);
      return res.serverError({ message: 'Fehler beim Abrufen der Tickets' });
    }},


  };


