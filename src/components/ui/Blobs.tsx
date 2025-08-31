export default function Blobs() {
    return (
        <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute top-60 left-105 h-40 w-40 rounded-full bg-[#B32222] blur-2xl float-slow" />
            <div className="absolute top-100 right-120 h-30 w-30 rounded-full bg-orange-300/50 blur-xl float-slower" />
            <div className="absolute top-170 right-140 h-35 w-35 rounded-full bg-rose-300/40 blur-xl float-slowest" />
        </div>
    );
}