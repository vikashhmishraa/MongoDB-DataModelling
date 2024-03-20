import mongoose from "mongoose";

const DctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    experianceInYear: {
      type: String,
      required: true,
    },
    WorksInHospital: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hospital ",
    },
  },
  { timestamps: true }
);

export const Doctor = mongoose.model("Doctor", DctorSchema);
