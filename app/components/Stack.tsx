import { StickyCard002 } from "@/components/ui/skiper-ui/skiper17";

export function CustomDemo() {
  const customCards = [
    {
      id: "project-1",
      image: "https://res.cloudinary.com/dklqsfwcu/image/upload/v1762281749/splash2_bq9lx2.png",
      alt: "Project 1",
    },
    {
      id: "project-2",
      image: "https://images.unsplash.com/photo-1632215863479-201029d93143?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=869",
      alt: "Project 2",
    },
    {
      id: "project-3",
      image: "https://images.unsplash.com/photo-1632215863479-201029d93143?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=869",
      alt: "Project 3",
    },
  ];

  return (
    <div className="h-screen w-full">
      <StickyCard002
        cards={customCards}
        className="bg-gradient-to-br from-gray-900 to-black"
        containerClassName="rounded-2xl shadow-2xl"
        imageClassName="object-contain"
      />
    </div>
  );
};
