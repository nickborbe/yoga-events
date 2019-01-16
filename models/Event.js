const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  title: String,
  description: String,
  date: Date,
  organizer: Schema.Types.ObjectId,
  maybes: [Schema.Types.ObjectId],
  going: [Schema.Types.ObjectId],
  notGoing: [Schema.Types.ObjectId]
}, {
  timestamps: true
});

const Event = mongoose.model('Event', userSchema);
module.exports = Event;
