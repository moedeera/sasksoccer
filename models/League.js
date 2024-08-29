import { Schema, model, models } from "mongoose";
import { required } from "nodemon/lib/config";

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
    year: { type: Number, required: false },

    description: {
      type: String,
    },
    slug: {
      type: String,
      required: true,
    },
    groups: {
      type: Boolean,
      default: false,
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
        color1: { type: String, required: false },
        color2: { type: String, required: false },
        coach1: { type: String, required: false },
        coach2: { type: String, required: false },
        group: { type: String, required: false },
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
        // match_number: { type: Number, required: true },
      },
    ],
    details: [
      {
        group: { type: String, required: true },
        completed: { type: Boolean, required: true, default: false },
        winner: { type: String, required: true },
        runnerUp: { type: String, required: true },
        playoffs: { type: String, required: true },
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
