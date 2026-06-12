import { supabase } from "@/lib/supabase";
import Sidebar from "@/components/Sidebar";
import HeroCard from "@/components/HeroCard";
import CourseCard from "@/components/CourseCard";
import ActivityCard from "@/components/ActivityCard";
import MobileNav from "@/components/MobileNav";

export default async function Home() {
  const { data: courses } = await supabase
    .from("courses")
    .select("*");

  return (
    <main className="min-h-screen bg-zinc-950 text-white p-6 pb-24">
      <div className="grid lg:grid-cols-[250px_1fr] gap-6">

        <Sidebar />

        <section className="grid gap-6">
          <HeroCard />

          <div className="grid lg:grid-cols-2 gap-6 auto-rows-fr">
            {courses?.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
              />
            ))}
          </div>

          <ActivityCard />
        </section>
        <MobileNav />
      </div>
    </main>
  );
}