export default function ActivityCard() {
    return (
        <div className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800">
            <h2 className="text-xl font-semibold mb-4">
                Learning Activity
            </h2>

            <div className="grid grid-cols-12 gap-2 h-40 items-end">
                {[20, 50, 30, 80, 40, 60, 90, 70, 45, 55, 85, 65].map((h, i) => (
                    <div
                        key={i}
                        className="bg-gradient-to-t from-blue-500 to-cyan-400 rounded-md"
                        style={{ height: `${h}%` }}
                    />
                ))}
            </div>

            <p className="text-zinc-400 text-sm mt-4">
                Last 12 days activity
            </p>
        </div>
    );
}