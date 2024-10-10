import SearchResultModel from "../../models/SearchResultModel";

export interface DepartureProps {
    model: SearchResultModel | undefined
};

function Departure({model}: DepartureProps) {
    if (model === undefined) {
        return null;
    }

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 rounded-md">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="text-left py-3 px-4 border-b">Zeit</th>
                        <th className="text-left py-3 px-4 border-b">Gleis</th>
                        <th className="text-left py-3 px-4 border-b">ZugNr</th>
                        <th className="text-left py-3 px-4 border-b">Linie</th>
                        <th className="text-left py-3 px-4 border-b">Ziel</th>
                    </tr>
                </thead>
                <tbody>
                    {model.connections.map(c => (
                        <tr key={c["*Z"] + c.terminal.name}>
                            <td className="py-3 px-4 border-b">{new Date(c.time).toLocaleTimeString()}</td>
                            <td className="py-3 px-4 border-b">{c.track}</td>
                            <td className="py-3 px-4 border-b">{c["*Z"]}</td>
                            <td className="py-3 px-4 border-b">{c.line}</td>
                            <td className="py-3 px-4 border-b">{c.terminal.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Departure;