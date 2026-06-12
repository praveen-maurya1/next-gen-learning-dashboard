export default function Loading() {
    return (
        <main className="min-h-screen bg-zinc-950 p-6">
            <div className="animate-pulse space-y-6">
                <div className="h-36 rounded-3xl bg-zinc-800" />

                <div className="grid md:grid-cols-2 gap-6">
                    {[1, 2, 3, 4].map((item) => (
                        <div
                            key={item}
                            className="h-56 rounded-3xl bg-zinc-800"
                        />
                    ))}
                </div>

                <div className="h-64 rounded-3xl bg-zinc-800" />
            </div>
        </main>
    );
}