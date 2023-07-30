import React, {useState, useEffect, Fragment} from "react";
import AlgorithmStats from "./tabContent/AlgorithmStats";
import AlgorithmMap from "./tabContent/AlgorithmMap";
import Grid from "@material-ui/core/Grid";
import Information from "./Information";

export default function AlgorithmTabContent({results, algorithmId}) {
    const [algorithmStats, setAlgorithmStats] = useState([]);
    const [algorithmTruePositives, setAlgorithmTruePositives] = useState([]);
    const [algorithmFalsePositives, setAlgorithmFalsePositives] = useState([]);
    const [algorithmFalseNegatives, setAlgorithmFalseNegatives] = useState([]);
    const [isError, setIsError] = useState(false);

    //selecting data for current algorithm
    useEffect(() => {
        const selectedAlgorithmData = results.find((element) => element.algorithmId === algorithmId);
        if (selectedAlgorithmData.error) {
            setIsError(true);
        } else {
            setIsError(false);
            setAlgorithmStats(selectedAlgorithmData.stats);
            setAlgorithmTruePositives(selectedAlgorithmData.tp);
            setAlgorithmFalsePositives(selectedAlgorithmData.fp);
            setAlgorithmFalseNegatives(selectedAlgorithmData["fn"]);
        }
    }, [algorithmId, results, isError]);


    return (
        <Fragment>
            {isError
                ? <Information text={'Algorytm wykonywał się zbyt długo'}/>
                : <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="stretch"
                >
                    <Grid item xs={3}>
                        <AlgorithmStats stats={algorithmStats}/>
                    </Grid>
                    <Grid item xs={9}>
                        <AlgorithmMap
                            truePositives={algorithmTruePositives}
                            falsePositives={algorithmFalsePositives}
                            falseNegatives={algorithmFalseNegatives}
                        />
                    </Grid>
                </Grid>
            }
        </Fragment>
    )
}
