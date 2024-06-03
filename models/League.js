import { Schema, model, models } from "mongoose";

const LeagueSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    teams: [
      {
        id: { type: Schema.Types.ObjectId, required: true },
        name: { type: String, required: true },
        win_total: { type: Number, required: true },
        loss_total: { type: Number, required: true },
        draw_total: { type: Number, required: true },
        goals_for: { type: Number, required: true },
        goals_against: { type: Number, required: true },
      },
    ],
    games: [
      {
        home_team_id: { type: Schema.Types.ObjectId, required: true },
        away_team_id: { type: Schema.Types.ObjectId, required: true },
        home_team_goals: { type: Number, required: true },
        away_team_goals: { type: Number, required: true },
        date_of_game: { type: Date, required: true },
      },
    ],
    images: [
      {
        type: String,
      },
    ],
    is_featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const League = models.League || model("League", LeagueSchema);

export default League;
