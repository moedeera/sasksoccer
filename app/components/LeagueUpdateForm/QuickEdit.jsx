import { Textarea } from "../../../components/ui/textarea";
import React, { useState } from "react";
import { updateTeamStats } from "./Functions";

const QuickEdit = ({ teams, setTeams, league, error, setError }) => {
  const [results, setResults] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePublish = () => {
    // setLoading(true);

    const update = updateTeamStats(results, teams);
    setTeams(update);
    console.log(update);
    // ...your logic for publishing the results
  };

  return (
    <div className="border border-black min-h-80 p-3 bg-gray-100">
      QuickEdit
      <div>
        {loading ? (
          <div>loading</div>
        ) : (
          <>
            <Textarea
              value={results}
              onChange={(e) => setResults(e.target.value)}
              className="min-h-[200px] w-full mt-2"
              placeholder="Enter results here..."
            />
            <button
              onClick={handlePublish}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Publish results
            </button>
            <button
              onClick={() => {
                console.log(teams);
              }}
              className="mt-2 ml-1 px-4 py-2 bg-blue-500 text-white rounded"
            >
              View Teams Hook
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default QuickEdit;
