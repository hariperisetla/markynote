import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-neutral-900 min-h-screen text-neutral-500">
      <div className="flex w-full md:px-0 px-5 text-center container mx-auto max-w-5xl justify-center items-center h-screen flex-col space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-2xl md:text-4xl font-semibold">
            Unlock Your Creativity with{" "}
            <span className="text-green-500">MarkyNote</span>
          </h1>

          <p className="text-lg md:text-xl font-semibold">
            A Note-Taking App and Text Editor for Everyone
          </p>
        </div>

        <p className="text-base md:text-lg">
          MarkyNote is your go-to solution for capturing ideas, organizing
          thoughts, and unleashing your creativity. Whether you&apos;re a
          writer, student, or professional, MarkyNote empowers you to streamline
          your workflow and focus on what matters most: your content.
        </p>

        <button className="bg-green-500 text-gray-900 font-semibold rounded-md px-5 py-2">
          Start Writing
        </button>
      </div>
    </main>
  );
}
