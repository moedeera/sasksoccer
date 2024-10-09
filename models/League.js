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
    year: { type: Number, required: true, default: 2024 },

    description: {
      type: String,
    },
    category: {
      type: String,
      required: true,
      default: "indoor",
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
      },
    ],
    details: [
      {
        group: { type: String, required: true },
        completed: { type: Boolean, required: true, default: false },
        winner: { type: String, required: true },
        runnerUp: { type: String, required: true },
        playoffs1: { type: String, required: true },
        playoffs2: { type: String, required: true },
        final: { type: String, required: true },
        link: { type: String, required: false },
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
