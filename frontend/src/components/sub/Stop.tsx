import SearchResultModel from "../../models/SearchResultModel";

export interface StopProps {
    model: SearchResultModel | undefined;
};

function Stop({model} : StopProps) {

    if (model == undefined) {
        return null;
    }

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{model.stop.name}</h1>
        </div>
    )
};

export default Stop;