import { Schema, model, models } from "mongoose";

const LeagueDataSchema = new Schema(
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

    details: [
      {
        group: { type: String, required: true },
        description: {
          type: String,
        },
        games: { type: String },
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

const League = models.League || model("League", LeagueDataSchema);

export default League;
