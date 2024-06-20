import { Schema, model, models } from "mongoose";

const LeagueSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
    admin: {
      type: String,
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
    slug: {
      type: String,
      required: true,
    },
    teams: [
      {
        team_id: { type: String, required: false },
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
        game_id: { type: String, required: false },
        home_team_name: { type: String, required: true },
        away_team_name: { type: String, required: true },
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
