import ParallaxMedia from "@/components/site/ParallaxMedia";

export default function DoctorCard({ doctor }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg">
      <div className="relative aspect-[4/5] shrink-0 overflow-hidden rounded-lg">
        <ParallaxMedia
          src={doctor.img}
          alt={`${doctor.name}, ${doctor.specialty} · BVD Clinic`}
          frameClassName="h-full w-full"
          imageClassName="object-[50%_28%]"
          zoom="in"
          strength={0.6}
        />
      </div>
      <div className="card-pad-sm mt-4 flex flex-1 flex-col rounded-lg bg-[#eff1f5]">
        <div className="text-meta mb-2 text-[#37465c]">{doctor.specialty}</div>
        <h3 className="mb-2">{doctor.name}</h3>
        <div className="text-[0.85rem] text-[#616161]">{doctor.focus}</div>
        <p className="mt-4 text-[0.95rem]">{doctor.bio}</p>
      </div>
    </article>
  );
}