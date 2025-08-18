export default function Blobs() {
    return (
        <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute top-130 right-0 h-40 w-40 rounded-full bg-[#B32222]/50 blur-2xl float-slow" />
            <div className="absolute top-80 -left-20 h-50 w-50 rounded-full bg-orange-300/50 blur-xl float-slower" />
            <div className="absolute top-140 right-140 h-40 w-40 rounded-full bg-rose-300/40 blur-xl float-slowest" />
        </div>
    );
}