import dfd from "danfojs-node";
import moment from "moment";
// import express from "express";

let csvPath = "../csv/";

let df = await dfd.readCSV("../csv/2015-03-10 17-35-02.csv");
// .then(df => {
//     df.head().print();
// });
// df.head(2).print();
// df.tail(2).print();
console.log(df.shape[0] - 1);

// console.log(df.iloc({rows: [0]}));

let z_thresh = (data, threshold) => {
  let selected_rows = data.loc({ rows: data["Z2"].abs().gt(threshold) });
  let result = selected_rows.loc({ columns: ["Latitude", "Longitude"] });
  //let sub_df = df.loc({ rows: [0,1], columns: ["Name", "Price"] })
  console.log(result.shape);
  result.head(2).print();
  return 0;
};

let z_diff = (data, threshold) => {
  let last_index = data.shape[0] - 1;
  let next_survey_data = data.drop({ index: [0] });
  let prev_survey_data = data.drop({ index: [last_index] });
  next_survey_data.resetIndex({ inplace: true });

  let Z2_diff = next_survey_data
    .loc({ columns: ["Z2"] })
    .sub(prev_survey_data.loc({ columns: ["Z2"] }));
  // Z2_diff.head(2).print();

  let Time_diff = count_time(next_survey_data, prev_survey_data);

  let diff = Z2_diff.div(Time_diff, { axis: 0 });
  // diff.head(2).print();

  let result = next_survey_data.loc({
    rows: diff["Z2"].abs().gt(threshold),
    columns: ["Latitude", "Longitude"],
  });

  console.log(result);
  console.log(result.shape);
  return result;
};

let count_time = (next_survey_data, prev_survey_data) => {
  let lenght = next_survey_data.shape[0];
  let result = [];

  for (let i = 0; i < lenght; i++) {
    var next_moment_date = moment(
      next_survey_data.loc({ columns: ["Time"] }).at(i, "Time"),
      "YYYY-MM-DD HH:mm:ss.SSS"
    );
    var prev_moment_date = moment(
      prev_survey_data.loc({ columns: ["Time"] }).at(i, "Time"),
      "YYYY-MM-DD HH:mm:ss.SSS"
    );
    var duration =
      moment.duration(next_moment_date).asMilliseconds() -
      moment.duration(prev_moment_date).asMilliseconds();
    // console.log(Math.round(duration)/1000);
    result.push(Math.round(duration) / 1000);
  }
  return result;
};

let stdev_alg = (data, threshold, windows_size) => {
  let lenght = data.shape[0];
  let window;
  let stdev;
  let indexes = [];
  for (let i = windows_size; i < lenght; i++) {
    window = data.loc({
      rows: data.index.slice(i - windows_size, i),
      columns: ["Z2"],
    });
    stdev = window.std({ axis: 0 });
    if (stdev.at("Z2") > threshold) {
      indexes.push(i);
    }
  }
  let result = data.loc({ rows: indexes, columns: ["Latitude", "Longitude"] });
  console.log(result);
  console.log(result.shape);
  return result;
};

let g_zero = (data, threshold) => {
  let a = data
    .loc({ columns: ["N", "E", "Z2"] })
    .pow(2)
    .sum()
    .pow(0.5);
  let result = data.loc({
    rows: a.lt(threshold),
    columns: ["Latitude", "Longitude"],
  });
  console.log(result);
  console.log(result.shape);
  return result;
};

// g_zero(df, 0.775);
// stdev_alg(df, 0.168, 10);
// z_thresh(df, 1.2);
//z_diff(df, 3);
